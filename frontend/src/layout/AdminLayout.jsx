import React from 'react'
import Sidebar from '../components/admin/Sidebar'

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 bg-[#f5f5ff] min-h-screen p-6">
        <p className="text-gray-400">Dashboard content</p>
      </div>
    </div>
  )
}

export default AdminLayout