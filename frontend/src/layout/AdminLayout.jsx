import React from 'react'
import Sidebar from '../components/admin/Sidebar'
import TopHeader from '../components/admin/TopHeader'

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 bg-[#f5f5ff] min-h-screen ">
        <TopHeader />
        <p className="text-gray-400">Dashboard content</p>
      </div>
    </div>
  )
}

export default AdminLayout