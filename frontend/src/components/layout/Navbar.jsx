import { Search, ShoppingCart, Heart, User } from "lucide-react";

const navLinks = ["Home", "Shop", "Categories", "Deals", "Contact"];

const Navbar = () => {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-gray-100
        bg-white/90
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#6C63FF]
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-[#6C63FF]/20
            "
          >
            L
          </div>

          <div>
            <h1
              className="
                text-base
                font-semibold
                tracking-tight
                text-gray-900
              "
            >
              Luxe
            </h1>

            <p className="text-[11px] text-gray-500">Modern Commerce</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`
                relative
                text-sm
                font-medium
                transition-colors
                duration-300

                ${
                  index === 0
                    ? "text-[#6C63FF]"
                    : "text-gray-500 hover:text-[#6C63FF]"
                }
              `}
            >
              {item}

              {index === 0 && (
                <span
                  className="
                    absolute
                    -bottom-[22px]
                    left-0
                    h-[2px]
                    w-full
                    rounded-full
                    bg-[#6C63FF]
                  "
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
              transition-all
              duration-300
              hover:border-[#6C63FF]/30
              hover:text-[#6C63FF]
            "
          >
            <Search size={18} />
          </button>

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
              transition-all
              duration-300
              hover:border-[#6C63FF]/30
              hover:text-[#6C63FF]
            "
          >
            <Heart size={18} />
          </button>

          <button
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              text-gray-500
              transition-all
              duration-300
              hover:border-[#6C63FF]/30
              hover:text-[#6C63FF]
            "
          >
            <ShoppingCart size={18} />

            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-[#6C63FF]
                text-[10px]
                font-medium
                text-white
              "
            >
              2
            </span>
          </button>

          <button
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#6C63FF]
              text-white
              shadow-lg
              shadow-[#6C63FF]/20
              transition-all
              duration-300
              hover:bg-[#5b52f5]
            "
          >
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
