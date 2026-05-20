import { useRef, useState } from "react";
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

const INITIAL_SETTINGS = {
  siteName: "Driksha Infotech",
  tagline: "Your one-stop online shopping destination",
  email: "support@driksha.com",
  phone: "+91 98765 43210",
  address: "42 MG Road, Indore, Madhya Pradesh 452001",
  facebook: "https://facebook.com/driksha",
  instagram: "https://instagram.com/driksha",
  twitter: "https://twitter.com/driksha",
  youtube: "",
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
        {Icon && (
          <Icon className="text-gray-400 text-lg shrink-0" />
        )}

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

function Card({ title, subtitle, children }) {
  return (
    <div className="bg-white border border-[#e4e4ff] rounded-2xl p-4 sm:p-5">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}

export default function Settings() {
  const [form, setForm] = useState(INITIAL_SETTINGS);
  const [logo, setLogo] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const logoInputRef = useRef(null);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleLogoUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      setLogo(event.target.result);
    };

    reader.readAsDataURL(file);
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Settings
          </h1>

          <p className="text-sm text-gray-400 mt-1">
            Manage your site information and preferences
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#6C63FF] hover:bg-[#5d55f6] text-white px-5 py-3 rounded-xl text-sm font-medium transition disabled:opacity-60"
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

      {saved && (
        <div className="mb-5 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
          Settings saved successfully!
        </div>
      )}

      <div className="flex flex-col gap-5">
        <Card
          title="General"
          subtitle="Basic information about your site"
        >
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-700">
              Site Logo
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-20 h-20 border border-[#e4e4ff] rounded-xl overflow-hidden bg-[#f8f8ff] flex items-center justify-center shrink-0">
                {logo ? (
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-gray-300">
                    No Logo
                  </span>
                )}
              </div>

              <div className="flex-1">
                <button
                  type="button"
                  onClick={() => logoInputRef.current.click()}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#e4e4ff] hover:border-[#6C63FF] hover:text-[#6C63FF] px-4 py-3 rounded-xl text-sm text-gray-600 transition"
                >
                  <MdOutlineCloudUpload size={18} />
                  Upload Logo
                </button>

                <p className="text-xs text-gray-400 mt-2">
                  PNG or JPG recommended
                </p>

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

          <InputField
            label="Site Name"
            icon={MdOutlineLanguage}
            value={form.siteName}
            placeholder="Enter site name"
            onChange={(value) =>
              updateField("siteName", value)
            }
          />

          <InputField
            label="Tagline"
            icon={MdOutlineLanguage}
            value={form.tagline}
            placeholder="Enter tagline"
            onChange={(value) =>
              updateField("tagline", value)
            }
          />
        </Card>

        <Card
          title="Contact Information"
          subtitle="This information will appear on your website"
        >
          <InputField
            label="Email Address"
            icon={MdOutlineEmail}
            type="email"
            value={form.email}
            placeholder="Enter email address"
            onChange={(value) =>
              updateField("email", value)
            }
          />

          <InputField
            label="Phone Number"
            icon={MdOutlinePhone}
            type="tel"
            value={form.phone}
            placeholder="Enter phone number"
            onChange={(value) =>
              updateField("phone", value)
            }
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Address
            </label>

            <div className="flex gap-3 border border-[#e4e4ff] rounded-xl px-3 py-3 bg-white focus-within:border-[#6C63FF]">
              <MdOutlineLocationOn className="text-gray-400 text-lg mt-1 shrink-0" />

              <textarea
                rows={3}
                value={form.address}
                placeholder="Enter address"
                onChange={(e) =>
                  updateField("address", e.target.value)
                }
                className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-300 resize-none bg-transparent"
              />
            </div>
          </div>
        </Card>

        <Card
          title="Social Media Links"
          subtitle="Add your social media profile links"
        >
          <InputField
            label="Facebook"
            icon={RiFacebookLine}
            value={form.facebook}
            placeholder="Facebook link"
            onChange={(value) =>
              updateField("facebook", value)
            }
          />

          <InputField
            label="Instagram"
            icon={RiInstagramLine}
            value={form.instagram}
            placeholder="Instagram link"
            onChange={(value) =>
              updateField("instagram", value)
            }
          />

          <InputField
            label="Twitter / X"
            icon={RiTwitterXLine}
            value={form.twitter}
            placeholder="Twitter link"
            onChange={(value) =>
              updateField("twitter", value)
            }
          />

          <InputField
            label="YouTube"
            icon={RiYoutubeLine}
            value={form.youtube}
            placeholder="YouTube link"
            onChange={(value) =>
              updateField("youtube", value)
            }
          />
        </Card>
      </div>
    </div>
  );
}