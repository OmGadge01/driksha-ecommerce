import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdOutlineArrowBack,
  MdOutlineCloudUpload,
  MdOutlineClose,
  MdOutlineSave,
  MdOutlineAdd,
} from "react-icons/md";

const CATEGORY_DATA = {
  Men: {
    Shoes: ["Sports Shoes", "Casual Shoes", "Formal Shoes", "Sandals"],
    Clothing: ["T-Shirts", "Shirts", "Jeans", "Jackets"],
    Accessories: ["Belts", "Wallets", "Sunglasses"],
  },
  Women: {
    Dresses: ["Maxi Dress", "Mini Dress", "Party Wear"],
    Tops: ["Kurtis", "T-Shirts", "Crop Tops"],
    Accessories: ["Handbags", "Jewellery", "Scarves"],
  },
  Kids: {
    Clothing: ["T-Shirts", "Frocks", "Shorts"],
    Bags: ["Backpacks", "School Bags"],
    Toys: ["Educational", "Outdoor", "Indoor"],
  },
  Electronics: {
    Audio: ["Headphones", "Earbuds", "Speakers"],
    Wearables: ["Smartwatches", "Fitness Bands"],
    Mobiles: ["Smartphones", "Tablets", "Accessories"],
  },
  Health: {
    Supplements: ["Protein", "Vitamins", "Minerals"],
    Equipment: ["Yoga Mats", "Dumbbells", "Resistance Bands"],
    Skincare: ["Face Wash", "Moisturizer", "Sunscreen"],
  },
};

const EMPTY_FORM = {
  name: "",
  description: "",
  price: "",
  originalPrice: "",
  stock: "",
  topCategory: "",
  midCategory: "",
  endCategory: "",
  featured: false,
  latest: false,
  popular: false,
};

