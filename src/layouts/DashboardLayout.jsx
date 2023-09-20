/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 md:p-10">
      <div className="w-full md:w-[30%] lg:w-[20%] p-6 rounded-lg shadow-md">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/editProfile">Edit Profile</Link></li>
        </ul>
      </div>

      <div className="w-full md:w-[70%] lg:w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default DashboardLayout
