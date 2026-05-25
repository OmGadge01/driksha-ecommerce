import {
  MdOutlineDelete, MdOutlineEdit, MdOutlineDragIndicator,
  MdOutlineVisibility, MdOutlineVisibilityOff, MdOutlineImage,
} from "react-icons/md";

export default function BannerCard({ banner, index, onEdit, onDelete, onToggle }) {
  return (
    <div
      className={`bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 border transition ${
        banner.active ? "border-admin-border" : "border-gray-200 opacity-60"
      }`}
    >
      <MdOutlineDragIndicator size={20} className="text-gray-300 shrink-0 cursor-grab hidden sm:block" />

      <div
        className="w-14 h-12 sm:w-20 sm:h-14 rounded-xl shrink-0 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: banner.bgColor }}
      >
        {banner.image ? (
          <img src={banner.image} alt="banner thumbnail" className="w-full h-full object-cover" />
        ) : (
          <MdOutlineImage size={20} className="text-white/60" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 truncate">
          {banner.title || "—"}
        </p>
        <p className="text-xs text-gray-400 truncate mt-0.5">
          {banner.subtitle || "No subtitle"}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium shrink-0">
            {banner.buttonText || "No button"}
          </span>
          <span className="text-[10px] text-gray-300 truncate hidden sm:block">
            {banner.buttonLink || "/"}
          </span>
        </div>
      </div>

      <span className="text-xs font-bold text-gray-300 shrink-0 hidden sm:block">
        #{index + 1}
      </span>

      <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
        <button
          onClick={() => onToggle(banner.id)}
          title={banner.active ? "Hide banner" : "Show banner"}
          className="p-1.5 sm:p-2 rounded-xl hover:bg-primary-light text-gray-400 hover:text-primary transition"
        >
          {banner.active
            ? <MdOutlineVisibility size={17} />
            : <MdOutlineVisibilityOff size={17} />
          }
        </button>

        <button
          onClick={() => onEdit(banner)}
          className="p-1.5 sm:p-2 rounded-xl hover:bg-primary-light text-gray-400 hover:text-primary transition"
        >
          <MdOutlineEdit size={17} />
        </button>

        <button
          onClick={() => onDelete(banner.id)}
          className="p-1.5 sm:p-2 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 transition"
        >
          <MdOutlineDelete size={17} />
        </button>
      </div>
    </div>
  );
}