function ToggleSwitch({ label, value, onChange }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-sm text-gray-600">{label}</span>
      <div
        onClick={() => onChange(!value)}
        className={`w-10 h-5 rounded-full transition-all duration-200 relative ${
          value ? "bg-primary" : "bg-gray-200"
        }`}
      >
        <div
          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
            value ? "left-5" : "left-0.5"
          }`}
        />
      </div>
    </label>
  );
}

function ImageUploadBox({ images, onAdd, onRemove }) {
  const inputRef = useRef(null);

  function handleFiles(e) {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        onAdd({ file, preview: ev.target.result, name: file.name });
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  }

  return (
    <div>
      <div
        onClick={() => inputRef.current.click()}
        className="border-2 border-dashed border-admin-border rounded-xl p-5 sm:p-6 text-center cursor-pointer hover:border-primary hover:bg-primary-light transition-all duration-150"
      >
        <MdOutlineCloudUpload size={28} className="text-primary mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-600">Click to upload images</p>
        <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP — Multiple files allowed</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFiles}
        />
      </div>

      {images.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative group">
              <img
                src={img.preview}
                alt={img.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-admin-border"
              />
              <button
                type="button"
                onClick={() => onRemove(idx)}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-danger text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                <MdOutlineClose size={11} />
              </button>
              {idx === 0 && (
                <span className="absolute bottom-1 left-1 text-[9px] bg-primary text-white px-1.5 py-0.5 rounded-md">
                  Main
                </span>
              )}
            </div>
          ))}
          <div
            onClick={() => inputRef.current.click()}
            className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-dashed border-admin-border rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary-light transition"
          >
            <MdOutlineAdd size={20} className="text-gray-300" />
            <span className="text-[10px] text-gray-300 mt-0.5">Add more</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, required, children, hint }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-danger ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full border border-admin-border rounded-xl px-3 py-2.5 text-sm text-gray-700 " +
  "outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 " +
  "placeholder:text-gray-300 transition";

export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [form, setForm] = useState(EMPTY_FORM);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isEditMode) return;
    setLoading(true);
    setTimeout(() => {
      setForm({
        name: "Men's Running Sneaker",
        description: "Lightweight and comfortable running shoe for daily use.",
        price: "1299",
        originalPrice: "1999",
        stock: "42",
        topCategory: "Men",
        midCategory: "Shoes",
        endCategory: "Sports Shoes",
        featured: true,
        latest: false,
        popular: true,
      });
      setImages([
        {
          preview: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop",
          name: "sneaker.jpg",
        },
      ]);
      setLoading(false);
    }, 400);
  }, [id, isEditMode]);

  function update(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "topCategory") {
        next.midCategory = "";
        next.endCategory = "";
      }
      if (field === "midCategory") {
        next.endCategory = "";
      }
      return next;
    });
  }

  const topOptions = Object.keys(CATEGORY_DATA);
  const midOptions = form.topCategory ? Object.keys(CATEGORY_DATA[form.topCategory]) : [];
  const endOptions = form.topCategory && form.midCategory
    ? CATEGORY_DATA[form.topCategory][form.midCategory]
    : [];

  function handleAddImage(img) {
    setImages((prev) => [...prev, img]);
  }

  function handleRemoveImage(idx) {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  }

  function validate() {
    if (!form.name.trim())   return "Please enter the product name";
    if (!form.price)         return "Please enter the sale price";
    if (!form.originalPrice) return "Please enter the original price (MRP)";
    if (!form.stock)         return "Please enter the stock quantity";
    if (!form.topCategory)   return "Please select a top category";
    if (!form.midCategory)   return "Please select a mid category";
    if (!form.endCategory)   return "Please select an end category";
    if (images.length === 0) return "Please upload at least one image";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      navigate("/admin/products");
    }, 800);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-400">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-admin-bg">

      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => navigate("/admin/products")}
          className="w-8 h-8 flex items-center justify-center rounded-xl border border-admin-border text-gray-400 hover:border-primary hover:text-primary hover:bg-white transition shrink-0"
        >
          <MdOutlineArrowBack size={17} />
        </button>
        <div>
          <h1 className="text-base sm:text-lg font-semibold text-gray-800">
            {isEditMode ? "Edit Product" : "Add New Product"}
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {isEditMode ? "Update the product details below" : "Fill in the details to add a new product"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-5">

          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">

            <div className="bg-admin-card border border-admin-border rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
              <h2 className="text-sm font-semibold text-gray-700">Basic Info</h2>
              <Field label="Product Name" required>
                <input
                  type="text"
                  placeholder="e.g. Men's Running Sneaker"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputCls}
                />
              </Field>
              <Field
                label="Description"
                hint="Describe the product in detail - material, size, color, features"
              >
                <textarea
                  placeholder="Write about material, size, color, features..."
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  rows={4}
                  className={inputCls + " resize-none"}
                />
              </Field>
            </div>

            <div className="bg-admin-card border border-admin-border rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
              <h2 className="text-sm font-semibold text-gray-700">Pricing & Stock</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Field label="Sale Price (₹)" required>
                  <input
                    type="number"
                    placeholder="1299"
                    value={form.price}
                    onChange={(e) => update("price", e.target.value)}
                    className={inputCls}
                    min={0}
                  />
                </Field>
                <Field
                  label="Original Price / MRP (₹)"
                  required
                  hint="Will be shown as strikethrough"
                >
                  <input
                    type="number"
                    placeholder="1999"
                    value={form.originalPrice}
                    onChange={(e) => update("originalPrice", e.target.value)}
                    className={inputCls}
                    min={0}
                  />
                </Field>
                <Field label="Stock Quantity" required>
                  <input
                    type="number"
                    placeholder="42"
                    value={form.stock}
                    onChange={(e) => update("stock", e.target.value)}
                    className={inputCls}
                    min={0}
                  />
                </Field>
              </div>

              {form.price && form.originalPrice && (
                <div className="flex flex-wrap items-center gap-2 bg-success-light border border-success/20 rounded-xl px-3 py-2">
                  <span className="text-xs text-success font-medium">Discount:</span>
                  <span className="text-xs text-success font-semibold">
                    {Math.round(((form.originalPrice - form.price) / form.originalPrice) * 100)}% off
                  </span>
                  <span className="text-xs text-success/80 sm:ml-auto">
                    Customer saves ₹{form.originalPrice - form.price}
                  </span>
                </div>
              )}
            </div>

            <div className="bg-admin-card border border-admin-border rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
              <h2 className="text-sm font-semibold text-gray-700">
                Product Images
                <span className="text-xs font-normal text-gray-400 ml-2">
                  (First image will be the main image)
                </span>
              </h2>
              <ImageUploadBox
                images={images}
                onAdd={handleAddImage}
                onRemove={handleRemoveImage}
              />
            </div>

          </div>

          <div className="flex flex-col gap-4 sm:gap-5">

            <div className="bg-admin-card border border-admin-border rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
              <h2 className="text-sm font-semibold text-gray-700">Category</h2>
              <Field label="Top Category" required>
                <select
                  value={form.topCategory}
                  onChange={(e) => update("topCategory", e.target.value)}
                  className={inputCls}
                >
                  <option value="">-- Select --</option>
                  {topOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>

              {form.topCategory && (
                <Field label="Mid Category" required>
                  <select
                    value={form.midCategory}
                    onChange={(e) => update("midCategory", e.target.value)}
                    className={inputCls}
                  >
                    <option value="">-- Select --</option>
                    {midOptions.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </Field>
              )}

              {form.midCategory && (
                <Field label="End Category" required>
                  <select
                    value={form.endCategory}
                    onChange={(e) => update("endCategory", e.target.value)}
                    className={inputCls}
                  >
                    <option value="">-- Select --</option>
                    {endOptions.map((en) => (
                      <option key={en} value={en}>{en}</option>
                    ))}
                  </select>
                </Field>
              )}

              {form.endCategory && (
                <div className="flex items-center gap-1 flex-wrap bg-primary-light rounded-xl px-3 py-2">
                  <span className="text-[11px] text-primary font-medium">{form.topCategory}</span>
                  <span className="text-gray-300 text-xs">›</span>
                  <span className="text-[11px] text-primary font-medium">{form.midCategory}</span>
                  <span className="text-gray-300 text-xs">›</span>
                  <span className="text-[11px] text-primary font-medium">{form.endCategory}</span>
                </div>
              )}
            </div>

            <div className="bg-admin-card border border-admin-border rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
              <div>
                <h2 className="text-sm font-semibold text-gray-700">Product Tags</h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Choose where this product appears on the homepage
                </p>
              </div>
              <ToggleSwitch label="Featured" value={form.featured} onChange={(v) => update("featured", v)} />
              <ToggleSwitch label="Latest" value={form.latest} onChange={(v) => update("latest", v)} />
              <ToggleSwitch label="Popular" value={form.popular} onChange={(v) => update("popular", v)} />
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <MdOutlineSave size={17} />
                    {isEditMode ? "Update Product" : "Save Product"}
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => navigate("/admin/products")}
                className="w-full py-2.5 rounded-xl border border-admin-border text-sm text-gray-500 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}