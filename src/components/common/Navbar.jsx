import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {Handshake} from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md  z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "backdrop-blur-md"
        }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="no-underline">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-maroon flex items-center justify-center rounded-md shadow-md">
              <span className="text-lg text-white"><Handshake/></span>
            </div>

            {/* Text */}
            <div className="leading-tight">
              <p
                className={`font-display text-2xl font-bold tracking-wide ${scrolled ? "text-maroon" : "text-white"
                  }`}
              >
                Samarth Divine
              </p>
              <p className="font-body italic text-xs font-bold text-gold tracking-widest">
                Divine Handcrafted Idols
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"}
              className={({ isActive }) =>
                `font-heading text-[17px] font-bold tracking-widest no-underline transition-all pb-0.5 border-b-2 ${isActive ? "text-gold border-gold"
                  : `border-transparent ${scrolled ? "text-z" : "text-white"} hover:text-gold`
                }`
              }
            >
              {({ isActive }) => (
                <motion.span whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 300 }}>
                  {label}
                </motion.span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className={`md:hidden text-2xl bg-transparent border-none cursor-pointer ${scrolled ? "text-maroon" : "text-white"
            }`}
        >
          {menuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white flex flex-col gap-4 px-6 py-4 border-t border-gold/20"
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
                <NavLink to={to} end={to === "/"} onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-heading text-sm no-underline ${isActive ? "text-gold" : "text-maroon"}`
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