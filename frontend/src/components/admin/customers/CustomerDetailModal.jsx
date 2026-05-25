import { MdOutlineClose, MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";
import StatusBadge from "../shared/StatusBadge";

export default function CustomerDetailModal({ customer, onClose }) {
  if (!customer) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center z-50 px-4 pb-4 sm:pb-0">
      <div className="bg-admin-card rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">

        <div className="flex items-center justify-between px-5 py-4 border-b border-admin-border shrink-0">
          <h3 className="text-sm font-semibold text-gray-800">Customer Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <MdOutlineClose size={18} />
          </button>
        </div>

        <div className="px-5 py-4 flex flex-col gap-4 overflow-y-auto">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-base font-bold shrink-0">
              {customer.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{customer.name}</p>
              <p className="text-xs text-gray-400">Member since {customer.joinedDate}</p>
            </div>
          </div>

          <div className="bg-admin-bg rounded-xl p-3 flex flex-col gap-2.5">
            <div className="flex items-start gap-2">
              <MdOutlineEmail size={15} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 break-all">{customer.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlinePhone size={15} className="text-primary shrink-0" />
              <p className="text-sm text-gray-600">{customer.phone}</p>
            </div>
            <div className="flex items-start gap-2">
              <MdOutlineLocationOn size={15} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">{customer.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-primary-light rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-primary">{customer.totalOrders}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Total Orders</p>
            </div>
            <div className="bg-danger-light rounded-xl p-3 text-center">
              <p className="text-base sm:text-lg font-bold text-danger">
                ₹{customer.totalSpent.toLocaleString()}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">Total Spent</p>
            </div>
            <div className="bg-success-light rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-success">{customer.delivered}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Delivered</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Recent Orders</p>
            <div className="flex flex-col gap-1.5">
              {customer.recentOrders.map((order, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2 px-3 py-2 bg-admin-bg rounded-xl">
                  <div className="shrink-0">
                    <p className="text-xs font-medium text-gray-700">#{order.id}</p>
                    <p className="text-[10px] text-gray-400">{order.date}</p>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 flex-1 text-right">
                    ₹{order.amount.toLocaleString()}
                  </p>
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
