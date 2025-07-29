"use client";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import React from "react";

function LatestInterviews() {
  const [interviewsList, setInterviews] = React.useState([]);

  return (
    <section className="">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Previously Created Interviews
      </h2>

      {interviewsList.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 py-16 px-6 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
          <Video className="w-12 h-12 text-blue-600 mb-4" />

          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
            No Interviews Found
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            You haven't created any interviews yet. Click below to create your first one.
          </p>

          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 cursor-pointer rounded-md shadow transition duration-200"
            onClick={() => {
              // Redirect or open form logic here
              console.log("Redirect to Create Interview");
            }}
          >
            + Create New Interview
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Render interview cards here in the future */}
        </div>
      )}
    </section>
  );
}

export default LatestInterviews;
