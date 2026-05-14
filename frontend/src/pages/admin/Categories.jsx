import { useState } from "react";
import CategorySection from "../../components/admin/categories/CategorySection";

const DUMMY_TOP = [
  { id: 1, name: "Men" },
  { id: 2, name: "Women" },
  { id: 3, name: "Kids" },
  { id: 4, name: "Electronics" },
  { id: 5, name: "Health" },
];

const DUMMY_MID = {
  1: [{ id: 1, name: "Shoes" }, { id: 2, name: "Clothing" }, { id: 3, name: "Accessories" }],
  2: [{ id: 4, name: "Dresses" }, { id: 5, name: "Tops" }, { id: 6, name: "Accessories" }],
  3: [{ id: 7, name: "Clothing" }, { id: 8, name: "Bags" }, { id: 9, name: "Toys" }],
  4: [{ id: 10, name: "Audio" }, { id: 11, name: "Wearables" }, { id: 12, name: "Mobiles" }],
  5: [{ id: 13, name: "Supplements" }, { id: 14, name: "Equipment" }, { id: 15, name: "Skincare" }],
};

const DUMMY_END = {
  1:  [{ id: 1, name: "Sports Shoes" }, { id: 2, name: "Casual Shoes" }, { id: 3, name: "Formal Shoes" }],
  2:  [{ id: 4, name: "T-Shirts" }, { id: 5, name: "Shirts" }, { id: 6, name: "Jeans" }],
  3:  [{ id: 7, name: "Belts" }, { id: 8, name: "Wallets" }, { id: 9, name: "Sunglasses" }],
  4:  [{ id: 10, name: "Maxi Dress" }, { id: 11, name: "Mini Dress" }, { id: 12, name: "Party Wear" }],
  5:  [{ id: 13, name: "Kurtis" }, { id: 14, name: "Blouses" }, { id: 15, name: "Crop Tops" }],
  6:  [{ id: 16, name: "Handbags" }, { id: 17, name: "Jewellery" }, { id: 18, name: "Scarves" }],
  7:  [{ id: 19, name: "T-Shirts" }, { id: 20, name: "Frocks" }, { id: 21, name: "Shorts" }],
  8:  [{ id: 22, name: "Backpacks" }, { id: 23, name: "School Bags" }],
  9:  [{ id: 24, name: "Educational" }, { id: 25, name: "Outdoor" }, { id: 26, name: "Indoor" }],
  10: [{ id: 27, name: "Headphones" }, { id: 28, name: "Earbuds" }, { id: 29, name: "Speakers" }],
  11: [{ id: 30, name: "Smartwatches" }, { id: 31, name: "Fitness Bands" }],
  12: [{ id: 32, name: "Smartphones" }, { id: 33, name: "Tablets" }, { id: 34, name: "Accessories" }],
  13: [{ id: 35, name: "Protein" }, { id: 36, name: "Vitamins" }, { id: 37, name: "Minerals" }],
  14: [{ id: 38, name: "Yoga Mats" }, { id: 39, name: "Dumbbells" }, { id: 40, name: "Resistance Bands" }],
  15: [{ id: 41, name: "Face Wash" }, { id: 42, name: "Moisturizer" }, { id: 43, name: "Sunscreen" }],
};

