"use client";
import { useUser } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function QuestionList({ formData ,CreateInterviewLink}) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const hasRequested = useRef(false); // ✅ New ref to prevent duplicate requests
  const { user } = useUser();
  const generateQuestions = async () => {
    try {
      const result = await axios.post("/api/ai-model", {
        jobPosition: formData.position,
        description: formData.description,
        duration: formData.duration,
        type: formData.type,
      });

      setQuestions(result.data.questions || []);
      setLoading(false);
    } catch (err) {
      console.error("Error generating questions:", err);
      if (err?.response?.status === 429) {
        setError("You're sending too many requests. Please try again later.");
      } else {
        setError("Failed to generate questions. Please try again.");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      formData?.position &&
      formData?.description &&
      formData?.duration &&
      formData?.type &&
      !hasRequested.current &&
      questions.length == 0
    ) {
      console.log("Requesting AI for questions with data:");

      hasRequested.current = true;
      generateQuestions();
    }
  }, [formData]);
console.log("Form Data:", formData);

  // Handle finish action
  const onFinish = async () => {
    const interview_id = uuidv4();
    const { data, error } = await supabase
      .from("Interviews")
      .insert([
        {
          ...formData, // spread formData fields inside the row
          questionList: questions,
          userEmail: user?.email,
          interview_id: interview_id,
        },
      ])
      .select();

      CreateInterviewLink(interview_id);
  };

  if (loading) {
    return (
      <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center gap-4 shadow">
        <Loader2Icon className="animate-spin text-gray-700 dark:text-gray-200 w-6 h-6" />
        <div>
          <h2 className="font-medium text-gray-800 dark:text-gray-100">
            Generating Interview Questions...
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Our AI is crafting personalized questions based on your input.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md shadow">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Generated Interview Questions:
      </h2>

      {questions.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No questions generated. Try changing your inputs and regenerating.
        </p>
      ) : (
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-100">
            {questions.map((q, index) => (
              <li key={index}>
                <span className="font-medium">{q.type}:</span> {q.question}
              </li>
            ))}
          </ul>
          <Button onClick={onFinish}>
            <Loader2Icon className="animate-spin w-4 h-4 mr-2" />
            Create Invertview Link & Finish
          </Button>
        </>
      )}
    </div>
  );
}

export default QuestionList;
