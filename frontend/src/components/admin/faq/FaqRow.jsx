import { useState } from "react";
import { MdOutlineDelete, MdOutlineEdit, MdOutlineExpandMore, MdOutlineExpandLess,
} from "react-icons/md";

export default function FaqRow({ faq, onEdit, onDelete, onToggle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-white border rounded-2xl overflow-hidden transition ${
        faq.active ? "border-[#e0e0ff]" : "border-gray-200 opacity-60"
      }`}
    >
      <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-3">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="p-1 md:p-1.5 rounded-lg hover:bg-[#f5f5ff] text-gray-400 hover:text-[#6C63FF] transition shrink-0"
        >
          {expanded
            ? <MdOutlineExpandLess size={18} />
            : <MdOutlineExpandMore size={18} />
          }
        </button>
        <p className="flex-1 text-xs md:text-sm font-medium text-gray-800 truncate">
          {faq.question}
        </p>
        <span className="hidden sm:inline text-[10px] bg-[#f0f0ff] text-[#6C63FF] px-2 py-0.5 rounded-full font-medium shrink-0">
          {faq.category}
        </span>
        <div
          title={faq.active ? "Visible on site" : "Hidden from site"}
          className={`w-2 h-2 rounded-full shrink-0 ${faq.active ? "bg-green-400" : "bg-gray-300"
          }`}
        />
        <div className="flex items-center gap-0.5 md:gap-1 shrink-0">
          <button
            onClick={() => onToggle(faq.id)}
            className={`text-[10px] px-1.5 md:px-2 py-0.5 md:py-1 rounded-lg border font-medium transition hidden sm:block ${
              faq.active
                ? "border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-400"
                : "border-green-200 text-green-500 hover:bg-green-50"
            }`}
          >
            {faq.active ? "Hide" : "Show"}
          </button>
          <button
            onClick={() => onEdit(faq)}
            className="p-1.5 md:p-2 rounded-xl hover:bg-[#f5f5ff] text-gray-400 over:text-[#6C63FF] transition"
            title="Edit FAQ"
          >
            <MdOutlineEdit size={15} />
          </button>

          <button
            onClick={() => onDelete(faq.id)}
            className="p-1.5 md:p-2 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 transition"
            title="Delete FAQ"
          >
            <MdOutlineDelete size={15} />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="px-4 md:px-5 pb-4 border-t border-[#f0f0ff]">
          <span className="inline sm:hidden text-[10px] bg-[#f0f0ff] text-[#6C63FF] px-2 py-0.5 rounded-full font-medium mt-3 inline-block">
            {faq.category}
          </span>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed mt-3">
            {faq.answer}
          </p>
          <button
            onClick={() => onToggle(faq.id)}
            className={`sm:hidden mt-3 text-[10px] px-2 py-1 rounded-lg border font-medium transition ${
              faq.active
                ? "border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-400"
                : "border-green-200 text-green-500 hover:bg-green-50"
            }`}
          >
            {faq.active ? "Hide from site" : "Show on site"}
          </button>
        </div>
      )}
    </div>
  );
}