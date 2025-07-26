import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSidebar'
import WelcomeHeader from './dashboard/_components/WelcomeContainer'

function DashboardProvider({children}) {
  return (
    <SidebarProvider>
      <AppSidebar/>
        <div className='w-full'>
          {/* <SidebarTrigger/> */}
          <WelcomeHeader/>
          {children}
        </div>
    </SidebarProvider>
  )
}

export default DashboardProvider