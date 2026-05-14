const Checkbox = ({ label }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="w-4 h-4" />
      <span className="text-sm text-gray-600">{label}</span>
    </label>
  );
};

export default Checkbox;