export default function Categories() {
  const [topCategories, setTopCategories] = useState(DUMMY_TOP);
  const [midCategories, setMidCategories] = useState(DUMMY_MID);
  const [endCategories, setEndCategories] = useState(DUMMY_END);

  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedMid, setSelectedMid] = useState(null);

  function addTopCategory(name) {
    const newItem = { id: Date.now(), name };
    setTopCategories((prev) => [...prev, newItem]);
    setMidCategories((prev) => ({ ...prev, [newItem.id]: [] }));
  }

  function editTopCategory(id, name) {
    setTopCategories((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name } : item))
    );
  }

  function deleteTopCategory(id) {
    setTopCategories((prev) => prev.filter((item) => item.id !== id));
    setMidCategories((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
    if (selectedTop?.id === id) {
      setSelectedTop(null);
      setSelectedMid(null);
    }
  }
  function addMidCategory(name) {
    if (!selectedTop) return;
    const newItem = { id: Date.now(), name };
    setMidCategories((prev) => ({
      ...prev,
      [selectedTop.id]: [...(prev[selectedTop.id] || []), newItem],
    }));
    setEndCategories((prev) => ({ ...prev, [newItem.id]: [] }));
  }

  function editMidCategory(id, name) {
    setMidCategories((prev) => ({
      ...prev,
      [selectedTop.id]: prev[selectedTop.id].map((item) =>
        item.id === id ? { ...item, name } : item
      ),
    }));
  }

  function deleteMidCategory(id) {
    setMidCategories((prev) => ({
      ...prev,
      [selectedTop.id]: prev[selectedTop.id].filter((item) => item.id !== id),
    }));
    setEndCategories((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
    if (selectedMid?.id === id) {
      setSelectedMid(null);
    }
  }

  function addEndCategory(name) {
    if (!selectedMid) return;
    const newItem = { id: Date.now(), name };
    setEndCategories((prev) => ({
      ...prev,
      [selectedMid.id]: [...(prev[selectedMid.id] || []), newItem],
    }));
  }

  function editEndCategory(id, name) {
    setEndCategories((prev) => ({
      ...prev,
      [selectedMid.id]: prev[selectedMid.id].map((item) =>
        item.id === id ? { ...item, name } : item
      ),
    }));
  }

  function deleteEndCategory(id) {
    setEndCategories((prev) => ({
      ...prev,
      [selectedMid.id]: prev[selectedMid.id].filter((item) => item.id !== id),
    }));
  }

  const currentMidItems = selectedTop ? (midCategories[selectedTop.id] || []) : [];
  const currentEndItems = selectedMid ? (endCategories[selectedMid.id] || []) : [];

  return (
    <div className="p-6 min-h-screen bg-[#f8f8ff]">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-800">Categories</h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Manage your 3-level category structure
        </p>
      </div>

      <div className="flex items-center gap-3 bg-[#f0efff] border border-[#e0e0ff] rounded-xl px-4 py-3 mb-6">
        <div className="flex items-center gap-2 text-xs text-[#6C63FF] font-medium">
          <span className="w-5 h-5 bg-[#6C63FF] text-white rounded-full flex items-center justify-center text-[10px]">1</span>
          Select a Top Category
        </div>
        <span className="text-gray-300">→</span>
        <div className="flex items-center gap-2 text-xs text-[#6C63FF] font-medium">
          <span className="w-5 h-5 bg-[#6C63FF] text-white rounded-full flex items-center justify-center text-[10px]">2</span>
          Select a Mid Category
        </div>
        <span className="text-gray-300">→</span>
        <div className="flex items-center gap-2 text-xs text-[#6C63FF] font-medium">
          <span className="w-5 h-5 bg-[#6C63FF] text-white rounded-full flex items-center justify-center text-[10px]">3</span>
          Manage End Categories
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <CategorySection
            title="Top Categories"
            subtitle="e.g. Men, Women, Electronics"
            items={topCategories}
            onAdd={addTopCategory}
            onEdit={editTopCategory}
            onDelete={deleteTopCategory}
            disabled={false}
          />
          {selectedTop && (
            <div className="bg-[#f0efff] border border-[#e0e0ff] rounded-xl px-3 py-2 text-xs text-[#6C63FF] font-medium text-center">
              Selected: {selectedTop.name}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {!selectedTop && (
            <div className="bg-white border border-[#e0e0ff] rounded-2xl p-5">
              <p className="text-xs text-gray-400 text-center py-4">
                Select a top category first to manage mid categories
              </p>
            </div>
          )}

          {selectedTop && (
            <CategorySection
              title="Mid Categories"
              subtitle={`Inside "${selectedTop.name}"`}
              items={currentMidItems}
              onAdd={addMidCategory}
              onEdit={editMidCategory}
              onDelete={deleteMidCategory}
              disabled={false}
            />
          )}

          {selectedMid && (
            <div className="bg-[#f0efff] border border-[#e0e0ff] rounded-xl px-3 py-2 text-xs text-[#6C63FF] font-medium text-center">
              Selected: {selectedMid.name}
            </div>
          )}
        </div>

        <div>
          {!selectedMid && (
            <div className="bg-white border border-[#e0e0ff] rounded-2xl p-5">
              <p className="text-xs text-gray-400 text-center py-4">
                Select a mid category first to manage end categories
              </p>
            </div>
          )}

          {selectedMid && (
            <CategorySection
              title="End Categories"
              subtitle={`Inside "${selectedMid.name}"`}
              items={currentEndItems}
              onAdd={addEndCategory}
              onEdit={editEndCategory}
              onDelete={deleteEndCategory}
              disabled={false}
            />
          )}
        </div>
      </div>

      <div className="mt-5 bg-white border border-[#e0e0ff] rounded-2xl p-5">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Click a top category to manage its mid categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {topCategories.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedTop(item);
                setSelectedMid(null); 
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                selectedTop?.id === item.id
                  ? "bg-[#6C63FF] text-white border-[#6C63FF]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#6C63FF] hover:text-[#6C63FF]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {selectedTop && currentMidItems.length > 0 && (
          <div className="mt-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              Click a mid category to manage its end categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {currentMidItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedMid(item)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                    selectedMid?.id === item.id
                      ? "bg-[#FF6584] text-white border-[#FF6584]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-[#FF6584] hover:text-[#FF6584]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}