import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-10
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#6C63FF]
        to-[#FF6584]
      "
    >
      {/* TOP BLUR */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[320px]
          h-[320px]
          bg-white/10
          rounded-full
          blur-3xl
        "
      />

      {/* BOTTOM BLUR */}
      <div
        className="
          absolute
          bottom-[-140px]
          right-[-140px]
          w-[360px]
          h-[360px]
          bg-pink-200/20
          rounded-full
          blur-3xl
        "
      />

      {/* CENTER CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          flex
          items-center
          justify-center
        "
      >
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;