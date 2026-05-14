import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Pagination = () => {
  return (
    <div
      className="
        mt-20
        flex
        items-center
        justify-center
        gap-3
      "
    >
      <button
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-gray-200
          text-gray-500
        "
      >
        <ChevronLeft size={18} />
      </button>

      <button
        className="
          h-10
          w-10
          rounded-xl
          bg-[#6C63FF]
          text-sm
          font-medium
          text-white
        "
      >
        1
      </button>

      {[2, 3].map((page) => (
        <button
          key={page}
          className="
            h-10
            w-10
            rounded-xl
            border
            border-gray-200
            text-sm
            text-gray-500
          "
        >
          {page}
        </button>
      ))}

      <button
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-gray-200
          text-gray-500
        "
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;