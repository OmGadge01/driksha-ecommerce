import { useState } from "react";
import {
  MdOutlinePerson,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineSave,
} from "react-icons/md";

const INITIAL_DATA = {
  name: "Admin",
  email: "admin@driksha.com",
  phone: "+91 98765 43210",
};

function InputField({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="flex items-center gap-3 border border-[#e4e4ff] rounded-xl px-3 py-3 bg-white focus-within:border-[#6C63FF]">
        <Icon className="text-gray-400 text-lg shrink-0" />

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-300 bg-transparent"
        />
      </div>
    </div>
  );
}

export default function AdminProfile() {
  const [form, setForm] = useState(INITIAL_DATA);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSave() {
    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 3000);
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-[#f8f8ff] p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          My Profile
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Update your admin account information
        </p>
      </div>

      <div className="w-full max-w-2xl">
        {saved && (
          <div className="mb-5 flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
            <span>✓</span>
            <span>Profile updated successfully!</span>
          </div>
        )}

        <div className="bg-white border border-[#e4e4ff] rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-2xl font-semibold shrink-0">
              {form.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-800 break-all">
                {form.name}
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Super Admin
              </p>
            </div>
          </div>

          <div className="h-px bg-[#f1f1ff] mb-5" />

          <div className="flex flex-col gap-4">
            <InputField
              label="Full Name"
              icon={MdOutlinePerson}
              value={form.name}
              placeholder="Enter your name"
              onChange={(value) =>
                updateField("name", value)
              }
            />

            <InputField
              label="Email Address"
              icon={MdOutlineEmail}
              type="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={(value) =>
                updateField("email", value)
              }
            />

            <InputField
              label="Phone Number"
              icon={MdOutlinePhone}
              type="tel"
              value={form.phone}
              placeholder="Enter your phone number"
              onChange={(value) =>
                updateField("phone", value)
              }
            />

            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-[#6C63FF] hover:bg-[#5d55f6] text-white py-3 rounded-xl text-sm font-medium transition disabled:opacity-60 mt-2"
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <MdOutlineSave size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}