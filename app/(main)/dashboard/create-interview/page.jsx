"use client";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import FormContainer from "./_components/FormContainer";
import QuestionList from "./_components/QuestionList";
import InterviewLink from "./_components/InterviewLink";

function CreateInterview() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    position: "",
    description: "",
    duration: "",
    type: "",
  });

  // Update step and progress
  const [step, setStep] = useState(3);
  const progressMap = { 1: 33, 2: 66, 3: 100 };

  

  // Form Validation
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.position) newErrors.position = "Job position is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.duration) newErrors.duration = "Duration must be selected";
    if (!formData.type) newErrors.type = "Please select an interview type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  // Create Interview Link
  const [interview_id, setInterviewId] = useState("");
  const CreateInterviewLink = (interview_id) => {
    setInterviewId(interview_id);
    setStep((prev) => Math.min(prev + 1, 3));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-6">
      <div className="max-w-2xl mx-auto flex items-center gap-4 mb-2">
        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Create Interview
        </h1>
      </div>

      <div className="max-w-2xl mx-auto px-2 mb-4">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
          <span>Step {step} of 3</span>
          <span>{progressMap[step]}%</span>
        </div>
        <Progress value={progressMap[step]} />
      </div>

      <div className="max-w-2xl mx-auto">
       {step === 1 && (
        <FormContainer
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            errors={errors}
          />) 
       } 
       {step === 2 ? 
         <QuestionList 
            formData={formData}
            CreateInterviewLink={CreateInterviewLink}
         /> : null
       }
       {
         step === 3 &&
         <InterviewLink formData={formData} interview_id={interview_id} />
       }
      </div>
    </div>
  );
}

export default CreateInterview;
