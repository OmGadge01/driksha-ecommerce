import { useState } from "react";
import { MdOutlineLock, MdOutlineVisibility, MdOutlineVisibilityOff, MdOutlineSave } from "react-icons/md";
function PasswordField({ label, placeholder, value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-2 border border-[#e0e0ff] rounded-xl px-3 py-2.5 focus-within:border-[#6C63FF] focus-within:ring-2 focus-within:ring-[#6C63FF]/10 transition bg-white">
        <MdOutlineLock size={17} className="text-gray-400 shrink-0" />
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm text-gray-700 outline-none w-full placeholder:text-gray-300"
        />
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="text-gray-300 hover:text-gray-500 transition shrink-0"
        >
          {show ? <MdOutlineVisibilityOff size={17} /> : <MdOutlineVisibility size={17} />}
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

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  function validate() {
    if (!form.currentPassword)return "Please enter your current password";
    if (!form.newPassword) return "Please enter a new password";
    if (form.newPassword.length < 8) return "New password must be at least 8 characters";
    if (form.newPassword !== form.confirmPassword) return "New passwords do not match";
    if (form.currentPassword === form.newPassword) return "New password must be different from current password";
    return null;
  }

  function handleSave() {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  }
  return (
    <div className="p-6 min-h-screen bg-[#f8f8ff]">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-800">Change Password</h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Update your admin account password
        </p>
      </div>

      <div className="max-w-lg">
        {saved && (
          <div className="flex items-center gap-2 bg-green-50 border border-green-200
                          text-green-700 text-sm rounded-xl px-4 py-3 mb-5">
            <span>✓</span>
            <span>Password changed successfully!</span>
          </div>
        )}
        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200
                          text-red-600 text-sm rounded-xl px-4 py-3 mb-5">
            <span>✕</span>
            <span>{error}</span>
          </div>
        )}
        <div className="bg-white border border-[#e0e0ff] rounded-2xl p-6 flex flex-col gap-5">

          <PasswordField
            label="Current Password"
            placeholder="Enter your current password"
            value={form.currentPassword}
            onChange={(v) => update("currentPassword", v)}
          />
          <div className="h-px bg-[#f0f0ff]" />
          <PasswordField
            label="New Password"
            placeholder="Enter new password (min 8 characters)"
            value={form.newPassword}
            onChange={(v) => update("newPassword", v)}
          />
          <PasswordField
            label="Confirm New Password"
            placeholder="Re-enter new password"
            value={form.confirmPassword}
            onChange={(v) => update("confirmPassword", v)}
          />
          {form.newPassword && (
            <div className="bg-[#f8f8ff] border border-[#e0e0ff] rounded-xl px-3 py-2.5">
              <p className="text-xs text-gray-500 font-medium mb-1.5">Password strength tips:</p>
              <div className="flex flex-col gap-1">
                <p className={`text-xs ${form.newPassword.length >= 8 ? "text-green-500" : "text-gray-400"}`}>
                  {form.newPassword.length >= 8 ? "✓" : "○"} At least 8 characters
                </p>
                <p className={`text-xs ${/[A-Z]/.test(form.newPassword) ? "text-green-500" : "text-gray-400"}`}>
                  {/[A-Z]/.test(form.newPassword) ? "✓" : "○"} At least one uppercase letter
                </p>
                <p className={`text-xs ${/[0-9]/.test(form.newPassword) ? "text-green-500" : "text-gray-400"}`}>
                  {/[0-9]/.test(form.newPassword) ? "✓" : "○"} At least one number
                </p>
              </div>
            </div>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <MdOutlineSave size={17} />
                Update Password
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}