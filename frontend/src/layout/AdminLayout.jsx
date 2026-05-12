import React from 'react'
import Sidebar from '../components/admin/Sidebar'
import TopHeader from '../components/admin/TopHeader'
import Dashboard from '../pages/admin/Dashboard'

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 bg-[#f5f5ff] min-h-screen ">
        <TopHeader />
        <Dashboard />
      </div>
    </div>
  )
}

export default AdminLayout