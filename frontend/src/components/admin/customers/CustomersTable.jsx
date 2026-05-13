import { MdOutlineVisibility, MdOutlinePeopleAlt } from "react-icons/md";

export default function CustomersTable({ customers, onView }) {
  if (customers.length === 0) {
    return (
      <div className="bg-white border border-[#e0e0ff] rounded-2xl py-16 text-center">
        <MdOutlinePeopleAlt size={36} className="text-gray-200 mx-auto mb-2" />
        <p className="text-sm text-gray-400">No customers found</p>
        <p className="text-xs text-gray-300 mt-1">Try changing the search</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#e0e0ff] rounded-2xl overflow-hidden">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#f5f5ff] border-b border-[#e0e0ff]">
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Customer
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Phone
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Total Orders
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Total Spent
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Joined
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, idx) => (
            <tr
              key={customer.id}
              className={`border-b border-[#f5f5ff] hover:bg-[#fafaff] transition ${
                idx === customers.length - 1 ? "border-b-0" : ""
              }`}
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{customer.name}</p>
                    <p className="text-xs text-gray-400">{customer.email}</p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-3">
                <span className="text-sm text-gray-500">{customer.phone}</span>
              </td>

              <td className="px-4 py-3">
                <span className="text-sm font-medium text-gray-700">
                  {customer.totalOrders}
                </span>
              </td>

              <td className="px-4 py-3">
                <span className="text-sm font-semibold text-[#6C63FF]">
                  ₹{customer.totalSpent.toLocaleString()}
                </span>
              </td>

              <td className="px-4 py-3">
                <span className="text-xs text-gray-400">{customer.joinedDate}</span>
              </td>

              <td className="px-4 py-3">
                <button
                  onClick={() => onView(customer)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0ff] text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-[#f5f5ff] transition"
                  title="View customer details"
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