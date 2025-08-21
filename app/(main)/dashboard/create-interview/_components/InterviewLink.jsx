"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Check,
  Clock,
  List,
  Mail,
  Copy,
  LayoutDashboard,
  FileText,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaWhatsapp, FaSlack } from "react-icons/fa";

function InterviewLink({ formData, interview_id }) {
  const getInterviewUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/interview/${interview_id}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getInterviewUrl);
    toast.success("Interview link copied to clipboard!");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8 bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
      {/* ✅ Header Section */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 flex items-center justify-center bg-green-500 rounded-full shadow-md animate">
          <Check className="text-white h-12 w-12 animate-pulse" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Your AI Interview is Ready 🎉
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg">
          Share this link with your candidates to start the interview process.  
          The link will remain active for <span className="font-medium">30 days</span>.
        </p>
      </div>

      {/* ✅ Interview Link Section */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
          Interview Link
        </h4>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input value={getInterviewUrl} disabled className="flex-1" />
          <Button
            onClick={handleCopy}
            className="sm:w-auto flex items-center gap-2 transition hover:scale-105 hover:bg-primary/90"
          >
            <Copy className="w-4 h-4" /> Copy Link
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700" />

      {/* ✅ Interview Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300 text-center">
        <div className="flex flex-col items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          <span className="font-medium">{formData?.duration || "—"} mins</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <List className="w-6 h-6 text-primary" />
          <span className="font-medium">10 Questions</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          <span className="font-medium">Expires in 30 days</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700" />

      {/* ✅ Share Section */}
      <div>
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
          Share via
        </h4>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Mail className="w-4 h-4" /> Email
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-green-600 border-green-500 transition hover:bg-green-100"
          >
            <FaWhatsapp className="w-4 h-4" /> WhatsApp
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-purple-600 border-purple-500 transition hover:bg-purple-100"
          >
            <FaSlack className="w-4 h-4" /> Slack
          </Button>
        </div>
      </div>

      {/* ✅ Bottom Navigation */}
      <div className="flex flex-wrap gap-4 justify-end">
        <Link href="/dashboard">
          <Button
            variant="secondary"
            className="flex items-center gap-2 px-6 transition hover:scale-105 hover:bg-secondary/80"
          >
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Button>
        </Link>
        <Link href="/dashboard/interview">
          <Button
            variant="secondary"
            className="flex items-center gap-2 px-6 transition hover:scale-105 hover:bg-secondary/80"
          >
            <FileText className="w-4 h-4" /> Interviews
          </Button>
        </Link>
        <Link href="/dashboard/interview/create">
          <Button className="bg-primary text-white flex items-center gap-2 px-6 transition hover:scale-105 hover:bg-primary/90">
            <PlusCircle className="w-4 h-4" /> New Interview
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default InterviewLink;