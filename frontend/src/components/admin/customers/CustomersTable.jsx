import { MdOutlineVisibility, MdOutlinePeopleAlt } from "react-icons/md";

export default function CustomersTable({ customers, onView }) {
  if (customers.length === 0) {
    return (
      <div className="bg-admin-card border border-admin-border rounded-2xl py-16 text-center">
        <MdOutlinePeopleAlt size={36} className="text-gray-200 mx-auto mb-2" />
        <p className="text-sm text-gray-400">No customers found</p>
        <p className="text-xs text-gray-300 mt-1">Try changing the search</p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile — Card View */}
      <div className="flex flex-col gap-3 md:hidden">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-admin-card border border-admin-border rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                {customer.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{customer.name}</p>
                <p className="text-xs text-gray-400">{customer.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-admin-bg rounded-xl px-3 py-2">
                <p className="text-[10px] text-gray-400 mb-0.5">Phone</p>
                <p className="text-xs font-medium text-gray-700">{customer.phone}</p>
              </div>
              <div className="bg-admin-bg rounded-xl px-3 py-2">
                <p className="text-[10px] text-gray-400 mb-0.5">Joined</p>
                <p className="text-xs font-medium text-gray-700">{customer.joinedDate}</p>
              </div>
              <div className="bg-admin-bg rounded-xl px-3 py-2">
                <p className="text-[10px] text-gray-400 mb-0.5">Total Orders</p>
                <p className="text-xs font-medium text-gray-700">{customer.totalOrders}</p>
              </div>
              <div className="bg-admin-bg rounded-xl px-3 py-2">
                <p className="text-[10px] text-gray-400 mb-0.5">Total Spent</p>
                <p className="text-xs font-semibold text-primary">₹{customer.totalSpent.toLocaleString()}</p>
              </div>
            </div>

            <button
              onClick={() => onView(customer)}
              className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-admin-border text-xs text-gray-500 hover:border-primary hover:text-primary hover:bg-primary-light transition"
            >
              <MdOutlineVisibility size={14} />
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Desktop — Table View */}
      <div className="hidden md:block bg-admin-card border border-admin-border rounded-2xl overflow-hidden">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-primary-light border-b border-admin-border">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Customer</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Phone</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Total Orders</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Total Spent</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Joined</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr
                key={customer.id}
                className={`border-b border-admin-border hover:bg-primary-light transition ${
                  idx === customers.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
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
                  <span className="text-sm font-medium text-gray-700">{customer.totalOrders}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-semibold text-primary">
                    ₹{customer.totalSpent.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs text-gray-400">{customer.joinedDate}</span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => onView(customer)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-admin-border text-gray-400 hover:border-primary hover:text-primary hover:bg-primary-light transition"
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
    </>
  );
}
