import { useState } from "react";
import { MdOutlineClose, MdOutlineSave } from "react-icons/md";
import { CATEGORIES } from "./faqData";

export default function FaqModal({ faq, onClose, onSave }) {
  const [form, setForm] = useState({ ...faq });
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  const isValid = form.question.trim() !== "" && form.answer.trim() !== "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg flex flex-col gap-5 p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-800">
            {faq.id ? "Edit FAQ" : "Add New FAQ"}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-xl transition text-gray-400"
          >
            <MdOutlineClose size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-600">Category</label>
          <select
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className="border border-[#e0e0ff] rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/10 transition bg-white"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-600">
            Question <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. How long does delivery take?"
            value={form.question}
            onChange={(e) => update("question", e.target.value)}
            className="border border-[#e0e0ff] rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/10 transition placeholder:text-gray-300 bg-white"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-600">
            Answer <span className="text-red-400">*</span>
          </label>
          <textarea
            placeholder="Write a clear and helpful answer..."
            value={form.answer}
            onChange={(e) => update("answer", e.target.value)}
            rows={4}
            className="border border-[#e0e0ff] rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/10 transition placeholder:text-gray-300 bg-white resize-none"
          />
        </div>

        <div className="flex items-center justify-between p-3 bg-[#f8f8ff] rounded-xl border border-[#e0e0ff]">
          <span className="text-sm text-gray-700">Show on site</span>
          <button
            onClick={() => update("active", !form.active)}
            className={`relative w-11 h-6 rounded-full transition-colors ${form.active ? "bg-[#6C63FF]" : "bg-gray-200"}`}
          >
            <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${form.active ? "translate-x-5.5" : "translate-x-0.5"}`} />
          </button>
        </div>

        <button
          onClick={() => isValid && onSave(form)}
          disabled={!isValid}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-sm font-medium rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineSave size={16} />
          {faq.id ? "Save Changes" : "Add FAQ"}
        </button>
      </div>
    </div>
  );
}