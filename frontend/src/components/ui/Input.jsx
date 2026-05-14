<<<<<<< HEAD
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
            px-4
            py-2
            border
            border-gray-200
            rounded-xl
            outline-none
            transition-all
            duration-300
            focus:border-[#6C63FF]
            focus:ring-4
            focus:ring-purple-100
            bg-white
            "
      />
    </div>
  );
};

export default Input;
=======
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
            px-4
            py-2
            border
            border-gray-200
            rounded-xl
            outline-none
            transition-all
            duration-300
            focus:border-[#6C63FF]
            focus:ring-4
            focus:ring-purple-100
            bg-white
            "
      />
    </div>
  );
};

export default Input;
>>>>>>> integration
