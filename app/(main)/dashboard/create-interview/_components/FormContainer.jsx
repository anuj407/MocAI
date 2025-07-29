import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2Icon,
  BrainIcon,
  UsersIcon,
  MessageCircleIcon,
  BriefcaseIcon,
  LightbulbIcon,
} from "lucide-react";

const interviewTypes = [
  { label: "Technical", value: "technical", icon: Code2Icon },
  { label: "Behavioral", value: "behavioral", icon: UsersIcon },
  { label: "Problem Solving", value: "problem-solving", icon: BrainIcon },
  { label: "Leadership", value: "leadership", icon: LightbulbIcon },
  { label: "Experience", value: "experience", icon: BriefcaseIcon },
  { label: "Communication", value: "communication", icon: MessageCircleIcon },
];

function FormContainer({ formData, setFormData, onSubmit, errors }) {
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md space-y-6"
    >
      <div>
        <h1 className="text-lg font-semibold mb-2">Job Position</h1>
        <Input
          placeholder="e.g. Full Stack Developer"
          value={formData.position}
          onChange={(e) => handleChange("position", e.target.value)}
        />
        {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
      </div>

      <div>
        <h1 className="text-lg font-semibold mb-2">Job Description</h1>
        <Textarea
          className="h-[130px]"
          placeholder="e.g. Enter detailed job description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div>
        <h1 className="text-lg font-semibold mb-2">Interview Duration</h1>
        <Select onValueChange={(val) => handleChange("duration", val)}>
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 min</SelectItem>
            <SelectItem value="10">10 min</SelectItem>
            <SelectItem value="15">15 min</SelectItem>
            <SelectItem value="30">30 min</SelectItem>
            <SelectItem value="45">45 min</SelectItem>
            <SelectItem value="60">60 min</SelectItem>
          </SelectContent>
        </Select>
        {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
      </div>

      <div>
        <h1 className="text-lg font-semibold mb-2">Interview Type</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {interviewTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = formData.type === type.value;
            return (
              <Button
                key={type.value}
                variant={isSelected ? "default" : "outline"}
                className={`flex cursor-pointer items-center gap-2 justify-start ${
                  isSelected ? "bg-emerald-600 text-white" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleChange("type", type.value);
                }}
              >
                <Icon className="w-4 h-4" />
                {type.label}
              </Button>
            );
          })}
        </div>
        {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
      </div>

      <div className="pt-4 text-right">
        <Button type="submit" className="w-full cursor-pointer sm:w-auto">
          Generate Questions <ArrowRight className="ml-2" />
        </Button>
      </div>
    </form>
  );
}

export default FormContainer;
