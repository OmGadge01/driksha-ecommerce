import { useState } from "react";
import { MdOutlineAdd, MdOutlineImage } from "react-icons/md";
import BannerCard from "../../components/admin/banner/BannerCard";
import BannerModal from "../../components/admin/banner/BannerModal";

 const INITIAL_BANNERS = [
  {
    id: 1,
    title: "Summer Sale is Live!",
    subtitle: "Up to 50% off on selected items",
    buttonText: "Shop Now",
    buttonLink: "/sale",
    image: null,
    bgColor: "#6C63FF",
    active: true,
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Check out the latest products just added",
    buttonText: "Explore",
    buttonLink: "/new",
    image: null,
    bgColor: "#f472b6",
    active: true,
  },
  {
    id: 3,
    title: "Free Shipping",
    subtitle: "On all orders above ₹499",
    buttonText: "Learn More",
    buttonLink: "/shipping",
    image: null,
    bgColor: "#a78bfa",
    active: false,
  },
];

 const EMPTY_BANNER = {
  id: null,
  title: "",
  subtitle: "",
  buttonText: "",
  buttonLink: "",
  image: null,
  bgColor: "#6C63FF",
  active: true,
};

export default function Banner() {

  const [banners, setBanners] = useState(INITIAL_BANNERS); 
  const [modal, setModal] = useState(null);            
  const [deleteId, setDeleteId] = useState(null);        
  function openAdd() { setModal({ ...EMPTY_BANNER }); }   
  function openEdit(banner) { setModal({ ...banner }); }         
  function closeModal() { setModal(null); }

  function handleSave(form) {
    if (form.id) {
      setBanners((prev) => prev.map((b) => (b.id === form.id ? form : b)));
    } else {
      const newBanner = { ...form, id: Date.now() };
      setBanners((prev) => [...prev, newBanner]);
    }
    closeModal();
  }
  function handleToggle(id) {
    setBanners((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    );
  }

  function handleDelete(id){ setDeleteId(id); }  

  function confirmDelete() {
    setBanners((prev) => prev.filter((b) => b.id !== deleteId));
    setDeleteId(null);
  }

  const activeCount = banners.filter((b) => b.active).length;

  return (
    <div className="p-6 min-h-screen bg-[#f8f8ff]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Banner</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {banners.length} banners · {activeCount} active
          </p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-sm font-medium rounded-xl transition"
        >
          <MdOutlineAdd size={18} />
          Add Banner
        </button>
      </div>

      <div className="bg-white border border-[#e0e0ff] rounded-2xl p-4 mb-5">
        <p className="text-xs text-gray-500 leading-relaxed">
          💡 <span className="font-medium text-gray-700">Tip:</span>Banners will appear on the homepage as a slider in the order shown below. 
          You can hide a banner without deleting it using the visibility toggle. The drag handle (⠿) will be used for reordering in a future update.
        </p>
      </div>

      {banners.length === 0 ? (
        <div className="bg-white border border-dashed border-[#e0e0ff] rounded-2xl p-10 text-center">
          <MdOutlineImage size={36} className="text-gray-200 mx-auto mb-2" />
          <p className="text-sm text-gray-400">
           No banner found. click "Add Banner".
          </p>
        </div>

      ) : (

        <div className="flex flex-col gap-3">
          {banners.map((banner, i) => (
            <BannerCard
              key={banner.id}
              banner={banner}
              index={i}
              onEdit={openEdit}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
        </div>
      )}
      {modal && (
        <BannerModal
          banner={modal}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col gap-4">
            <h2 className="text-base font-semibold text-gray-800">Delete banner?</h2>
            <p className="text-sm text-gray-500">
              This banner will be permanently removed. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 border border-[#e0e0ff] rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-medium transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}