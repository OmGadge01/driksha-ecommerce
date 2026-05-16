import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdOutlineCategory,
  MdOutlinePeople,
  MdOutlinePhoto,
  MdOutlineHelp,
  MdOutlineMail,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineClose,
} from "react-icons/md";

const NAV_SECTIONS = [
  {
    items: [
      { name: "Dashboard", icon: MdOutlineDashboard, path: "/admin" },
    ],
  },
  {
    label: "Catalog",
    items: [
      { name: "Products",   icon: MdOutlineInventory2, path: "/admin/products"   },
      { name: "Categories", icon: MdOutlineCategory,   path: "/admin/categories" },
    ],
  },
  {
    label: "Sales",
    items: [
      { name: "Orders",    icon: TiShoppingCart,  path: "/admin/orders",    badge: 8 },
      { name: "Customers", icon: MdOutlinePeople, path: "/admin/customers"           },
    ],
  },
  {
    label: "Content",
    items: [
      { name: "Banner", icon: MdOutlinePhoto, path: "/admin/banner"     },
      { name: "FAQ Manager",     icon: MdOutlineHelp,  path: "/admin/faq"        },
      { name: "Newsletter",      icon: MdOutlineMail,  path: "/admin/newsletter" },
    ],
  },
  {
    label: "Config",
    items: [
      { name: "Settings", icon: MdOutlineSettings, path: "/admin/settings" },
    ],
  },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  function handleLogout() {
    setLoggingOut(true);
    setTimeout(() => navigate("/"), 600);
  }

  const SidebarContent = () => (
    <aside className="w-56 h-full bg-white border-r border-[#e0e0ff] flex flex-col px-3 py-5">
      <div className="px-2 mb-6 flex items-center justify-between">
        <div>
          <p className="text-[#6C63FF] text-base font-semibold tracking-tight">Admin Panel</p>
          <p className="text-gray-400 text-xs mt-0.5">Driksha Infotech</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-gray-400 hover:text-gray-600"
        >
          <MdOutlineClose size={20} />
        </button>
      </div>
      <nav className="flex flex-col gap-0.5 flex-1 overflow-y-auto">
        {NAV_SECTIONS.map((section, si) => (
          <div key={si}>
            {section.label && (
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-300 px-3 pt-4 pb-1">
                {section.label}
              </p>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 w-full
                     Rs{isActive ? "bg-[#6C63FF] text-white font-medium" : "text-gray-500 hover:bg-[#f5f5ff] hover:text-[#6C63FF]"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={19} className={`shrink-0 Rs{isActive ? "text-white" : "text-gray-400"}`} />
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full Rs{isActive ? "bg-white/30 text-white" : "bg-[#FF6584] text-white"}`}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="mt-4 border-t border-[#e0e0ff] pt-4 flex flex-col gap-1">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-xl hover:bg-[#f5f5ff] cursor-pointer transition">
          <div className="w-7 h-7 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
            AD
          </div>
          <div className="leading-tight">
            <p className="text-gray-700 text-xs font-medium">Admin</p>
            <p className="text-gray-400 text-[10px]">Super admin</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#FF6584] hover:bg-[#fff0f3] transition-all duration-150 w-full text-left disabled:opacity-50"
        >
          <MdOutlineLogout size={19} className="shrink-0" />
          {loggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    </aside>
  );

  return (
    <>
      <div className="hidden md:block shrink-0 h-screen overflow-y-auto">
        <SidebarContent />
      </div>
      <div
        className={`md:hidden fixed inset-0 z-40 flex transition-all duration-300 Rs{isOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`fixed inset-0 bg-black/30 transition-opacity duration-300 Rs{isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />
        <div className={`relative z-50 transition-transform duration-300 Rs{isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
