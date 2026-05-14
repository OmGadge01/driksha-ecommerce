import { useState } from "react";
import {
  MdOutlineSearch,
  MdOutlineClose,
  MdOutlineShoppingCart,
  MdOutlineHourglassEmpty,
  MdOutlineLocalShipping,
  MdOutlineCancel,
} from "react-icons/md";
import OrdersTable from "../../components/admin/orders/OrdersTable";
import OrderDetailModal from "../../components/admin/orders/OrderDetailModal";

const DUMMY_ORDERS = [
  {
    id: 1042,
    customer: "Rahul Sharma",
    email: "rahul@gmail.com",
    address: "42 MG Road, Indore, MP 452001",
    amount: 24999,
    date: "12 May 2026",
    status: "Delivered",
    items: [
      { name: "Bose QuietComfort Headphones", qty: 1, price: 24999 },
    ],
  },
  {
    id: 1041,
    customer: "Priya Singh",
    email: "priya@gmail.com",
    address: "15 Vijay Nagar, Bhopal, MP 462001",
    amount: 1798,
    date: "12 May 2026",
    status: "Processing",
    items: [
      { name: "Men's Running Sneaker", qty: 1, price: 1299 },
      { name: "Sports Socks (Pack of 3)", qty: 1, price: 499 },
    ],
  },
  {
    id: 1040,
    customer: "Om Verma",
    email: "om@gmail.com",
    address: "7 Saket Nagar, Indore, MP 452018",
    amount: 6999,
    date: "11 May 2026",
    status: "Pending",
    items: [
      { name: "Amazfit Smart Watch", qty: 1, price: 6999 },
    ],
  },
  {
    id: 1039,
    customer: "Anjali Rao",
    email: "anjali@gmail.com",
    address: "23 Civil Lines, Jabalpur, MP 482001",
    amount: 1798,
    date: "11 May 2026",
    status: "Delivered",
    items: [
      { name: "Women's Floral Maxi Dress", qty: 2, price: 899 },
    ],
  },
  {
    id: 1038,
    customer: "Neha Gupta",
    email: "neha@gmail.com",
    address: "9 Palasia, Indore, MP 452001",
    amount: 1899,
    date: "10 May 2026",
    status: "Cancelled",
    items: [
      { name: "Health Protein Powder", qty: 1, price: 1899 },
    ],
  },
  {
    id: 1037,
    customer: "Arjun Mehta",
    email: "arjun@gmail.com",
    address: "5 Ranjit Nagar, Gwalior, MP 474001",
    amount: 499,
    date: "10 May 2026",
    status: "Pending",
    items: [
      { name: "Kids Cartoon Backpack", qty: 1, price: 499 },
    ],
  },
];

const STATUS_FILTERS = ["All", "Pending", "Processing", "Delivered", "Cancelled"];

function StatCard({ icon: Icon, label, count, color }) {
  return (
    <div className="bg-white border border-[#e0e0ff] rounded-2xl p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-xl font-semibold text-gray-800">{count}</p>
      </div>
    </div>
  );
}

export default function Orders() {
  const [orders, setOrders]           = useState(DUMMY_ORDERS);
  const [search, setSearch]           = useState("");
  const [activeFilter, setFilter]     = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null); 

  const filteredOrders = orders.filter((order) => {
    const matchSearch =
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      String(order.id).includes(search);

    const matchStatus =
      activeFilter === "All" || order.status === activeFilter;

    return matchSearch && matchStatus;
  });

  function handleStatusChange(orderId, newStatus) {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  }

  const totalOrders = orders.length;
  const pendingCount = orders.filter((o) => o.status === "Pending").length;
  const processingCount = orders.filter((o) => o.status === "Processing").length;
  const deliveredCount  = orders.filter((o) => o.status === "Delivered").length;

  return (
    <div className="p-6 min-h-screen bg-[#f8f8ff]">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-800">Orders</h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Manage and track all customer orders
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={MdOutlineShoppingCart}
          label="Total Orders"
          count={totalOrders}
          color="bg-[#6C63FF]"
        />
        <StatCard
          icon={MdOutlineHourglassEmpty}
          label="Pending"
          count={pendingCount}
          color="bg-orange-400"
        />
        <StatCard
          icon={MdOutlineLocalShipping}
          label="Processing"
          count={processingCount}
          color="bg-purple-400"
        />
        <StatCard
          icon={MdOutlineLocalShipping}
          label="Delivered"
          count={deliveredCount}
          color="bg-green-500"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 bg-white border border-[#e0e0ff] rounded-xl px-3 py-2 w-64">
          <MdOutlineSearch size={17} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search by name or order ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm text-gray-700 outline-none w-full placeholder:text-gray-300"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-gray-300 hover:text-gray-500">
              <MdOutlineClose size={15} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {STATUS_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setFilter(filter)}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all duration-150 ${
                activeFilter === filter
                  ? "bg-[#6C63FF] text-white border-[#6C63FF]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#6C63FF] hover:text-[#6C63FF]"
              }`}
            >
              {filter}
              {filter !== "All" && (
                <span className="ml-1 opacity-70">
                  ({orders.filter((o) => o.status === filter).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <OrdersTable
        orders={filteredOrders}
        onView={(order) => setSelectedOrder(order)}
      />

      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}