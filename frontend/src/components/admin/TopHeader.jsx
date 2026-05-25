import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdNotificationsNone,
  MdOutlineMail,
  MdOutlineKeyboardArrowDown,
  MdOutlinePerson,
  MdOutlineLock,
  MdOutlineLogout,
  MdOutlineShoppingCart,
  MdOutlineExitToApp,
  MdOutlineMenu,
} from "react-icons/md";

const PENDING_ORDERS = [
  { id: 1040, customer: "Om Verma", amount: 6999, date: "11 May 2026" },
  { id: 1037, customer: "Arjun Mehta", amount: 499, date: "10 May 2026" },
  { id: 1033, customer: "Ravi Kumar", amount: 2499, date: "9 May 2026" },
];

function useClickOutside(ref, onClose) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onClose]);
}

export default function TopHeader({ pageTitle, breadcrumb, onMenuClick }) {
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useClickOutside(notifRef, () => setNotifOpen(false));
  useClickOutside(profileRef, () => setProfileOpen(false));

  function handleLogout() { navigate("/login"); }

  return (
    <header className="h-14 bg-admin-card border-b border-admin-border flex items-center px-4 md:px-6 gap-3 shrink-0 relative">
      <button
        onClick={onMenuClick}
        className="md:hidden w-8 h-8 flex items-center justify-center rounded-xl border border-admin-border text-gray-400 hover:border-primary hover:text-primary hover:bg-primary-light transition shrink-0"
      >
        <MdOutlineMenu size={20} />
      </button>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 leading-tight truncate">{pageTitle || "Dashboard"}</p>
        <p className="text-[11px] text-gray-400 truncate">{breadcrumb || "Admin › Dashboard"}</p>
      </div>

      <div className="flex items-center gap-1.5 md:gap-2">
        <button
          onClick={() => window.open("/", "_blank")}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-primary text-primary text-xs font-medium rounded-xl hover:bg-primary-light transition"
        >
          <MdOutlineExitToApp size={15} />
          View Site
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setNotifOpen((p) => !p); setProfileOpen(false); }}
            className="w-8 h-8 flex items-center justify-center rounded-xl border border-admin-border text-gray-400 hover:border-primary hover:text-primary hover:bg-primary-light transition relative"
          >
            <MdNotificationsNone size={18} />
            {PENDING_ORDERS.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {PENDING_ORDERS.length}
              </span>
            )}
          </button>

          {notifOpen && (
            <>
              {/* Mobile */}
              <div className="fixed inset-x-3 top-16 z-50 sm:hidden bg-admin-card border border-admin-border rounded-2xl shadow-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-admin-border">
                  <p className="text-sm font-semibold text-gray-800">Pending Orders</p>
                  <span className="text-[10px] bg-danger text-white px-2 py-1 rounded-full font-medium">{PENDING_ORDERS.length} new</span>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {PENDING_ORDERS.map((order) => (
                    <div
                      key={order.id}
                      onClick={() => { navigate("/admin/orders"); setNotifOpen(false); }}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-primary-light cursor-pointer border-b border-admin-border last:border-b-0 transition"
                    >
                      <div className="w-9 h-9 rounded-xl bg-warning-light flex items-center justify-center shrink-0">
                        <MdOutlineShoppingCart size={17} className="text-warning" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-700 truncate">Order #{order.id} — {order.customer}</p>
                        <p className="text-xs text-gray-400 mt-0.5">₹{order.amount.toLocaleString()} · {order.date}</p>
                      </div>
                      <span className="text-[10px] bg-warning-light text-warning px-2 py-1 rounded-full font-medium shrink-0">Pending</span>
                    </div>
                  ))}
                </div>
                <div
                  onClick={() => { navigate("/admin/orders"); setNotifOpen(false); }}
                  className="px-4 py-3 text-center text-sm font-medium text-primary hover:bg-primary-light cursor-pointer border-t border-admin-border transition"
                >
                  View all orders →
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden sm:block absolute right-0 top-12 w-80 bg-admin-card border border-admin-border rounded-2xl shadow-lg z-50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-admin-border">
                  <p className="text-sm font-semibold text-gray-800">Pending Orders</p>
                  <span className="text-[10px] bg-danger text-white px-2 py-1 rounded-full font-medium">{PENDING_ORDERS.length} new</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {PENDING_ORDERS.map((order) => (
                    <div
                      key={order.id}
                      onClick={() => { navigate("/admin/orders"); setNotifOpen(false); }}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-primary-light cursor-pointer border-b border-admin-border last:border-b-0 transition"
                    >
                      <div className="w-9 h-9 rounded-xl bg-warning-light flex items-center justify-center shrink-0">
                        <MdOutlineShoppingCart size={17} className="text-warning" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-700 truncate">Order #{order.id} — {order.customer}</p>
                        <p className="text-xs text-gray-400 mt-0.5">₹{order.amount.toLocaleString()} · {order.date}</p>
                      </div>
                      <span className="text-[10px] bg-warning-light text-warning px-2 py-1 rounded-full font-medium shrink-0">Pending</span>
                    </div>
                  ))}
                </div>
                <div
                  onClick={() => { navigate("/admin/orders"); setNotifOpen(false); }}
                  className="px-4 py-3 text-center text-sm font-medium text-primary hover:bg-primary-light cursor-pointer border-t border-admin-border transition"
                >
                  View all orders →
                </div>
              </div>
            </>
          )}
        </div>

        <button
          onClick={() => navigate("/admin/newsletter")}
          className="w-8 h-8 flex items-center justify-center rounded-xl border border-admin-border text-gray-400 hover:border-primary hover:text-primary hover:bg-primary-light transition"
          title="Newsletter subscribers"
        >
          <MdOutlineMail size={18} />
        </button>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => { setProfileOpen((p) => !p); setNotifOpen(false); }}
            className="flex items-center gap-1.5 md:gap-2 px-2 md:px-2.5 py-1.5 border border-admin-border rounded-xl hover:border-primary hover:bg-primary-light transition"
          >
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0">AD</div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-medium text-gray-700 leading-tight">Admin</p>
              <p className="text-[10px] text-gray-400">Super user</p>
            </div>
            <MdOutlineKeyboardArrowDown size={15} className={`text-gray-400 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} />
          </button>

          {profileOpen && (
            <>
              {/* Mobile */}
              <div className="fixed inset-x-3 top-16 z-50 sm:hidden bg-admin-card border border-admin-border rounded-2xl shadow-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-admin-border">
                  <p className="text-xs font-semibold text-gray-800">Admin</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">admin@driksha.com</p>
                </div>
                <div className="py-1">
                  <button onClick={() => { navigate("/admin/profile"); setProfileOpen(false); }} className="flex items-center gap-2.5 w-full px-4 py-3 text-sm text-gray-600 hover:bg-primary-light hover:text-primary transition text-left">
                    <MdOutlinePerson size={16} className="shrink-0" /> My Profile
                  </button>
                  <button onClick={() => { navigate("/admin/change-password"); setProfileOpen(false); }} className="flex items-center gap-2.5 w-full px-4 py-3 text-sm text-gray-600 hover:bg-primary-light hover:text-primary transition text-left">
                    <MdOutlineLock size={16} className="shrink-0" /> Change Password
                  </button>
                </div>
                <div className="border-t border-admin-border py-1">
                  <button onClick={handleLogout} className="flex items-center gap-2.5 w-full px-4 py-3 text-sm text-danger hover:bg-danger-light transition text-left">
                    <MdOutlineLogout size={16} className="shrink-0" /> Logout
                  </button>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden sm:block absolute right-0 top-11 w-48 bg-admin-card border border-admin-border rounded-2xl shadow-lg z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-admin-border">
                  <p className="text-xs font-semibold text-gray-800">Admin</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">admin@driksha.com</p>
                </div>
                <div className="py-1">
                  <button onClick={() => { navigate("/admin/profile"); setProfileOpen(false); }} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-gray-600 hover:bg-primary-light hover:text-primary transition text-left">
                    <MdOutlinePerson size={16} className="shrink-0" /> My Profile
                  </button>
                  <button onClick={() => { navigate("/admin/change-password"); setProfileOpen(false); }} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-gray-600 hover:bg-primary-light hover:text-primary transition text-left">
                    <MdOutlineLock size={16} className="shrink-0" /> Change Password
                  </button>
                </div>
                <div className="border-t border-admin-border py-1">
                  <button onClick={handleLogout} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-danger hover:bg-danger-light transition text-left">
                    <MdOutlineLogout size={16} className="shrink-0" /> Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
