import { useState } from "react";

import { Search, ShoppingBag, Heart, ArrowLeft } from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import { useCart } from "../../../context/CartContext";

import { useWishlist } from "../../../context/WishlistContext";

const categories = [
  {
    name: "Home",
    path: "/home",
  },

  {
    name: "Collections",
    path: "/collections",
  },

  {
    name: "New Arrivals",
    path: "/new-arrivals",
  },

  {
    name: "Best Sellers",
    path: "/best-sellers",
  },

  {
    name: "Luxury",
    path: "/luxury",
  },

  {
    name: "Accessories",
    path: "/accessories",
  },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const { wishlistItems } = useWishlist();

  const wishlistCount = wishlistItems.length;

  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="
              mr-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              text-gray-600
              transition-all
              hover:border-[#6C63FF]
              hover:text-[#6C63FF]
            "
          >
            <ArrowLeft size={18} />
          </button>

          <div
            onClick={() => navigate("/home")}
            className="
              min-w-fit
              cursor-pointer
            "
          >
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
          <div
            className="
              hidden
              cursor-pointer
              md:block
            "
          >
            <p
              className="text-sm text-gray-500"
              onClick={() => navigate("/login")}
            >
              Login / Signup
            </p>

            <p
              className="
                font-medium
                text-black
              "
              onClick={() => navigate("/account")}
            >
              My account
            </p>
          </div>

          <button
            onClick={() => navigate("/wishlist")}
            className="
              relative
              cursor-pointer
            "
          >
            <Heart size={26} strokeWidth={1.7} className="text-[#6C63FF]" />

            {wishlistCount > 0 && (
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
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="
              relative
              cursor-pointer
            "
          >
            <ShoppingBag
              size={28}
              strokeWidth={1.5}
              className="text-[#6C63FF]"
            />

            {cartCount > 0 && (
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
                {cartCount}
              </span>
            )}
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
          {categories.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`
                  relative
                  whitespace-nowrap
                  text-sm
                  transition-colors

                  ${
                    isActive
                      ? "font-medium text-[#6C63FF]"
                      : "text-gray-600 hover:text-[#6C63FF]"
                  }
                `}
              >
                {item.name}

                {isActive && (
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
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
