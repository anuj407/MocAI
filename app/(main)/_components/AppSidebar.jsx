"use client"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarOptions } from "@/services/constant"
import { Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar({ children }) {
  const path = usePathname();

  return (
    <Sidebar className="bg-white shadow-lg border-r border-gray-200">
      <SidebarHeader className="p-5 border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-800">🎙 MocAi Dashboard</h1>
        <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md">
          <Plus className="mr-2" size={18} />
          Create New Interview
        </Button>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarMenu className="space-y-2">
            {SidebarOptions.map((option, index) => {
              const isActive = path === option.path;

              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={option.path}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
                        ${isActive
                          ? "bg-blue-100 text-blue-700 font-semibold shadow-sm"
                          : "hover:bg-gray-100 text-gray-700"}`}
                    >
                      <option.icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-500"}`} />
                      <span className={`text-sm ${isActive ? "text-blue-700" : "text-gray-700"}`}>
                        {option.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 text-center text-sm text-gray-400">
        © 2025 MocAi
      </SidebarFooter>
    </Sidebar>
  );
}
