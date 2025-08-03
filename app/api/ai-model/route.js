import { Question_PROMPT } from "@/services/constant";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const { jobPosition, description, duration, type } = await req.json();
  const FINAL_PROMPT = Question_PROMPT
    .replace("{{jobTitle}}", jobPosition)
    .replace("{{jobDescription}}", description)
    .replace("{{duration}}", duration)
    .replace("{{type}}", type);

  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPEN_ROUTER_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free",
      messages: [
        {
          role: "user",
          content: FINAL_PROMPT,
        },
      ],
    });
    
    let content = response.choices[0].message.content;
    // ✅ Remove ```json and ``` if present
    content = content.trim();
    if (content.startsWith("```json")) {
      content = content.replace(/^```json/, "").trim();
    }
    if (content.endsWith("```")) {
      content = content.replace(/```$/, "").trim();
    }

    let parsedQuestions;
    try {
      const json = JSON.parse(content);
      parsedQuestions = json.interviewQuestions || json.questions || [];
    } catch (parseErr) {
      console.error("Failed to parse AI response:", content);
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 500 }
      );
    }

    return NextResponse.json({ questions: parsedQuestions }, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
