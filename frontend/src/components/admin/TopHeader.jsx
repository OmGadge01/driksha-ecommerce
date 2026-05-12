function TopHeader() {
  return (
    <div className="bg-white border-b border-[#e0e0ff] px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-medium text-[#1a1a2e]">Dashboard</h1>
        <p className="text-xs text-gray-400 mt-0.5">Admin › Dashboard</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => window.open("/", "_blank")}
          className="flex items-center gap-2 border border-[#6C63FF] text-[#6C63FF] text-sm px-4 py-2 rounded-xl hover:bg-[#f5f5ff] transition"
        >
          <i className="ti ti-external-link text-base" aria-hidden="true"></i>
          View site
        </button>
        <div className="relative">
          <button className="w-9 h-9 flex items-center justify-center border border-[#e0e0ff] rounded-xl hover:bg-[#f5f5ff] transition">
            <i className="ti ti-bell text-gray-500 text-lg" aria-hidden="true"></i>
          </button>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6584] text-white text-[10px] rounded-full flex items-center justify-center">
            3
          </span>
        </div>
        <button className="w-9 h-9 flex items-center justify-center border border-[#e0e0ff] rounded-xl hover:bg-[#f5f5ff] transition">
          <i className="ti ti-mail text-gray-500 text-lg" aria-hidden="true"></i>
        </button>
        <div className="flex items-center gap-2 border border-[#e0e0ff] rounded-xl px-3 py-2 hover:bg-[#f5f5ff] transition cursor-pointer">
          <div className="w-7 h-7 bg-[#6C63FF] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-medium">AD</span>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1a1a2e] leading-none">Admin</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Super user</p>
          </div>
          <i className="ti ti-chevron-down text-gray-400 text-sm ml-1" aria-hidden="true"></i>
        </div>

      </div>
    </div>
  );
}

export default TopHeader;