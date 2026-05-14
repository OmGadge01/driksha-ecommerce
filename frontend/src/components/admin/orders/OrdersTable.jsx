import { MdOutlineVisibility, MdOutlineInbox } from "react-icons/md";

const statusStyle = {
  Pending:    "bg-orange-100 text-orange-600",
  Processing: "bg-purple-100 text-purple-600",
  Delivered:  "bg-green-100 text-green-600",
  Cancelled:  "bg-red-100 text-red-600",
};

export default function OrdersTable({ orders, onView }) {
    
  if (orders.length === 0) {
    return (
      <div className="bg-white border border-[#e0e0ff] rounded-2xl py-16 text-center">
        <MdOutlineInbox size={36} className="text-gray-200 mx-auto mb-2" />
        <p className="text-sm text-gray-400">No orders found</p>
        <p className="text-xs text-gray-300 mt-1">Try changing the search or filter </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#e0e0ff] rounded-2xl overflow-hidden">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#f5f5ff] border-b border-[#e0e0ff]">
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Order ID
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Customer
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Items
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Amount
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Date
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Status
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, idx) => (
            <tr
              key={order.id}
              className={`border-b border-[#f5f5ff] hover:bg-[#fafaff] transition ${
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
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    statusStyle[order.status] || "bg-gray-100 text-gray-500"
                  }`}
                >
                  {order.status}
                </span>
              </td>

              <td className="px-4 py-3">
                <button
                  onClick={() => onView(order)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0ff] text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-[#f5f5ff] transition"
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
  );
}