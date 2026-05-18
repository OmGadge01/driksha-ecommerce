import { useState } from "react";
import { MdOutlineAdd, MdOutlineQuestionAnswer } from "react-icons/md";
import { INITIAL_FAQS, EMPTY_FAQ, CATEGORIES } from "../../components/admin/faq/faqData";
import FaqRow from "../../components/admin/faq/FaqRow";
import FaqModal from "../../components/admin/faq/FaqModal";
import DeleteModal from "../../components/admin/shared/DeleteModal";
import SearchBar from "../../components/admin/shared/SearchBar";

export default function FaqManager() {
  const [faqs, setFaqs]         = useState(INITIAL_FAQS);
  const [modal, setModal]       = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch]     = useState("");
  const [filterCat, setFilterCat] = useState("All");

  function openAdd()     { setModal({ ...EMPTY_FAQ }); }
  function openEdit(faq) { setModal({ ...faq }); }
  function closeModal()  { setModal(null); }

  function handleSave(form) {
    if (form.id) {
      setFaqs((prev) => prev.map((f) => (f.id === form.id ? form : f)));
    } else {
      setFaqs((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    closeModal();
  }

  function handleToggle(id) {
    setFaqs((prev) =>
      prev.map((f) => (f.id === id ? { ...f, active: !f.active } : f))
    );
  }

  function confirmDelete() {
    setFaqs((prev) => prev.filter((f) => f.id !== deleteId));
    setDeleteId(null);
  }

  const allCategories = ["All", ...CATEGORIES];

  const filtered = faqs.filter((f) => {
    const matchCat    = filterCat === "All" || f.category === filterCat;
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="p-4 md:p-6 min-h-screen bg-[#f8f8ff]">
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div>
          <h1 className="text-base md:text-lg font-semibold text-gray-800">FAQ Manager</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {faqs.length} questions · {faqs.filter((f) => f.active).length} visible
          </p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5
                     bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-xs md:text-sm
                     font-medium rounded-xl transition"
        >
          <MdOutlineAdd size={17} />
          {/* Hide text on very small screens */}
          <span className="hidden xs:inline sm:inline">Add FAQ</span>
          <span className="inline xs:hidden sm:hidden">Add</span>
        </button>
      </div>
      <div className="bg-white border border-[#e0e0ff] rounded-2xl p-3 md:p-4 mb-4 md:mb-5 flex flex-col gap-3">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search questions or answers..."
          className="w-full"
        />
        <div className="flex items-center gap-1.5 flex-wrap">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-xl font-medium transition ${
                filterCat === cat
                  ? "bg-[#6C63FF] text-white"
                  : "bg-[#f0f0ff] text-[#6C63FF] hover:bg-[#e8e8ff]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="bg-white border border-dashed border-[#e0e0ff] rounded-2xl p-8 md:p-10 text-center">
          <MdOutlineQuestionAnswer size={36} className="text-gray-200 mx-auto mb-2" />
          <p className="text-sm text-gray-400">
            {search || filterCat !== "All"
              ? "No FAQ matches this filter."
              : "No FAQs yet. Click \"Add FAQ\" to create one."}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2 md:gap-3">
          {filtered.map((faq) => (
            <FaqRow
              key={faq.id}
              faq={faq}
              onEdit={openEdit}
              onDelete={(id) => setDeleteId(id)}
              onToggle={handleToggle}
            />
          ))}
        </div>
      )}
      {modal && (
        <FaqModal
          faq={modal}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
      <DeleteModal
        isOpen={!!deleteId}
        title="Delete FAQ?"
        message="This question and its answer will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}