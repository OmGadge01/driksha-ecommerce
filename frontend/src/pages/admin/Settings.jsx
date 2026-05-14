import { useState, useRef } from "react";
import {
  MdOutlineSave,
  MdOutlineCloudUpload,
  MdOutlineLanguage,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";

// ─── Dummy Data ───────────────────────────────────────────────────────────────
// Replace with API call once backend is ready:
// useEffect(() => { axios.get("/api/admin/settings").then(r => setForm(r.data)) }, [])
const INITIAL_SETTINGS = {
  siteName:    "Driksha Infotech",
  tagline:     "Your one-stop online shopping destination",
  email:       "support@driksha.com",
  phone:       "+91 98765 43210",
  address:     "42 MG Road, Indore, Madhya Pradesh 452001",
  facebook:    "https://facebook.com/driksha",
  instagram:   "https://instagram.com/driksha",
  twitter:     "https://twitter.com/driksha",
  youtube:     "",
};

// ─── Reusable Input Field ─────────────────────────────────────────────────────
function SettingField({ label, icon: Icon, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-2 border border-[#e0e0ff] rounded-xl px-3 py-2.5 focus-within:border-[#6C63FF] focus-within:ring-2 focus-within:ring-[#6C63FF]/10 transition bg-white">
        {Icon && <Icon size={17} className="text-gray-400 shrink-0" />}
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

// ─── Section Card wrapper ─────────────────────────────────────────────────────
function SectionCard({ title, subtitle, children }) {
  return (
    <div className="bg-white border border-[#e0e0ff] rounded-2xl p-5 flex flex-col gap-4">
      <div>
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
        <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

// ─── Settings Page ────────────────────────────────────────────────────────────
export default function Settings() {
  const [form, setForm]         = useState(INITIAL_SETTINGS);
  const [logo, setLogo]         = useState(null);   // logo preview URL
  const [saving, setSaving]     = useState(false);
  const [saved, setSaved]       = useState(false);  // show success message
  const logoInputRef            = useRef(null);

  // Update a single field
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  // Logo upload handler
  function handleLogoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setLogo(ev.target.result);
    reader.readAsDataURL(file);
  }

  // Save settings
  function handleSave() {
    setSaving(true);

    // Replace with API call once backend is ready:
    // const formData = new FormData();
    // Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    // if (logoFile) formData.append("logo", logoFile);
    // axios.post("/api/admin/settings", formData).then(() => { ... })

    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      // Hide success message after 3 seconds
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  }

  return (
    <div className="p-6 min-h-screen bg-[#f8f8ff]">

      {/* Page heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Settings</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Manage your site information and preferences
          </p>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#6C63FF] hover:bg-[#5a52e0]
                     text-white text-sm font-medium rounded-xl transition
                     disabled:opacity-60 disabled:cursor-not-allowed"
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

      {/* Success message */}
      {saved && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700
                        text-sm rounded-xl px-4 py-3 mb-5">
          <span>✓</span>
          <span>Settings saved successfully!</span>
        </div>
      )}

      <div className="flex flex-col gap-5">

        {/* ── General Settings ── */}
        <SectionCard
          title="General"
          subtitle="Basic information about your site"
        >
          {/* Logo upload */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Site Logo</label>
            <div className="flex items-center gap-4">

              {/* Logo preview */}
              <div className="w-16 h-16 rounded-xl border border-[#e0e0ff] bg-[#f8f8ff] flex items-center justify-center overflow-hidden shrink-0">
                {logo ? (
                  <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-gray-300">No logo</span>
                )}
              </div>

              {/* Upload button */}
              <div>
                <button
                  type="button"
                  onClick={() => logoInputRef.current.click()}
                  className="flex items-center gap-2 px-3 py-2 border border-[#e0e0ff]
                             rounded-xl text-sm text-gray-500 hover:border-[#6C63FF]
                             hover:text-[#6C63FF] hover:bg-[#f5f5ff] transition"
                >
                  <MdOutlineCloudUpload size={16} />
                  Upload Logo
                </button>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG — recommended 200x200px</p>
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
              </div>
            </div>
          </div>

          {/* Site name */}
          <SettingField
            label="Site Name"
            icon={MdOutlineLanguage}
            placeholder="e.g. Driksha Infotech"
            value={form.siteName}
            onChange={(v) => update("siteName", v)}
          />

          {/* Tagline */}
          <SettingField
            label="Tagline"
            icon={MdOutlineLanguage}
            placeholder="e.g. Your one-stop online shopping destination"
            value={form.tagline}
            onChange={(v) => update("tagline", v)}
          />
        </SectionCard>

        {/* ── Contact Information ── */}
        <SectionCard
          title="Contact Information"
          subtitle="This will be shown in the footer and contact page"
        >
          <SettingField
            label="Email Address"
            icon={MdOutlineEmail}
            type="email"
            placeholder="support@yoursite.com"
            value={form.email}
            onChange={(v) => update("email", v)}
          />
          <SettingField
            label="Phone Number"
            icon={MdOutlinePhone}
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(v) => update("phone", v)}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <div className="flex items-start gap-2 border border-[#e0e0ff] rounded-xl px-3 py-2.5 focus-within:border-[#6C63FF] focus-within:ring-2 focus-within:ring-[#6C63FF]/10 transition bg-white">
              <MdOutlineLocationOn size={17} className="text-gray-400 shrink-0 mt-0.5" />
              <textarea
                placeholder="Enter your full address"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                rows={2}
                className="text-sm text-gray-700 outline-none w-full placeholder:text-gray-300 resize-none"
              />
            </div>
          </div>
        </SectionCard>

        {/* ── Social Links ── */}
        <SectionCard
          title="Social Media Links"
          subtitle="Leave empty if you don't have a profile on that platform"
        >
          <SettingField
            label="Facebook"
            icon={RiFacebookLine}
            placeholder="https://facebook.com/yourpage"
            value={form.facebook}
            onChange={(v) => update("facebook", v)}
          />
          <SettingField
            label="Instagram"
            icon={RiInstagramLine}
            placeholder="https://instagram.com/yourpage"
            value={form.instagram}
            onChange={(v) => update("instagram", v)}
          />
          <SettingField
            label="Twitter / X"
            icon={RiTwitterXLine}
            placeholder="https://twitter.com/yourpage"
            value={form.twitter}
            onChange={(v) => update("twitter", v)}
          />
          <SettingField
            label="YouTube"
            icon={RiYoutubeLine}
            placeholder="https://youtube.com/yourchannel"
            value={form.youtube}
            onChange={(v) => update("youtube", v)}
          />
        </SectionCard>

      </div>
    </div>
  );
}