import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineAdd,
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineSearch,
  MdOutlineFilterList,
  MdOutlineInventory2,
  MdOutlineClose,
} from "react-icons/md";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=48&h=48&fit=crop",
    name: "Men's Running Sneaker",
    category: "Men › Shoes › Sports",
    price: 1299,
    originalPrice: 1999,
    stock: 42,
    featured: true,
    latest: false,
    popular: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=48&h=48&fit=crop",
    name: "Women's Floral Dress",
    category: "Women › Dresses › Frocks",
    price: 899,
    originalPrice: 1499,
    stock: 18,
    featured: false,
    latest: true,
    popular: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=48&h=48&fit=crop",
    name: "Bose QuietComfort Headphones",
    category: "Electronics › Audio › Headphones",
    price: 24999,
    originalPrice: 29999,
    stock: 7,
    featured: true,
    latest: true,
    popular: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=48&h=48&fit=crop",
    name: "Kids' Cartoon Backpack",
    category: "Kids › Bags › Backpacks",
    price: 499,
    originalPrice: 799,
    stock: 55,
    featured: false,
    latest: false,
    popular: true,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=48&h=48&fit=crop",
    name: "Amazfit Smart Watch",
    category: "Electronics › Wearables › Watches",
    price: 6999,
    originalPrice: 8999,
    stock: 23,
    featured: true,
    latest: false,
    popular: false,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=48&h=48&fit=crop",
    name: "Health Protein Powder",
    category: "Health › Supplements › Protein",
    price: 1899,
    originalPrice: 2499,
    stock: 0,
    featured: false,
    latest: true,
    popular: false,
  },
];

const CATEGORIES = [
  "All",
  "Men",
  "Women",
  "Kids",
  "Electronics",
  "Health",
];

function TogglePill({ label, value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border transition-all duration-150 ${
        value
          ? "bg-[#6C63FF] text-white border-[#6C63FF]"
          : "bg-white text-gray-400 border-gray-200 hover:border-[#6C63FF] hover:text-[#6C63FF]"
      }`}
    >
      {label}
    </button>
  );
}

function DeleteModal({ product, onConfirm, onCancel }) {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-80 mx-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-800">Delete Product?</h3>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
            <MdOutlineClose size={18} />
          </button>
        </div>
        <p className="text-sm font-medium text-gray-800 mb-5">"{product.name}"</p>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default function Products() {
  const navigate = useNavigate();

  const [products, setProducts]         = useState(DUMMY_PRODUCTS);
  const [search, setSearch]             = useState("");
  const [selectedCategory, setCategory] = useState("All");
  const [deleteTarget, setDeleteTarget] = useState(null); 

  const filtered = products.filter((p) => {
    const matchSearch   = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "All" ||
      p.category.toLowerCase().startsWith(selectedCategory.toLowerCase());
    return matchSearch && matchCategory;
  });

const handleToggle = (id, field, value) => {
  const updatedProducts = products.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        [field]: value,
      };
    }
    return product;
  });

  setProducts(updatedProducts);
};

const handleDelete = () => {
  const updatedProducts = products.filter(
    (product) => product.id !== deleteTarget.id
  );  setProducts(updatedProducts);
  setDeleteTarget(null);
};


  return (
    <div className="p-4 sm:p-6 min-h-screen bg-[#f8f8ff]">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Products</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {products.length} total products
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/products/add")}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#FF6584] hover:bg-[#e8506f] text-white text-sm font-medium rounded-xl transition-all duration-150 shadow-sm"
        >
          <MdOutlineAdd size={18} />
          Add Product
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="flex items-center gap-2 bg-white border border-[#e0e0ff] rounded-xl px-3 py-2 w-full sm:w-64">
          <MdOutlineSearch size={17} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm text-gray-700 outline-none w-full placeholder:text-gray-300"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-gray-300 hover:text-gray-500">
              <MdOutlineClose size={15} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          <MdOutlineFilterList size={16} className="text-gray-400" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all duration-150 ${
                selectedCategory === cat
                  ? "bg-[#6C63FF] text-white border-[#6C63FF]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#6C63FF] hover:text-[#6C63FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-300 mb-1.5 sm:hidden">← Scroll to see more</p>
      <div className="bg-white border border-[#e0e0ff] rounded-2xl overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-[#f5f5ff] border-b border-[#e0e0ff]">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Product
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Category
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Price
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Stock
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Tags
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-16 text-center">
                  <MdOutlineInventory2 size={36} className="text-gray-200 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Koi product nahi mila</p>
                  <p className="text-xs text-gray-300 mt-1">
                    Search ya filter change karo
                  </p>
                </td>
              </tr>
            ) : (
              filtered.map((product, idx) => (
                <tr
                  key={product.id}
                  className={`border-b border-[#f5f5ff] hover:bg-[#fafaff] transition ${
                    idx === filtered.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover border border-[#e0e0ff] shrink-0"
                      />
                      <span className="font-medium text-gray-700 text-sm leading-snug">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-gray-400">{product.category}</span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-semibold text-gray-700">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-300 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        product.stock === 0
                          ? "bg-red-100 text-red-500"
                          : product.stock < 10
                          ? "bg-orange-100 text-orange-500"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {product.stock === 0 ? "Out of stock" : `${product.stock} left`}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <TogglePill
                        label="Featured"
                        value={product.featured}
                        onChange={(v) => handleToggle(product.id, "featured", v)}
                      />
                      <TogglePill
                        label="Latest"
                        value={product.latest}
                        onChange={(v) => handleToggle(product.id, "latest", v)}
                      />
                      <TogglePill
                        label="Popular"
                        value={product.popular}
                        onChange={(v) => handleToggle(product.id, "popular", v)}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/products/edit/${product.id}`)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0ff] text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-[#f5f5ff] transition"
                        title="Edit product"
                      >
                        <MdOutlineEdit size={16} />
                      </button>

                      {/* Delete — modal confirm karta hai pehle */}
                      <button
                        onClick={() => setDeleteTarget(product)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0ff] text-gray-400 hover:border-red-400 hover:text-red-400 hover:bg-red-50 transition"
                        title="Delete product"
                      >
                        <MdOutlineDelete size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Delete confirm modal ── */}
      <DeleteModal
        product={deleteTarget}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}