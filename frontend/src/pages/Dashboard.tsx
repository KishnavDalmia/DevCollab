import React from 'react'
import DashNav from '../components/DashNav'
import Cards from '../components/Cards'

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-black gap-3 px-18">
      <DashNav />
      <h1 className="text-white text-4xl font-bold mt-16">Welcome back</h1>
      <h3 className="text-neutral-400/80 text-lg">Manage your workspaces and projects.</h3>
      <Cards />
    </div>
  )
}

export default Dashboard