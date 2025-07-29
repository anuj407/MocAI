"use client";
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import FormContainer from './_components/FormContainer';

function CreateInterview() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    position: '',
    description: '',
    duration: '',
    type: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.position) newErrors.position = "Job position is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.duration) newErrors.duration = "Duration must be selected";
    if (!formData.type) newErrors.type = "Please select an interview type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted", formData);
      // Navigate to next step or API call here
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-6">
      <div className="max-w-2xl mx-auto flex items-center gap-4 mb-2">
        <button
          onClick={() => router.back()}
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
          <span>Step 1 of 3</span>
          <span>33%</span>
        </div>
        <Progress value={33} />
      </div>

      <div className="max-w-2xl mx-auto">
        <FormContainer
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          errors={errors}
        />
      </div>
    </div>
  );
}

export default CreateInterview;
