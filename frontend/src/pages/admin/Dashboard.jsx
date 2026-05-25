import { useNavigate } from "react-router-dom";
import StatusBadge from "../../components/admin/shared/StatusBadge";

const stats = [
  { label: "Total products", value: "102", change: "+5 this week", color: "text-primary", bar: "bg-primary" },
  { label: "Total orders", value: "348", change: "+12 today", color: "text-danger", bar: "bg-danger" },
  { label: "Customers", value: "94", change: "+3 this week", color: "text-primary", bar: "bg-primary" },
  { label: "Pending orders", value: "8", change: "Needs attention", color: "text-danger", bar: "bg-danger" },
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
  { icon: "ti-plus", title: "Add new product", desc: "Upload with images", bg: "bg-primary-light", color: "text-primary", path: "/admin/products/add" },
  { icon: "ti-layout-grid", title: "Add category", desc: "Top / mid / end level", bg: "bg-danger-light", color: "text-danger", path: "/admin/categories" },
  { icon: "ti-shopping-cart", title: "View pending orders", desc: "8 orders waiting", bg: "bg-success-light", color: "text-success", path: "/admin/orders" },
  { icon: "ti-photo", title: "Update banner", desc: "Homepage slider", bg: "bg-warning-light", color: "text-warning", path: "/admin/banner" },
];

const recentOrders = [
  { id: "#1042", customer: "Rahul Sharma", product: "Bose Headphones", amount: "₹279", status: "Delivered" },
  { id: "#1041", customer: "Priya Singh", product: "Men's Sneaker", amount: "₹91", status: "Processing" },
  { id: "#1040", customer: "Om Verma", product: "Oculus Quest 2", amount: "₹495", status: "Pending" },
  { id: "#1039", customer: "Ankit Roy", product: "Cotton Kurta", amount: "₹149", status: "Delivered" },
];

const maxVal = Math.max(...monthlyOrders.map((o) => o.value));
const latestMonth = monthlyOrders[monthlyOrders.length - 1].month;

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 space-y-4 md:space-y-6 min-h-screen bg-admin-bg">
      <div className="grid  grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-admin-card rounded-2xl p-3 sm:p-4 border border-admin-border"
          >
            <p className="text-[11px] sm:text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-xl sm:text-2xl font-medium text-secondary">{stat.value}</p>
            <div className="mt-2 flex items-center gap-2">
              <div className={`h-1 w-8 sm:w-12 rounded-full ${stat.bar}`} />
              <span className={`text-[10px] sm:text-xs ${stat.color}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">

        <div className="bg-admin-card rounded-2xl p-4 sm:p-5 border border-admin-border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-secondary">Monthly orders</p>
            <span className="text-xs text-primary">This year</span>
          </div>
          <div className="flex items-end gap-1 sm:gap-2 h-28 sm:h-32">
            {monthlyOrders.map((item) => (
              <div key={item.month} className="flex flex-col items-center gap-1 flex-1 h-full">
                <div className="flex-1 w-full flex items-end">
                  <div
                    className={`w-full rounded-t-md transition-all ${item.month === latestMonth ? "bg-primary" : "bg-admin-border"}`}
                    style={{ height: `${(item.value / maxVal) * 100}%` }}
                  />
                </div>
                <span className={`text-[9px] sm:text-[10px] shrink-0 ${item.month === latestMonth ? "text-primary font-semibold" : "text-gray-400"}`}>{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-admin-card rounded-2xl p-4 sm:p-5 border border-admin-border">
          <p className="text-sm font-medium text-secondary mb-4">Quick actions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {quickActions.map((action) => (
              <button
                key={action.title}
                onClick={() => navigate(action.path)}
                className="flex items-center gap-3 hover:bg-primary-light rounded-xl p-2 transition w-full text-left"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${action.bg}`}>
                  <i className={`ti ${action.icon} text-lg ${action.color}`} aria-hidden="true" />
                </div>
                <div>
                  <p className={`text-sm text-secondary`}>{action.title}</p>
                  <p className="text-xs text-gray-400">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="bg-admin-card rounded-2xl p-4 sm:p-5 border border-admin-border">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-secondary">Recent orders</p>
          <button
            onClick={() => navigate("/admin/orders")}
            className="text-xs text-primary hover:underline"
          >
            View all
          </button>
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="border border-admin-border rounded-xl p-3 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium text-sm">{order.id}</span>
                <StatusBadge status={order.status} />
              </div>
              <p className="text-sm text-gray-700">{order.customer}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400 truncate mr-2">{order.product}</p>
                <p className="text-sm font-medium text-gray-700 shrink-0">{order.amount}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-admin-border">
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Order ID</th>
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Customer</th>
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Product</th>
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Amount</th>
                <th className="text-left text-xs text-gray-400 font-normal pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-admin-border last:border-0 hover:bg-primary-light transition"
                >
                  <td className="py-3 text-primary font-medium">{order.id}</td>
                  <td className="py-3 text-gray-600">{order.customer}</td>
                  <td className="py-3 text-gray-600">{order.product}</td>
                  <td className="py-3 text-gray-700 font-medium">{order.amount}</td>
                  <td className="py-3"><StatusBadge status={order.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}