import React from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";

const Navbar = () => {
  return (
    <header
      className="
        w-full
        bg-white
        border-b
        border-gray-100
        sticky
        top-0
        z-50
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-between
        "
      >
 
        <div className="flex items-center gap-2 cursor-pointer">
          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-[#6C63FF]
              flex
              items-center
              justify-center
              text-white
              font-bold
            "
          >
           L
          </div>

          <h1
            className="
              text-lg
              font-semibold
              text-gray-900
            "
          >
            Logo Name
          </h1>
        </div>

  

        <nav className="hidden md:flex items-center gap-8">
          
          <a
            href="#"
            className="
              text-sm
              font-medium
              text-[#6C63FF]
              relative
            "
          >
            Home

           
            <span
              className="
                absolute
                -bottom-1.5
                left-0
                w-full
                h-[2px]
                bg-[#6C63FF]
                rounded-full
              "
            />
          </a>

          {["Shop", "Categories", "Deals", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="
                  text-sm
                  font-medium
                  text-gray-500
                  hover:text-[#6C63FF]
                  transition-colors
                  duration-300
                "
              >
                {item}
              </a>
            )
          )}
        </nav>

       

        <div className="flex items-center gap-3">

          

          <button
            className="
              w-10
              h-10
              rounded-xl
              border
              border-gray-200
              flex
              items-center
              justify-center
              text-gray-500
              hover:text-[#6C63FF]
              hover:border-[#6C63FF]/30
              transition-all
              duration-300
            "
          >
            <Search size={18} />
          </button>



          <button
            className="
              w-10
              h-10
              rounded-xl
              border
              border-gray-200
              flex
              items-center
              justify-center
              text-gray-500
              hover:text-[#6C63FF]
              hover:border-[#6C63FF]/30
              transition-all
              duration-300
            "
          >
            <Heart size={18} />
          </button>


          <button
            className="
              relative
              w-10
              h-10
              rounded-xl
              border
              border-gray-200
              flex
              items-center
              justify-center
              text-gray-500
              hover:text-[#6C63FF]
              hover:border-[#6C63FF]/30
              transition-all
              duration-300
            "
          >
            <ShoppingCart size={18} />

     

            <span
              className="
                absolute
                -top-1
                -right-1
                w-5
                h-5
                rounded-full
                bg-[#6C63FF]
                text-white
                text-[10px]
                flex
                items-center
                justify-center
              "
            >
              2
            </span>
          </button>

   

          <button
            className="
              w-10
              h-10
              rounded-xl
              bg-[#6C63FF]
              flex
              items-center
              justify-center
              text-white
              shadow-md
              hover:bg-[#5b52f5]
              transition-all
              duration-300
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