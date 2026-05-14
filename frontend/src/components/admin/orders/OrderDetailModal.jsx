import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const STATUS_OPTIONS = ["Pending", "Processing", "Delivered", "Cancelled"];

const statusStyle = {
  Pending:    "bg-orange-100 text-orange-600",
  Processing: "bg-purple-100 text-purple-600",
  Delivered:  "bg-green-100 text-green-600",
  Cancelled:  "bg-red-100 text-red-600",
};

export default function OrderDetailModal({ order, onClose, onStatusChange }) {
  const [status, setStatus] = useState(order?.status || "Pending");

  if (!order) return null;

  function handleStatusSave() {
    onStatusChange(order.id, status);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0]">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Order #{order.id}
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">{order.date}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <MdOutlineClose size={18} />
          </button>
        </div>

        <div className="px-6 py-4 flex flex-col gap-4">
          <div className="bg-[#f8f8ff] rounded-xl p-3">
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">
              Customer
            </p>
            <p className="text-sm font-medium text-gray-700">{order.customer}</p>
            <p className="text-xs text-gray-400 mt-0.5">{order.email}</p>
            <p className="text-xs text-gray-400 mt-0.5">{order.address}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">
              Items Ordered
            </p>
            <div className="flex flex-col gap-2">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 border-b border-[#f5f5f5] last:border-0"
                >
                  <div>
                    <p className="text-sm text-gray-700">{item.name}</p>
                    <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    ₹{(item.price * item.qty).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#f8f8ff] rounded-xl px-3 py-2.5">
            <span className="text-sm font-semibold text-gray-700">Total Amount</span>
            <span className="text-sm font-bold text-[#6C63FF]">
              ₹{order.amount.toLocaleString()}
            </span>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">
              Update Order Status
            </p>
            <div className="flex gap-2">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="flex-1 border border-[#e0e0ff] rounded-xl px-3 py-2.5 text-sm
                           text-gray-700 outline-none focus:border-[#6C63FF]
                           focus:ring-2 focus:ring-[#6C63FF]/10 transition"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <button
                onClick={handleStatusSave}
                className="px-4 py-2 bg-[#6C63FF] hover:bg-[#5a52e0] text-white
                           text-sm font-medium rounded-xl transition"
              >
                Save
              </button>
            </div>
          </div>
]        </div>
      </div>
    </div>
  );
}