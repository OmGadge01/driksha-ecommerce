import { useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Home & Garden",
  "Furniture & Lights",
  "Electricals",
  "Women",
  "Men",
  "Beauty",
  "Baby & Kids",
  "Sport & Travel",
  "Sale & Offers",
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-gray-200
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          h-24
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        <div className="min-w-fit cursor-pointer">
          <h1
            className="
              text-4xl
              font-light
              tracking-[0.25em]
              text-black
            "
          >
            Company Logo
          </h1>

          <p
            className="
              mt-1
              text-center
              text-xs
              tracking-[0.4em]
              text-gray-500
            "
          >
            Location
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="
            mx-12
            hidden
            h-12
            flex-1
            overflow-hidden
            border
            border-gray-300
            lg:flex
          "
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              const value = e.target.value;
              setSearchQuery(value);
              if (!value.trim()) {
                navigate("/collections");
              }
            }}
            className="
              flex-1
              border-none
              px-5
              text-sm
              outline-none
            "
          />

          <select
            className="
              w-44
              border-l
              border-gray-300
              bg-white
              px-4
              text-sm
              outline-none
              cursor-pointer
            "
          >
            <option>All categories</option>
          </select>

          <button
            type="submit"
            className="
              flex
              w-14
              items-center
              justify-center
              bg-[#6C63FF]
              text-white
              transition-all
              hover:bg-[#5b52f5]
            "
          >
            <Search size={18} />
          </button>
        </form>

        <div className="flex items-center gap-8">
          <div className="hidden cursor-pointer md:block">
            <p className="text-sm text-gray-500">Login / Signup</p>

            <p className="font-medium text-black">My account</p>
          </div>

          <button className="relative cursor-pointer">
            <ShoppingBag
              size={28}
              strokeWidth={1.5}
              className="text-[#6C63FF]"
            />

            <span
              className="
                absolute
                -right-2
                -top-2
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-[#6C63FF]
                text-[10px]
                text-white
              "
            >
              0
            </span>
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div
          className="
            mx-auto
            flex
            h-14
            max-w-7xl
            items-center
            gap-8
            overflow-x-auto
            px-6
          "
        >
          {categories.map((item, index) => (
            <button
              key={item}
              onClick={() => setActiveIndex(index)}
              className={`
                relative
                whitespace-nowrap
                text-sm
                transition-colors

                ${
                  index === activeIndex
                    ? "font-medium text-[#6C63FF]"
                    : "text-gray-600 hover:text-[#6C63FF]"
                }
              `}
            >
              {item}

              {index === activeIndex && (
                <span
                  className="
                    absolute
                    -bottom-[18px]
                    left-0
                    h-[2px]
                    w-full
                    bg-[#6C63FF]
                  "
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
