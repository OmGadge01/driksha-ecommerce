import { useState } from "react";
import { MdOutlinePerson, MdOutlineEmail, MdOutlinePhone, MdOutlineSave } from "react-icons/md";
const INITIAL_DATA = {
  name:  "Admin",
  email: "admin@driksha.com",
  phone: "+91 98765 43210",
};

function Field({ label, icon: Icon, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-2 border border-[#e0e0ff] rounded-xl px-3 py-2.5 focus-within:border-[#6C63FF] focus-within:ring-2 focus-within:ring-[#6C63FF]/1 transition bg-white">
        <Icon size={17} className="text-gray-400 shrink-0" />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm text-gray-700 outline-none w-full placeholder:text-gray-300"
        />
      </div>
    </div>
  );
}

export default function AdminProfile() {
  const [form, setForm] = useState(INITIAL_DATA);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  }

  return (
    <div className="p-6 min-h-screen bg-[#f8f8ff]">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-800">My Profile</h1>
        <p className="text-xs text-gray-400 mt-0.5">Update your admin account information</p>
      </div>

      <div className="max-w-lg">
        {saved && (
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3 mb-5">
            <span>✓</span>
            <span>Profile updated successfully!</span>
          </div>
        )}

        <div className="bg-white border border-[#e0e0ff] rounded-2xl p-6 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-xl font-bold shrink-0">
              {form.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{form.name}</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
          </div>
          <div className="h-px bg-[#f0f0ff]" />

          <Field
            label="Full Name"
            icon={MdOutlinePerson}
            placeholder="Enter your name"
            value={form.name}
            onChange={(v) => update("name", v)}
          />
          <Field
            label="Email Address"
            icon={MdOutlineEmail}
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(v) => update("email", v)}
          />
          <Field
            label="Phone Number"
            icon={MdOutlinePhone}
            type="tel"
            placeholder="Enter your phone"
            value={form.phone}
            onChange={(v) => update("phone", v)}
          />

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed mt-1"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <MdOutlineSave size={17} />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}