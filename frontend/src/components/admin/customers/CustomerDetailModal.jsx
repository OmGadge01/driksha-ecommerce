import { MdOutlineClose, MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";
import StatusBadge from "../shared/StatusBadge";

export default function CustomerDetailModal({ customer, onClose }) {
  if (!customer) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0]">
          <h3 className="text-sm font-semibold text-gray-800">Customer Details</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <MdOutlineClose size={18} />
          </button>
        </div>

        <div className="px-6 py-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-base font-bold shrink-0">
              {customer.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{customer.name}</p>
              <p className="text-xs text-gray-400">Member since {customer.joinedDate}</p>
            </div>
          </div>

          <div className="bg-[#f8f8ff] rounded-xl p-3 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <MdOutlineEmail size={15} className="text-[#6C63FF] shrink-0" />
              <p className="text-sm text-gray-600">{customer.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlinePhone size={15} className="text-[#6C63FF] shrink-0" />
              <p className="text-sm text-gray-600">{customer.phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineLocationOn size={15} className="text-[#6C63FF] shrink-0" />
              <p className="text-sm text-gray-600">{customer.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#f0efff] rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-[#6C63FF]">{customer.totalOrders}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Total Orders</p>
            </div>
            <div className="bg-[#fff0f3] rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-[#FF6584]">
                ₹{customer.totalSpent.toLocaleString()}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">Total Spent</p>
            </div>
            <div className="bg-[#f0fdf4] rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-green-600">{customer.delivered}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Delivered</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide"> Recent Orders </p>
            <div className="flex flex-col gap-1.5">
              {customer.recentOrders.map((order, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-2 bg-[#f8f8ff] rounded-xl"
                >
                  <div>
                    <p className="text-xs font-medium text-gray-700">#{order.id}</p>
                    <p className="text-[10px] text-gray-400">{order.date}</p>
                  </div>
                  <p className="text-xs font-semibold text-gray-700">
                    ₹{order.amount.toLocaleString()}
                  </p>
                  {/* <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      order.status === "Delivered" ? "bg-green-100 text-green-600"  :
                      order.status === "Pending" ? "bg-orange-100 text-orange-600" :
                      order.status === "Processing" ? "bg-purple-100 text-purple-600" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.status}
                  </span> */}
                                  <StatusBadge status={order.status} />
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}