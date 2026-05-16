import { useState, useRef } from "react";
import { MdOutlineClose, MdOutlineCloudUpload, MdOutlineSave,} from "react-icons/md";

function Field({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#e0e0ff] rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/10 transition placeholder:text-gray-300 bg-white"
      />
    </div>
  );
}

export default function BannerModal({ banner, onClose, onSave }) {
  const [form, setForm] = useState({ ...banner });
  const imageRef = useRef(null);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => update("image", ev.target.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-5 p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-800">
            {banner.id ? "Edit Banner" : "Add New Banner"}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-xl transition text-gray-400"
          >
            <MdOutlineClose size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-600">Banner Image</label>
          <div
            className="relative w-full h-28 rounded-xl border-2 border-dashed border-[#e0e0ff] flex flex-col items-center justify-center cursor-pointer hover:border-[#6C63FF] hover:bg-[#f8f8ff] transition overflow-hidden"
            style={{ backgroundColor: form.image ? "transparent" : form.bgColor + "15" }}
            onClick={() => imageRef.current.click()}
          >
            {form.image ? (
              <img
                src={form.image}
                alt="preview"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <>
                <MdOutlineCloudUpload size={24} className="text-[#6C63FF]" />
                <span className="text-xs text-gray-400 mt-1">Click to upload image</span>
              </>
            )}
            <input
              ref={imageRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs font-medium text-gray-600 shrink-0">
            Background Color
          </label>
          <input
            type="color"
            value={form.bgColor}
            onChange={(e) => update("bgColor", e.target.value)}
            className="w-10 h-8 rounded-lg border border-[#e0e0ff] cursor-pointer"
          />
          <span className="text-xs text-gray-400">{form.bgColor}</span>
        </div>

        <Field
          label="Title"
          placeholder="e.g. Summer Sale is Live!"
          value={form.title}
          onChange={(v) => update("title", v)}
        />
        <Field
          label="Subtitle"
          placeholder="e.g. Up to 50% off on selected items"
          value={form.subtitle}
          onChange={(v) => update("subtitle", v)}
        />
        <Field
          label="Button Text"
          placeholder="e.g. Shop Now"
          value={form.buttonText}
          onChange={(v) => update("buttonText", v)}
        />
        <Field
          label="Button Link"
          placeholder="e.g. /sale"
          value={form.buttonLink}
          onChange={(v) => update("buttonLink", v)}
        />

        <div className="flex items-center justify-between p-3 bg-[#f8f8ff] rounded-xl border border-[#e0e0ff]">
          <span className="text-sm text-gray-700">Show on site</span>
          <button
            onClick={() => update("active", !form.active)}
            className={`relative w-11 h-6 rounded-full transition-colors Rs{form.active ? "bg-[#6C63FF]" : "bg-gray-200"}`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all Rs{form.active ? "translate-x-5" : "translate-x-0.5"}`}
            />
          </button>
        </div>

        <button
          onClick={() => onSave(form)}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-sm font-medium rounded-xl transition"
        >
          <MdOutlineSave size={16} />
          {banner.id ? "Save Changes" : "Add Banner"}
        </button>
      </div>
    </div>
  );
}