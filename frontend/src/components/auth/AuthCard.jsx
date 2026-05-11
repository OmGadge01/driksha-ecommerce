import React from "react";

const AuthCard = ({ children, title, subtitle }) => {
  return (
    <div
      className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-4"
    >
      <div className="text-center mb-3">
        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-0.5 text-[11px] text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};

export default AuthCard;