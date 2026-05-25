import { useState } from "react";
import CategorySection from "../../components/admin/categories/CategorySection";

const DUMMY_TOP = [
  { id: 1, name: "Men" }, { id: 2, name: "Women" }, { id: 3, name: "Kids" },
  { id: 4, name: "Electronics" }, { id: 5, name: "Health" },
];

const DUMMY_MID = {
  1: [{ id: 1, name: "Shoes" }, { id: 2, name: "Clothing" }, { id: 3, name: "Accessories" }],
  2: [{ id: 4, name: "Dresses" }, { id: 5, name: "Tops" }, { id: 6, name: "Accessories" }],
  3: [{ id: 7, name: "Clothing" }, { id: 8, name: "Bags" }, { id: 9, name: "Toys" }],
  4: [{ id: 10, name: "Audio" }, { id: 11, name: "Wearables" }, { id: 12, name: "Mobiles" }],
  5: [{ id: 13, name: "Supplements" }, { id: 14, name: "Equipment" }, { id: 15, name: "Skincare" }],
};

const DUMMY_END = {
  1: [{ id: 1, name: "Sports Shoes" }, { id: 2, name: "Casual Shoes" }, { id: 3, name: "Formal Shoes" }],
  2: [{ id: 4, name: "T-Shirts" }, { id: 5, name: "Shirts" }, { id: 6, name: "Jeans" }],
  3: [{ id: 7, name: "Belts" }, { id: 8, name: "Wallets" }, { id: 9, name: "Sunglasses" }],
  4: [{ id: 10, name: "Maxi Dress" }, { id: 11, name: "Mini Dress" }, { id: 12, name: "Party Wear" }],
  5: [{ id: 13, name: "Kurtis" }, { id: 14, name: "Blouses" }, { id: 15, name: "Crop Tops" }],
  6: [{ id: 16, name: "Handbags" }, { id: 17, name: "Jewellery" }, { id: 18, name: "Scarves" }],
  7: [{ id: 19, name: "T-Shirts" }, { id: 20, name: "Frocks" }, { id: 21, name: "Shorts" }],
  8: [{ id: 22, name: "Backpacks" }, { id: 23, name: "School Bags" }],
  9: [{ id: 24, name: "Educational" }, { id: 25, name: "Outdoor" }, { id: 26, name: "Indoor" }],
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
  const [activeStep, setActiveStep] = useState(1);

  function addTopCategory(name) {
    const newItem = { id: Date.now(), name };
    setTopCategories((prev) => [...prev, newItem]);
    setMidCategories((prev) => ({ ...prev, [newItem.id]: [] }));
  }
  function editTopCategory(id, name) {
    setTopCategories((prev) => prev.map((item) => (item.id === id ? { ...item, name } : item)));
  }
  function deleteTopCategory(id) {
    setTopCategories((prev) => prev.filter((item) => item.id !== id));
    setMidCategories((prev) => { const u = { ...prev }; delete u[id]; return u; });
    if (selectedTop?.id === id) { setSelectedTop(null); setSelectedMid(null); }
  }

  function addMidCategory(name) {
    if (!selectedTop) return;
    const newItem = { id: Date.now(), name };
    setMidCategories((prev) => ({ ...prev, [selectedTop.id]: [...(prev[selectedTop.id] || []), newItem] }));
    setEndCategories((prev) => ({ ...prev, [newItem.id]: [] }));
  }
  function editMidCategory(id, name) {
    setMidCategories((prev) => ({ ...prev, [selectedTop.id]: prev[selectedTop.id].map((item) => (item.id === id ? { ...item, name } : item)) }));
  }
  function deleteMidCategory(id) {
    setMidCategories((prev) => ({ ...prev, [selectedTop.id]: prev[selectedTop.id].filter((item) => item.id !== id) }));
    setEndCategories((prev) => { const u = { ...prev }; delete u[id]; return u; });
    if (selectedMid?.id === id) setSelectedMid(null);
  }

  function addEndCategory(name) {
    if (!selectedMid) return;
    const newItem = { id: Date.now(), name };
    setEndCategories((prev) => ({ ...prev, [selectedMid.id]: [...(prev[selectedMid.id] || []), newItem] }));
  }
  function editEndCategory(id, name) {
    setEndCategories((prev) => ({ ...prev, [selectedMid.id]: prev[selectedMid.id].map((item) => (item.id === id ? { ...item, name } : item)) }));
  }
  function deleteEndCategory(id) {
    setEndCategories((prev) => ({ ...prev, [selectedMid.id]: prev[selectedMid.id].filter((item) => item.id !== id) }));
  }

  const currentMidItems = selectedTop ? (midCategories[selectedTop.id] || []) : [];
  const currentEndItems = selectedMid ? (endCategories[selectedMid.id] || []) : [];

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-admin-bg">

      <div className="mb-5">
        <h1 className="text-lg font-semibold text-gray-800">Categories</h1>
        <p className="text-xs text-gray-400 mt-0.5">Manage your 3-level category structure</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-primary-light border border-admin-border rounded-xl px-3 sm:px-4 py-3 mb-5">
        {[
          { step: 1, label: "Select a Top Category" },
          { step: 2, label: "Select a Mid Category" },
          { step: 3, label: "Manage End Categories" },
        ].map((item, index) => (
          <div key={item.step} className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
              <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-[10px] shrink-0">
                {item.step}
              </span>
              <span className="hidden sm:inline">{item.label}</span>
            </div>
            {index < 2 && <span className="text-gray-300 text-xs">→</span>}
          </div>
        ))}
      </div>

      <div className="sm:hidden flex border border-admin-border rounded-xl overflow-hidden mb-4 bg-admin-card">
        {["Top", "Mid", "End"].map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveStep(i + 1)}
            className={`flex-1 py-2.5 text-xs font-medium transition ${
              activeStep === i + 1 ? "bg-primary text-white" : "text-gray-500 hover:bg-primary-light"
            }`}
          >
            {tab} Level
          </button>
        ))}
      </div>

      <div className="hidden sm:grid sm:grid-cols-3 gap-4 mb-5">
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
            <div className="bg-primary-light border border-admin-border rounded-xl px-3 py-2 text-xs text-primary font-medium text-center">
              Selected: {selectedTop.name}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {!selectedTop ? (
            <div className="bg-admin-card border border-admin-border rounded-2xl p-5">
              <p className="text-xs text-gray-400 text-center py-4">Select a top category first</p>
            </div>
          ) : (
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
            <div className="bg-primary-light border border-admin-border rounded-xl px-3 py-2 text-xs text-primary font-medium text-center">
              Selected: {selectedMid.name}
            </div>
          )}
        </div>

        <div>
          {!selectedMid ? (
            <div className="bg-admin-card border border-admin-border rounded-2xl p-5">
              <p className="text-xs text-gray-400 text-center py-4">Select a mid category first</p>
            </div>
          ) : (
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

      <div className="sm:hidden mb-5">
        {activeStep === 1 && (
          <CategorySection
            title="Top Categories"
            subtitle="e.g. Men, Women, Electronics"
            items={topCategories}
            onAdd={addTopCategory}
            onEdit={editTopCategory}
            onDelete={deleteTopCategory}
            disabled={false}
          />
        )}
        {activeStep === 2 && (
          !selectedTop ? (
            <div className="bg-admin-card border border-admin-border rounded-2xl p-5">
              <p className="text-xs text-gray-400 text-center py-4">Select a top category first</p>
            </div>
          ) : (
            <CategorySection
              title="Mid Categories"
              subtitle={`Inside "${selectedTop.name}"`}
              items={currentMidItems}
              onAdd={addMidCategory}
              onEdit={editMidCategory}
              onDelete={deleteMidCategory}
              disabled={false}
            />
          )
        )}
        {activeStep === 3 && (
          !selectedMid ? (
            <div className="bg-admin-card border border-admin-border rounded-2xl p-5">
              <p className="text-xs text-gray-400 text-center py-4">Select a mid category first</p>
            </div>
          ) : (
            <CategorySection
              title="End Categories"
              subtitle={`Inside "${selectedMid.name}"`}
              items={currentEndItems}
              onAdd={addEndCategory}
              onEdit={editEndCategory}
              onDelete={deleteEndCategory}
              disabled={false}
            />
          )
        )}
      </div>

      <div className="bg-admin-card border border-admin-border rounded-2xl p-4 sm:p-5">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Click a top category to manage its mid categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {topCategories.map((item) => (
            <button
              key={item.id}
              onClick={() => { setSelectedTop(item); setSelectedMid(null); setActiveStep(2); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                selectedTop?.id === item.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary"
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
                  onClick={() => { setSelectedMid(item); setActiveStep(3); }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                    selectedMid?.id === item.id
                      ? "bg-danger text-white border-danger"
                      : "bg-white text-gray-500 border-gray-200 hover:border-danger hover:text-danger"
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
