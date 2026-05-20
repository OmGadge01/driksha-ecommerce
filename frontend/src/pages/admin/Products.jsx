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
import DeleteModal from "../../components/admin/shared/DeleteModal";

const DUMMY_PRODUCTS = [
  { id: 1, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=48&h=48&fit=crop", name: "Men's Running Sneaker", category: "Men › Shoes › Sports", price: 1299, originalPrice: 1999, stock: 42, featured: true, latest: false, popular: true },
  { id: 2, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=48&h=48&fit=crop", name: "Women's Floral Dress", category: "Women › Dresses › Frocks", price: 899, originalPrice: 1499, stock: 18, featured: false, latest: true, popular: false },
  { id: 3, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=48&h=48&fit=crop", name: "Bose QuietComfort Headphones", category: "Electronics › Audio › Headphones", price: 24999, originalPrice: 29999, stock: 7, featured: true, latest: true, popular: true },
  { id: 4, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=48&h=48&fit=crop", name: "Kids' Cartoon Backpack", category: "Kids › Bags › Backpacks", price: 499, originalPrice: 799, stock: 55, featured: false, latest: false, popular: true },
  { id: 5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=48&h=48&fit=crop", name: "Amazfit Smart Watch", category: "Electronics › Wearables › Watches", price: 6999, originalPrice: 8999, stock: 23, featured: true, latest: false, popular: false },
  { id: 6, image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=48&h=48&fit=crop", name: "Health Protein Powder", category: "Health › Supplements › Protein", price: 1899, originalPrice: 2499, stock: 0, featured: false, latest: true, popular: false },
];

const CATEGORIES = ["All", "Men", "Women", "Kids", "Electronics", "Health"];

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

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  const [search, setSearch] = useState("");
  const [selectedCategory, setCategory] = useState("All");
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "All" ||
      p.category.toLowerCase().startsWith(selectedCategory.toLowerCase());
    return matchSearch && matchCategory;
  });

  const handleToggle = (id, field, value) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const handleDelete = () => {
    setProducts(products.filter((p) => p.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-[#f8f8ff]">

      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Products</h1>
          <p className="text-xs text-gray-400 mt-0.5">{products.length} total products</p>
        </div>
        <button
          onClick={() => navigate("/admin/products/add")}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#FF6584] hover:bg-[#e8506f] text-white text-sm font-medium rounded-xl transition shadow-sm"
        >
          <MdOutlineAdd size={18} />
          <span>Add Product</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 mb-5">
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

      <div className="md:hidden flex flex-col gap-3 mb-4">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#e0e0ff] p-10 text-center">
            <MdOutlineInventory2 size={36} className="text-gray-200 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No products found</p>
            <p className="text-xs text-gray-300 mt-1">Try changing the search or filter</p>
          </div>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="bg-white border border-[#e0e0ff] rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-xl object-cover border border-[#e0e0ff] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 leading-snug">{product.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{product.category}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700">₹{product.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-300 line-through">₹{product.originalPrice.toLocaleString()}</p>
                </div>
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
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <TogglePill label="Featured" value={product.featured} onChange={(v) => handleToggle(product.id, "featured", v)} />
                <TogglePill label="Latest" value={product.latest} onChange={(v) => handleToggle(product.id, "latest", v)} />
                <TogglePill label="Popular" value={product.popular} onChange={(v) => handleToggle(product.id, "popular", v)} />
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-[#f5f5ff]">
                <button
                  onClick={() => navigate(`/admin/products/edit/${product.id}`)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-[#e0e0ff] text-sm text-gray-500 hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-[#f5f5ff] transition"
                >
                  <MdOutlineEdit size={16} /> Edit
                </button>
                <button
                  onClick={() => setDeleteTarget(product)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-[#e0e0ff] text-sm text-gray-500 hover:border-red-400 hover:text-red-400 hover:bg-red-50 transition"
                >
                  <MdOutlineDelete size={16} /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="hidden md:block bg-white border border-[#e0e0ff] rounded-2xl overflow-x-auto">
        <p className="text-xs text-gray-300 px-4 pt-3 md:hidden">← Scroll to see more</p>
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-[#f5f5ff] border-b border-[#e0e0ff]">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Product</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Category</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Price</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Stock</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Tags</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-16 text-center">
                  <MdOutlineInventory2 size={36} className="text-gray-200 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">No products found</p>
                  <p className="text-xs text-gray-300 mt-1">Try changing the search or filter</p>
                </td>
              </tr>
            ) : (
              filtered.map((product, idx) => (
                <tr
                  key={product.id}
                  className={`border-b border-[#f5f5ff] hover:bg-[#fafaff] transition ${idx === filtered.length - 1 ? "border-b-0" : ""}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover border border-[#e0e0ff] shrink-0" />
                      <span className="font-medium text-gray-700 text-sm leading-snug">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3"><span className="text-xs text-gray-400">{product.category}</span></td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-semibold text-gray-700">₹{product.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-300 line-through">₹{product.originalPrice.toLocaleString()}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${product.stock === 0 ? "bg-red-100 text-red-500" : product.stock < 10 ? "bg-orange-100 text-orange-500" : "bg-green-100 text-green-600"}`}>
                      {product.stock === 0 ? "Out of stock" : `${product.stock} left`}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <TogglePill label="Featured" value={product.featured} onChange={(v) => handleToggle(product.id, "featured", v)} />
                      <TogglePill label="Latest" value={product.latest} onChange={(v) => handleToggle(product.id, "latest", v)} />
                      <TogglePill label="Popular" value={product.popular} onChange={(v) => handleToggle(product.id, "popular", v)} />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/products/edit/${product.id}`)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0ff] text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-[#f5f5ff] transition"
                      >
                        <MdOutlineEdit size={16} />
                      </button>
                      <button
                        onClick={() => setDeleteTarget(product)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0ff] text-gray-400 hover:border-red-400 hover:text-red-400 hover:bg-red-50 transition"
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

      <DeleteModal
        isOpen={!!deleteTarget}
        title="Delete Product?"
        message={`"${deleteTarget?.name}" will be permanently deleted.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}