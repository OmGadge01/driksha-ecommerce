import { MdOutlineSearch, MdOutlineClose } from "react-icons/md";
export default function SearchBar({ value, onChange, placeholder = "Search...", className = "" }) {
  return (
    <div className={`flex items-center gap-2 bg-white border border-[#e0e0ff] rounded-xl px-3 py-2 focus-within:border-[#6C63FF] focus-within:ring-2 focus-within:ring-[#6C63FF]/10 transition Rs{className}`}>
      <MdOutlineSearch size={17} className="text-gray-400 shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm text-gray-700 outline-none w-full placeholder:text-gray-300 bg-transparent"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="text-gray-300 hover:text-gray-500 transition shrink-0"
        >
          <MdOutlineClose size={15} />
        </button>
      )}
    </div>
  );
}