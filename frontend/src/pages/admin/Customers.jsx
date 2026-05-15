import { useState } from "react";
import { MdOutlineSearch, MdOutlineClose, MdOutlinePeopleAlt,MdOutlinePersonAdd,MdOutlineStarBorder,} from "react-icons/md";
import CustomersTable from "../../components/admin/customers/CustomersTable";
import CustomerDetailModal from "../../components/admin/customers/CustomerDetailModal";
import StatCard from "../../components/admin/shared/StatCard";
import SearchBar from "../../components/admin/shared/SearchBar";

const DUMMY_CUSTOMERS = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 98765 43210",
    address: "42 MG Road, Indore, MP 452001",
    totalOrders: 5,
    totalSpent: 32450,
    delivered: 4,
    joinedDate: "Jan 2026",
    recentOrders: [
      { id: 1042, date: "12 May 2026", amount: 24999, status: "Delivered" },
      { id: 1035, date: "3 Apr 2026",  amount: 4500,  status: "Delivered" },
      { id: 1021, date: "10 Feb 2026", amount: 2951,  status: "Delivered" },
    ],
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "+91 91234 56789",
    address: "15 Vijay Nagar, Bhopal, MP 462001",
    totalOrders: 3,
    totalSpent: 5694,
    delivered: 2,
    joinedDate: "Feb 2026",
    recentOrders: [
      { id: 1041, date: "12 May 2026", amount: 1798, status: "Processing" },
      { id: 1028, date: "15 Mar 2026", amount: 2997, status: "Delivered"  },
      { id: 1010, date: "20 Feb 2026", amount: 899,  status: "Delivered"  },
    ],
  },
  {
    id: 3,
    name: "Om Verma",
    email: "om@gmail.com",
    phone: "+91 99887 76655",
    address: "7 Saket Nagar, Indore, MP 452018",
    totalOrders: 2,
    totalSpent: 8498,
    delivered: 1,
    joinedDate: "Mar 2026",
    recentOrders: [
      { id: 1040, date: "11 May 2026", amount: 6999, status: "Pending"   },
      { id: 1025, date: "5 Mar 2026",  amount: 1499, status: "Delivered" },
    ],
  },
  {
    id: 4,
    name: "Anjali Rao",
    email: "anjali@gmail.com",
    phone: "+91 90000 11223",
    address: "23 Civil Lines, Jabalpur, MP 482001",
    totalOrders: 4,
    totalSpent: 9200,
    delivered: 4,
    joinedDate: "Dec 2025",
    recentOrders: [
      { id: 1039, date: "11 May 2026", amount: 1798, status: "Delivered" },
      { id: 1030, date: "20 Mar 2026", amount: 2600, status: "Delivered" },
      { id: 1015, date: "10 Jan 2026", amount: 4802, status: "Delivered" },
    ],
  },
  {
    id: 5,
    name: "Neha Gupta",
    email: "neha@gmail.com",
    phone: "+91 88776 65544",
    address: "9 Palasia, Indore, MP 452001",
    totalOrders: 1,
    totalSpent: 1899,
    delivered: 0,
    joinedDate: "Apr 2026",
    recentOrders: [
      { id: 1038, date: "10 May 2026", amount: 1899, status: "Cancelled" },
    ],
  },
  {
    id: 6,
    name: "Arjun Mehta",
    email: "arjun@gmail.com",
    phone: "+91 77665 54433",
    address: "5 Ranjit Nagar, Gwalior, MP 474001",
    totalOrders: 1,
    totalSpent: 499,
    delivered: 0,
    joinedDate: "May 2026",
    recentOrders: [
      { id: 1037, date: "10 May 2026", amount: 499, status: "Pending" },
    ],
  },
];

export default function Customers() {
  const [customers, setCustomers] = useState(DUMMY_CUSTOMERS);
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelected] = useState(null); 

  const filteredCustomers = customers.filter((c) => {
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalCustomers = customers.length;
  const newThisMonth = customers.filter((c) => c.joinedDate.includes("May 2026")).length;
  const topSpender = customers.reduce((a, b) => (a.totalSpent > b.totalSpent ? a : b));

  return (
    <div className="p-6 min-h-screen bg-[#f8f8ff]">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-800">Customers</h1>
        <p className="text-xs text-gray-400 mt-0.5">View and manage all registered customers</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard
          icon={MdOutlinePeopleAlt}
          label="Total Customers"
          count={totalCustomers}
          color="bg-[#6C63FF]"
        />
        <StatCard
          icon={MdOutlinePersonAdd}
          label="New This Month"
          count={newThisMonth}
          color="bg-[#FF6584]"
        />
        <StatCard
          icon={MdOutlineStarBorder}
          label="Top Spender"
          count={`₹${topSpender.totalSpent.toLocaleString()}`}
          color="bg-amber-400"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by name or email ID..."
          className="w-64"
        />      
      </div>

      <CustomersTable
        customers={filteredCustomers}
        onView={(customer) => setSelected(customer)}
      />

      {selectedCustomer && (
        <CustomerDetailModal
          customer={selectedCustomer}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}