export default function StatCard({ icon: Icon, label, value, color, change }) {
  return (
    <div className="bg-white border border-[#e0e0ff] rounded-2xl p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        {Icon && <Icon size={20} className="text-white" />}
      </div>
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
        {change && (
          <p className="text-[10px] text-gray-400 mt-0.5">{change}</p>
        )}
      </div>

    </div>
  );
}