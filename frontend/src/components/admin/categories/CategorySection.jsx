import { useState } from "react";
import { MdOutlineAdd, MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import CategoryModal from "./CategaoryModal";
export default function CategorySection({
  title,           
  subtitle,       
  items,          
  onAdd,           
  onEdit,          
  onDelete,        
  disabled,        
  disabledMessage,
}) {
  const [modalOpen, setModalOpen]   = useState(false);
  const [editItem, setEditItem]     = useState(null);  
  const [deleteTarget, setDeleteTarget] = useState(null);

  function openAddModal() {
    setEditItem(null);
    setModalOpen(true);
  }

  function openEditModal(item) {
    setEditItem(item);
    setModalOpen(true);
  }

  function handleSave(name) {
    if (editItem) {
      onEdit(editItem.id, name);
    } else {
      onAdd(name);
    }
    setModalOpen(false);
    setEditItem(null);
  }

  function handleDelete() {
    onDelete(deleteTarget.id);
    setDeleteTarget(null);
  }

  return (
    <div className={`bg-white border border-[#e0e0ff] rounded-2xl p-5 flex flex-col gap-4 Rs{disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
          <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-xs font-medium rounded-xl transition"
        >
          <MdOutlineAdd size={15} />
          Add
        </button>
      </div>

      {disabled && disabledMessage && (
        <p className="text-xs text-gray-400 text-center py-4">{disabledMessage}</p>
      )}

      {!disabled && items.length === 0 && (
        <p className="text-xs text-gray-400 text-center py-6">
          No categories yet - click Add to create one
        </p>
      )}

      {!disabled && items.length > 0 && (
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#f5f5ff] transition group"
            >
              <span className="text-sm text-gray-700">{item.name}</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => openEditModal(item)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#e0e0ff] text-gray-400 hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-white transition"
                  title="Edit"
                >
                  <MdOutlineEdit size={14} />
                </button>
                <button
                  onClick={() => setDeleteTarget(item)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#e0e0ff] text-gray-400 hover:border-red-400 hover:text-red-400 hover:bg-red-50 transition"
                  title="Delete"
                >
                  <MdOutlineDelete size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <CategoryModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditItem(null);
        }}
        onSave={handleSave}
        editItem={editItem}
        title={editItem ? `Edit Rs{title.replace(" Categories", "")} Category` : `Add Rs{title.replace(" Categories", "")} Category`}
      />

      {deleteTarget && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-80 mx-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Delete Category?</h3>
            <p className="text-xs text-gray-500 mb-1">This category will be deleted:</p>
            <p className="text-sm font-medium text-gray-800 mb-5">"{deleteTarget.name}"</p>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
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