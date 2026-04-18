import React from "react";

const variants = {
  primary: "bg-gradient-to-r from-saffron to-gold text-white shadow-lg hover:brightness-110 hover:-translate-y-0.5",
  secondary: "bg-transparent border-2 border-gold text-maroon hover:bg-maroon/10 hover:-translate-y-0.5",
  ghost: "bg-transparent text-saffron underline decoration-transparent hover:decoration-saffron",
};

export default function Button({ children, variant = "primary", onClick, disabled, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-heading tracking-widest text-sm px-6 py-2.5 rounded
        inline-flex items-center justify-center gap-2
        transition-all duration-200 cursor-pointer
        ${variants[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}