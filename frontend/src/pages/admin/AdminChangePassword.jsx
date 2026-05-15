import { useState } from "react";

import {
  MdOutlineLock,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdOutlineSave,
} from "react-icons/md";

function PasswordField({
  label,
  placeholder,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="flex items-center gap-3 border border-[#e4e4ff] rounded-xl px-3 py-3 bg-white focus-within:border-[#6C63FF]">
        <MdOutlineLock className="text-gray-400 text-lg shrink-0" />

        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-300 bg-transparent"
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="text-gray-400 hover:text-gray-600 transition shrink-0"
        >
          {showPassword ? (
            <MdOutlineVisibilityOff size={20} />
          ) : (
            <MdOutlineVisibility size={20} />
          )}
        </button>
      </div>
    </div>
  );
}

export default function AdminChangePassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
  }

  function validateForm() {
    if (!form.currentPassword) {
      return "Please enter your current password";
    }

    if (!form.newPassword) {
      return "Please enter a new password";
    }

    if (form.newPassword.length < 8) {
      return "Password must be at least 8 characters";
    }

    if (form.currentPassword === form.newPassword) {
      return "New password must be different";
    }

    if (form.newPassword !== form.confirmPassword) {
      return "Passwords do not match";
    }

    return null;
  }

  function handleSave() {
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      setSaved(true);

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        setSaved(false);
      }, 3000);
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-[#f8f8ff] p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Change Password
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Update your admin account password
        </p>
      </div>

      <div className="w-full max-w-2xl">
        {saved && (
          <div className="mb-5 flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
            <span>✓</span>
            <span>Password updated successfully!</span>
          </div>
        )}

        {error && (
          <div className="mb-5 flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
            <span>✕</span>
            <span>{error}</span>
          </div>
        )}

        <div className="bg-white border border-[#e4e4ff] rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col gap-5">
            <PasswordField
              label="Current Password"
              placeholder="Enter current password"
              value={form.currentPassword}
              onChange={(value) =>
                updateField("currentPassword", value)
              }
            />

            <div className="h-px bg-[#f1f1ff]" />

            <PasswordField
              label="New Password"
              placeholder="Enter new password"
              value={form.newPassword}
              onChange={(value) =>
                updateField("newPassword", value)
              }
            />

            <PasswordField
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={form.confirmPassword}
              onChange={(value) =>
                updateField("confirmPassword", value)
              }
            />

            {form.newPassword && (
              <div className="bg-[#f8f8ff] border border-[#e4e4ff] rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Password Strength
                </p>

                <div className="flex flex-col gap-2">
                  <p
                    className={`text-xs ${
                      form.newPassword.length >= 8
                        ? "text-green-500"
                        : "text-gray-400"
                    }`}
                  >
                    {form.newPassword.length >= 8
                      ? "✓"
                      : "○"}{" "}
                    At least 8 characters
                  </p>

                  <p
                    className={`text-xs ${
                      /[A-Z]/.test(form.newPassword)
                        ? "text-green-500"
                        : "text-gray-400"
                    }`}
                  >
                    {/[A-Z]/.test(form.newPassword)
                      ? "✓"
                      : "○"}{" "}
                    One uppercase letter
                  </p>

                  <p
                    className={`text-xs ${
                      /[0-9]/.test(form.newPassword)
                        ? "text-green-500"
                        : "text-gray-400"
                    }`}
                  >
                    {/[0-9]/.test(form.newPassword)
                      ? "✓"
                      : "○"}{" "}
                    One number
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-[#6C63FF] hover:bg-[#5d55f6] text-white py-3 rounded-xl text-sm font-medium transition disabled:opacity-60 mt-1"
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <MdOutlineSave size={18} />
                  Update Password
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}