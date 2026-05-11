import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: "ti-layout-dashboard", path: "/admin" },
  { name: "Products", icon: "ti-package", path: "/admin/products" },
  { name: "Orders", icon: "ti-shopping-cart", path: "/admin/orders" },
  { name: "Users", icon: "ti-users", path: "/admin/users" },
  { name: "Settings", icon: "ti-settings", path: "/admin/settings" },
];

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="w-56 min-h-screen bg-white border-r border-[#e0e0ff] flex flex-col px-3 py-6">

      <div className="px-2 mb-8">
        <p className="text-[#6C63FF] text-base font-medium">Admin Panel</p>
        <p className="text-gray-400 text-xs mt-1">Driksha Infotech</p>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition w-full text-left ${
              active === item.name
                ? "bg-[#6C63FF] text-white"
                : "text-gray-500 hover:bg-[#f5f5ff]"
            }`}
          >
            <i className={`ti ${item.icon} text-lg`} aria-hidden="true"></i>
            {item.name}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#FF6584] hover:bg-[#fff0f3] transition w-full text-left border-t border-[#e0e0ff] pt-4 mt-4">
        <i className="ti ti-logout text-lg" aria-hidden="true"></i>
        Logout
      </button>

    </div>
  );
}

export default Sidebar;