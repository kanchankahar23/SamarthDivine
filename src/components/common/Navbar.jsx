import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Handshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="no-underline">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-maroon flex items-center justify-center rounded-lg shadow-md">
              <Handshake className="text-white w-6 h-6" />
            </div>

            {/* Text */}
            <div className="leading-tight">
              <p
                className={`font-display text-2xl font-bold tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-maroon" : "text-white"
                }`}
              >
                Samar Divine
              </p>

              <p
                className={`font-body italic text-xs font-bold tracking-widest transition-colors duration-300 ${
                  scrolled ? "text-gold" : "text-yellow-300"
                }`}
              >
                Divine Handcrafted Idols
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map(({ to, label }) => (
         <NavLink
  key={to}
  to={to}
  end={to === "/"}
  className={({ isActive }) =>
    `group relative font-display text-[18px] font-bold tracking-widest no-underline pb-1
    transition-all duration-500 ease-in-out
    ${
      isActive
        ? "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]"
        : scrolled
        ? "text-maroon hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
        : "text-white hover:text-yellow-300 hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.9)]"
    }`
  }
>
  {({ isActive }) => (
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative transition-all duration-500 ease-in-out"
    >
      {label}

      {/* Golden Glow Underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px]
        bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]
        transition-all duration-500 ease-in-out
        ${
          isActive
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
        }`}
      ></span>
    </motion.div>
  )}
</NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className={`md:hidden text-3xl bg-transparent border-none cursor-pointer transition-colors duration-300 ${
            scrolled ? "text-maroon" : "text-white"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-xl flex flex-col gap-5 px-6 py-5 border-t border-gray-200 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-heading text-base font-semibold no-underline transition-colors duration-300 ${
                      isActive
                        ? "text-gold"
                        : "text-maroon hover:text-gold"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}