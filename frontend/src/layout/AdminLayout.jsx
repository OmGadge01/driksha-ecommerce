import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import TopHeader from '../components/admin/TopHeader'
import Dashboard from '../pages/admin/Dashboard'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <div className="shrink-0">
          <TopHeader onMenuClick={() => setSidebarOpen(true)} pageTitle="Dashboard" breadcrumb="Admin > Dashboard" />
        </div>
        <main className="flex-1 overflow-y-auto bg-[#f5f5ff] p-3 sm:p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
