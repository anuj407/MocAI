import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import Options from './_components/Options'
import LatestInterviews from './_components/LatestInterviews'

function Dashboard() {
  return (
    <div className='px-6'>
      {/* <WelcomeContainer/> */}
      <h1 className='my-4 text-xl font-medium'>Dashboard</h1>
      <Options/>
      <LatestInterviews/>
    </div>
  )
}

export default Dashboard