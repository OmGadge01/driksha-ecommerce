import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function CategoryModal({ isOpen, onClose, onSave, editItem, title }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
    } else {
      setName("");
    }
  }, [editItem, isOpen]);

  if (!isOpen) return null;

  function handleSave() {
    if (!name.trim()) {
      alert("Please enter a category name");
      return;
    }
    onSave(name.trim());
    setName("");
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="bg-admin-card rounded-2xl shadow-xl p-6 w-full max-w-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <MdOutlineClose size={18} />
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          className="w-full border border-admin-border rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-gray-300 transition mb-4"
          autoFocus
        />

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-medium transition"
          >
            {editItem ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
