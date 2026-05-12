// components/ui/Input.jsx

const Input = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
            w-full
            h-8
            px-4
            text-sm
            border
            border-gray-200
            rounded-xl
            outline-none
            focus:ring-2
            focus:ring-[#6C63FF]/20
            focus:border-[#6C63FF]
            transition-all
            "
      />
    </div>
  );
};

export default Input;

// components/ui/Input.jsx

const Input = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
            w-full
            h-10
            px-4
            text-sm
            border
            border-gray-200
            rounded-xl
            outline-none
            focus:ring-2
            focus:ring-[#6C63FF]/20
            focus:border-[#6C63FF]
            transition-all
            "
      />
    </div>
  );
};

export default Input;
