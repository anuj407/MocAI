import { Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";

export const SidebarOptions =[
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        name: "Scheduled Interview",
        icon: Calendar,
        path: "/scheduled-interview",
    },
    {
        name: "All Interview",
        icon: List,
        path: "/all-interview",
    },
    {
        name: "Billing",
        icon: WalletCards,
        path: "/billing",
    },
    {
        name: "Settings",
        icon: Settings,
        path: "/settings",
    },
]

export const Question_PROMPT = `You are an expert technical interviewer and AI recruiter.

Your goal is to generate a structured, relevant, and time-optimized interview plan for the following role:

📌 Job Title: {{jobTitle}}
📝 Job Description: {{jobDescription}}
⏳ Interview Duration: {{duration}} minutes
🧪 Interview Type: {{type}} (e.g., Technical, Behavioral, Experience-based, Problem Solving, Leadership)

🎯 Your Task:
1. Analyze the job description to identify key responsibilities, required skills, and expected experience.
2. Generate a high-quality list of interview questions tailored to the role.
3. Adjust the number and depth of questions based on the interview duration.
4. Ensure the tone and structure of the questions align with a real-world {{type}} interview.
5. Categorize each question using an appropriate type label (e.g., 'Technical', 'Behavioral', etc.)

📦 Format your response in **valid JSON** with the following structure:
interviewQuestions = [
  {
    "question": "Your question here?",
    "type": "Technical | Behavioral | Experience | Problem Solving | Leadership"
  },
  ...
]

⚠️ Do not include explanations or extra text. Return only the JSON response.
`