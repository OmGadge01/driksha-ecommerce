import { useState } from "react";
import {
  MdOutlineEmail,
  MdOutlineDownload,
  MdOutlinePeopleAlt,
  MdOutlineCalendarToday,
  MdOutlineDelete,
} from "react-icons/md";
import StatCard from "../../components/admin/shared/StatCard";
import SearchBar from "../../components/admin/shared/SearchBar";
import DeleteModal from "../../components/admin/shared/DeleteModal";

const DUMMY_SUBSCRIBERS = [
  { id: 1,  name: "Rahul Sharma",  email: "rahul@gmail.com",   date: "12 May 2026" },
  { id: 2,  name: "Priya Singh",   email: "priya@gmail.com",   date: "11 May 2026" },
  { id: 3,  name: "Om Verma",      email: "om@gmail.com",      date: "10 May 2026" },
  { id: 4,  name: "Anjali Rao",    email: "anjali@gmail.com",  date: "9 May 2026"  },
  { id: 5,  name: "Neha Gupta",    email: "neha@gmail.com",    date: "8 May 2026"  },
  { id: 6,  name: "Arjun Mehta",   email: "arjun@gmail.com",   date: "7 May 2026"  },
  { id: 7,  name: "Sneha Patel",   email: "sneha@gmail.com",   date: "5 May 2026"  },
  { id: 8,  name: "Vikram Joshi",  email: "vikram@gmail.com",  date: "3 May 2026"  },
  { id: 9,  name: "Kavya Sharma",  email: "kavya@gmail.com",   date: "1 May 2026"  },
  { id: 10, name: "Rohan Dixit",   email: "rohan@gmail.com",   date: "28 Apr 2026" },
];

export default function Newsletter() {
  const [subscribers, setSubscribers] = useState(DUMMY_SUBSCRIBERS);
  const [search, setSearch]           = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filtered = subscribers.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete() {
    setSubscribers((prev) => prev.filter((s) => s.id !== deleteTarget.id));
    setDeleteTarget(null);
  }

  function handleExport() {
    const header = "Name,Email,Subscribed Date\n";
    const rows   = subscribers.map((s) => `${s.name},${s.email},${s.date}`).join("\n");
    const blob   = new Blob([header + rows], { type: "text/csv" });
    const url    = URL.createObjectURL(blob);
    const link   = document.createElement("a");
    link.href     = url;
    link.download = "newsletter-subscribers.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="p-4 md:p-6 min-h-screen bg-[#f8f8ff]">

      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h1 className="text-base md:text-lg font-semibold text-gray-800">Newsletter</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            All users who subscribed to your newsletter
          </p>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5
                     border border-[#6C63FF] text-[#6C63FF] text-xs md:text-sm
                     font-medium rounded-xl hover:bg-[#f5f5ff] transition"
        >
          <MdOutlineDownload size={16} />
          <span className="hidden sm:inline">Export CSV</span>
          <span className="inline sm:hidden">Export</span>
        </button>
      </div>

      <div className="mb-5 md:mb-6 w-fit">
        <StatCard
          icon={MdOutlinePeopleAlt}
          label="Total Subscribers"
          value={subscribers.length}
          color="bg-[#6C63FF]"
        />
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search by name or email..."
        className="w-full sm:w-72 mb-4 md:mb-5"
      />

      <div className="hidden md:block">
        {filtered.length === 0 ? (
          <div className="bg-white border border-[#e0e0ff] rounded-2xl py-16 text-center">
            <MdOutlineEmail size={36} className="text-gray-200 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No subscribers found</p>
          </div>
        ) : (
          <div className="bg-white border border-[#e0e0ff] rounded-2xl overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#f5f5ff] border-b border-[#e0e0ff]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">#</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Name</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Subscribed On</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((subscriber, idx) => (
                  <tr
                    key={subscriber.id}
                    className={`border-b border-[#f5f5ff] hover:bg-[#fafaff] transition ${
                      idx === filtered.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-xs text-gray-400">{idx + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                          {subscriber.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{subscriber.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-gray-500">{subscriber.email}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs text-gray-400">{subscriber.date}</span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setDeleteTarget(subscriber)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg
                                   border border-[#e0e0ff] text-gray-400 hover:border-red-400
                                   hover:text-red-400 hover:bg-red-50 transition"
                        title="Remove subscriber"
                      >
                        <MdOutlineDelete size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 md:hidden">
        {filtered.length === 0 ? (
          <div className="bg-white border border-[#e0e0ff] rounded-2xl py-12 text-center">
            <MdOutlineEmail size={32} className="text-gray-200 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No subscribers found</p>
          </div>
        ) : (
          filtered.map((subscriber) => (
            <div
              key={subscriber.id}
              className="bg-white border border-[#e0e0ff] rounded-2xl p-3 md:p-4 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {subscriber.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">{subscriber.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MdOutlineEmail size={11} className="text-gray-400 shrink-0" />
                    <p className="text-xs text-gray-400 truncate">{subscriber.email}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MdOutlineCalendarToday size={11} className="text-gray-400 shrink-0" />
                    <p className="text-xs text-gray-400">{subscriber.date}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setDeleteTarget(subscriber)}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0ff]
                           text-gray-400 hover:border-red-400 hover:text-red-400 hover:bg-red-50
                           transition shrink-0"
              >
                <MdOutlineDelete size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      <DeleteModal
        isOpen={!!deleteTarget}
        title="Remove Subscriber?"
        message={`${deleteTarget?.name} — ${deleteTarget?.email} will be removed.`}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
      />

    </div>
  );
}