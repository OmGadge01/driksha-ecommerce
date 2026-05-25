import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const STATUS_OPTIONS = ["Pending", "Processing", "Delivered", "Cancelled"];

export default function OrderDetailModal({ order, onClose, onStatusChange }) {
  const [status, setStatus] = useState(order?.status || "Pending");

  if (!order) return null;

  function handleStatusSave() {
    onStatusChange(order.id, status);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center z-50 px-4 pb-4 sm:pb-0">
      <div className="bg-admin-card rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">

        <div className="flex items-center justify-between px-5 py-4 border-b border-admin-border shrink-0">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Order #{order.id}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{order.date}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <MdOutlineClose size={18} />
          </button>
        </div>

        <div className="px-5 py-4 flex flex-col gap-4 overflow-y-auto">

          <div className="bg-admin-bg rounded-xl p-3">
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Customer</p>
            <p className="text-sm font-medium text-gray-700">{order.customer}</p>
            <p className="text-xs text-gray-400 mt-0.5 break-all">{order.email}</p>
            <p className="text-xs text-gray-400 mt-0.5">{order.address}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Items Ordered</p>
            <div className="flex flex-col gap-2">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3 py-2 border-b border-admin-border last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 truncate">{item.name}</p>
                    <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-700 shrink-0">
                    ₹{(item.price * item.qty).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between bg-primary-light rounded-xl px-3 py-2.5">
            <span className="text-sm font-semibold text-gray-700">Total Amount</span>
            <span className="text-sm font-bold text-primary">₹{order.amount.toLocaleString()}</span>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Update Order Status</p>
            <div className="flex gap-2">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="flex-1 border border-admin-border rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <button
                onClick={handleStatusSave}
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition shrink-0"
              >
                Save
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
