import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdNotificationsNone,MdOutlineMail, MdOutlineKeyboardArrowDown, MdOutlinePerson, MdOutlineLock,MdOutlineLogout, MdOutlineShoppingCart,MdOutlineExitToApp,} from "react-icons/md";

const PENDING_ORDERS = [
  { id: 1040, customer: "Om Verma", amount: 6999, date: "11 May 2026" },
  { id: 1037, customer: "Arjun Mehta", amount: 499, date: "10 May 2026" },
  { id: 1033, customer: "Ravi Kumar", amount: 2499, date: "9 May 2026"  },
];

function useClickOutside(ref, onClose) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onClose]);
}

export default function TopHeader({ pageTitle, breadcrumb }) {
  const navigate = useNavigate();

  const [notifOpen, setNotifOpen]     = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef   = useRef(null);
  const profileRef = useRef(null);
  useClickOutside(notifRef,   () => setNotifOpen(false));
  useClickOutside(profileRef, () => setProfileOpen(false));

  function handleLogout() {
    navigate("/admin/login");
  }

  return (
    <header className="h-14 bg-white border-b border-[#f0f0f0] flex items-center px-6 gap-4 shrink-0">
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800 leading-tight">
          {pageTitle || "Dashboard"}
        </p>
        <p className="text-[11px] text-gray-400">
          {breadcrumb || "Admin › Dashboard"}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => window.open("/", "_blank")}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-[#6C63FF] text-[#6C63FF] text-xs font-medium rounded-xl hover:bg-[#f5f5ff] transition"
        >
          <MdOutlineExitToApp size={15} />
          View Site
        </button>
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setNotifOpen((prev) => !prev);
              setProfileOpen(false); 
            }}
            className="w-8 h-8 flex items-center justify-center rounded-xl border border-[#e0e0ff] text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-[#f5f5ff] transition relative"
          >
            <MdNotificationsNone size={18} />
            {PENDING_ORDERS.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6584] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {PENDING_ORDERS.length}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-10 w-72 bg-white border border-[#e0e0ff]
                            rounded-2xl shadow-lg z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#f0f0f0]">
                <p className="text-sm font-semibold text-gray-800">Pending Orders</p>
                <span className="text-[10px] bg-[#FF6584] text-white px-2 py-0.5 rounded-full font-medium">
                  {PENDING_ORDERS.length} new
                </span>
              </div>

              <div className="flex flex-col">
                {PENDING_ORDERS.map((order) => (
                  <div
                    key={order.id}
                    onClick={() => {
                      navigate("/admin/orders");
                      setNotifOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#f8f8ff] cursor-pointer border-b border-[#f5f5f5] last:border-0 transition"
                  >
                    <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                      <MdOutlineShoppingCart size={16} className="text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-700">
                        Order #{order.id} — {order.customer}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        ₹{order.amount.toLocaleString()} · {order.date}
                      </p>
                    </div>
                    <span className="text-[9px] bg-orange-100 text-orange-500 px-1.5 py-0.5 rounded-full font-medium shrink-0">
                      Pending
                    </span>
                  </div>
                ))}
              </div>

              <div
                onClick={() => {
                  navigate("/admin/orders");
                  setNotifOpen(false);
                }}
                className="px-4 py-3 text-center text-xs font-medium text-[#6C63FF]
                           hover:bg-[#f5f5ff] cursor-pointer border-t border-[#f0f0f0] transition"
              >
                View all orders →
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => navigate("/admin/newsletter")}
          className="w-8 h-8 flex items-center justify-center rounded-xl border border-[#e0e0ff] text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-[#f5f5ff] transition"
          title="Newsletter subscribers"
        >
          <MdOutlineMail size={18} />
        </button>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setProfileOpen((prev) => !prev);
              setNotifOpen(false); // close notif if open
            }}
            className="flex items-center gap-2 px-2.5 py-1.5 border border-[#e0e0ff] rounded-xl hover:border-[#6C63FF] hover:bg-[#f5f5ff] transition"
          >
            <div className="w-6 h-6 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
              AD
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-medium text-gray-700 leading-tight">Admin</p>
              <p className="text-[10px] text-gray-400">Super user</p>
            </div>
            <MdOutlineKeyboardArrowDown
              size={15}
              className={`text-gray-400 transition-transform duration-200 ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-11 w-48 bg-white border border-[#e0e0ff] rounded-2xl shadow-lg z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-[#f0f0f0]">
                <p className="text-xs font-semibold text-gray-800">Admin</p>
                <p className="text-[10px] text-gray-400 mt-0.5">admin@driksha.com</p>
              </div>
              <div className="py-1">
                <button
                  onClick={() => {
                    navigate("/admin/profile");
                    setProfileOpen(false);
                  }}
                  className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-gray-600 hover:bg-[#f5f5ff] hover:text-[#6C63FF] transition text-left"
                >
                  <MdOutlinePerson size={16} className="shrink-0" />
                  My Profile
                </button>

                <button
                  onClick={() => {
                    navigate("/admin/change-password");
                    setProfileOpen(false);
                  }}
                  className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-gray-600 hover:bg-[#f5f5ff] hover:text-[#6C63FF] transition text-left"
                >
                  <MdOutlineLock size={16} className="shrink-0" />
                  Change Password
                </button>
              </div>

              <div className="border-t border-[#f0f0f0] py-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-[#FF6584] hover:bg-[#fff0f3] transition text-left"
                >
                  <MdOutlineLogout size={16} className="shrink-0" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}