import { MdOutlineVisibility, MdOutlineInbox } from "react-icons/md";
import StatusBadge from "../shared/StatusBadge";

export default function OrdersTable({ orders, onView }) {

  if (orders.length === 0) {
    return (
      <div className="bg-admin-card border border-admin-border rounded-2xl py-16 text-center">
        <MdOutlineInbox size={36} className="text-gray-200 mx-auto mb-2" />
        <p className="text-sm text-gray-400">No orders found</p>
        <p className="text-xs text-gray-300 mt-1">Try changing the search or filter</p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile — Card View */}
      <div className="flex flex-col gap-3 md:hidden">
        {orders.map((order) => (
          <div key={order.id} className="bg-admin-card border border-admin-border rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">#{order.id}</span>
              <StatusBadge status={order.status} />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">{order.customer}</p>
              <p className="text-xs text-gray-400">{order.email}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{order.items.length} {order.items.length === 1 ? "item" : "items"}</span>
              <span>{order.date}</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-admin-border">
              <span className="text-sm font-semibold text-gray-700">
                ₹{order.amount.toLocaleString()}
              </span>
              <button
                onClick={() => onView(order)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-admin-border text-xs text-gray-500 hover:border-primary hover:text-primary hover:bg-primary-light transition"
              >
                <MdOutlineVisibility size={14} />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop — Table View */}
      <div className="hidden md:block bg-admin-card border border-admin-border rounded-2xl overflow-hidden">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-primary-light border-b border-admin-border">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Order ID</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Customer</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Items</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Amount</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Date</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Status</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr
                key={order.id}
                className={`border-b border-admin-border hover:bg-primary-light transition ${
                  idx === orders.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-4 py-3">
                  <span className="font-semibold text-gray-700">#{order.id}</span>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-gray-700 font-medium">{order.customer}</p>
                  <p className="text-xs text-gray-400">{order.email}</p>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-gray-500">
                    {order.items.length} {order.items.length === 1 ? "item" : "items"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-semibold text-gray-700">
                    ₹{order.amount.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs text-gray-400">{order.date}</span>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => onView(order)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-admin-border text-gray-400 hover:border-primary hover:text-primary hover:bg-primary-light transition"
                    title="View order details"
                  >
                    <MdOutlineVisibility size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
