import { PhoneCall, Video , CalendarDays, Phone} from "lucide-react";
import Link from "next/link";
import React from "react";

function Options() {
  const newInterview = [
    {
      title: "Create New Interview",
      subtitle: "AI-powered Interview Scheduling",
      icon: <Video className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-500",
      topRight: (
        <div className="flex items-center gap-1 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          <CalendarDays className="w-4 h-4" />
          <span>Schedule</span>
        </div>
      ),
    },
  ];
  const callInterview =[
    {
    title: "Create Phone Screening Call",
    subtitle: "Schedule real-time phone interviews",
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    iconBg: "bg-green-500",
    topRight: (
      <div className="flex items-center gap-1 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
        <Phone className="w-4 h-4" />
        <span>Live</span>
      </div>
    ),
  },
  ]

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-6">
      {newInterview.map((card, index) => (
        <Link  key={index} href='/dashboard/create-interview'>
          <div
            className="group relative w-full sm:w-[34rem] p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top-right corner content */}
            <div className="absolute top-4 right-4">
              {card.topRight}
            </div>

            {/* Icon */}
            <div className={`w-12 h-12 ${card.iconBg} flex items-center justify-center rounded-xl mb-4`}>
              {card.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:underline">
              {card.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {card.subtitle}
            </p>
          </div>
        </Link>
      ))}
      {callInterview.map((card, index) => (
        <Link href='#' key={index} >
          <div
            className="group relative w-full sm:w-[34rem] p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top-right corner content */}
            <div className="absolute top-4 right-4">
              {card.topRight}
            </div>

            {/* Icon */}
            <div className={`w-12 h-12 ${card.iconBg} flex items-center justify-center rounded-xl mb-4`}>
              {card.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:underline">
              {card.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {card.subtitle}
            </p>
          </div>
        </Link>
      ))}
      
    </div>
  );
}


export default Options;
