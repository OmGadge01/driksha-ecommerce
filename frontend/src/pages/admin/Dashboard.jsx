import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Total products", value: "102", change: "+5 this week", color: "#6C63FF" },
  { label: "Total orders", value: "348", change: "+12 today", color: "#FF6584" },
  { label: "Customers", value: "94", change: "+3 this week", color: "#6C63FF" },
  { label: "Pending orders", value: "8", change: "Needs attention", color: "#FF6584" },
];

const monthlyOrders = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 60 },
  { month: "May", value: 80 },
  { month: "Jun", value: 65 },
  { month: "Jul", value: 50 },
  { month: "Aug", value: 70 },
  { month: "Sep", value: 60 },
  { month: "Oct", value: 75 },
];

const quickActions = [
  {
    icon: "ti-plus",
    title: "Add new product",
    desc: "Upload with images",
    bg: "#f0efff",
    color: "#6C63FF",
    path: "/admin/products/add",
  },
  {
    icon: "ti-layout-grid",
    title: "Add category",
    desc: "Top / mid / end level",
    bg: "#fff0f5",
    color: "#FF6584",
    path: "/admin/categories",
  },
  {
    icon: "ti-shopping-cart",
    title: "View pending orders",
    desc: "8 orders waiting",
    bg: "#edfff6",
    color: "#10b981",
    path: "/admin/orders",
  },
  {
    icon: "ti-photo",
    title: "Update banner",
    desc: "Homepage slider",
    bg: "#fff8ed",
    color: "#f59e0b",
    path: "/admin/banner",
  },
];

const recentOrders = [
  { id: "#1042", customer: "Rahul Sharma", product: "Bose Headphones", amount: "₹279", status: "Delivered" },
  { id: "#1041", customer: "Priya Singh", product: "Men's Sneaker", amount: "₹91", status: "Processing" },
  { id: "#1040", customer: "Om Verma", product: "Oculus Quest 2", amount: "₹495", status: "Pending" },
  { id: "#1039", customer: "Ankit Roy", product: "Cotton Kurta", amount: "₹149", status: "Delivered" },
];

const statusColors = {
  Delivered: { bg: "#edfff6", text: "#10b981" },
  Processing: { bg: "#f0efff", text: "#6C63FF" },
  Pending: { bg: "#fff8ed", text: "#f59e0b" },
};

const maxVal = Math.max(...monthlyOrders.map((o) => o.value));

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 md:space-y-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-3 md:p-4 border border-[#e0e0ff]"
          >
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-medium text-[#1a1a2e]">{stat.value}</p>
            <div className="mt-2 flex items-center gap-2">
              <div
                className="h-1 w-12 rounded-full"
                style={{ background: stat.color }}
              />
              <span className="text-xs" style={{ color: stat.color }}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Orders + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">

        {/* Monthly Orders Chart */}
        <div className="bg-white rounded-2xl p-5 border border-[#e0e0ff]">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-[#1a1a2e]">Monthly orders</p>
            <span className="text-xs text-[#6C63FF]">This year</span>
          </div>
          <div className="flex items-end gap-2 h-32">
            {monthlyOrders.map((item) => (
              <div key={item.month} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="w-full rounded-t-md transition-all"
                  style={{
                    height: `${(item.value / maxVal) * 100}%`,
                    background:
                      item.month === "May"
                        ? "#6C63FF"
                        : "#e0e0ff",
                  }}
                />
                <span className="text-[10px] text-gray-400">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-5 border border-[#e0e0ff]">
          <p className="text-sm font-medium text-[#1a1a2e] mb-4">Quick actions</p>
          <div className="flex flex-col gap-3">
            {quickActions.map((action) => (
              <button
                key={action.title}
                onClick={() => navigate(action.path)}
                className="flex items-center gap-3 hover:bg-[#f5f5ff] rounded-xl p-2 transition w-full text-left"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: action.bg }}
                >
                  <i
                    className={`ti ${action.icon} text-lg`}
                    style={{ color: action.color }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm text-[#1a1a2e]">{action.title}</p>
                  <p className="text-xs text-gray-400">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e0e0ff]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-[#1a1a2e]">Recent orders</p>
          <button onClick={() => navigate("/admin/orders")} className="text-xs text-[#6C63FF] hover:underline">
            View all
          </button>
        </div>

        {/* Mobile: cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {recentOrders.map((order) => (
            <div key={order.id} className="border border-[#f0f0ff] rounded-xl p-3 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[#6C63FF] font-medium text-sm">{order.id}</span>
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                  style={{ background: statusColors[order.status].bg, color: statusColors[order.status].text }}
                >
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-gray-700">{order.customer}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400 truncate mr-2">{order.product}</p>
                <p className="text-sm font-medium text-gray-700 shrink-0">{order.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#f0f0ff]">
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Order ID</th>
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Customer</th>
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Product</th>
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Amount</th>
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-[#f5f5ff] last:border-0 hover:bg-[#f9f9ff] transition">
                  <td className="py-3 text-[#6C63FF] font-medium">{order.id}</td>
                  <td className="py-3 text-gray-600">{order.customer}</td>
                  <td className="py-3 text-gray-600">{order.product}</td>
                  <td className="py-3 text-gray-700 font-medium">{order.amount}</td>
                  <td className="py-3">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: statusColors[order.status].bg, color: statusColors[order.status].text }}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}