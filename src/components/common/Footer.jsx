import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-cream">
      
      <motion.div
        className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex gap-3 cursor-pointer"
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-maroon  flex items-center justify-center rounded-lg shadow-lg">
            <Handshake className="text-white" size={20} />
          </div>

          {/* Text */}
          <div className="leading-tight">
            <p className="font-display text-2xl font-bold tracking-wide text-white">
              Samar Divine
            </p>
            <p className="font-body italic text-xs font-bold text-gold tracking-widest">
              Divine Handcrafted Idols
            </p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <h4 className="font-heading text-xs tracking-widest text-gold mb-4">
            QUICK LINKS
          </h4>
          <ul className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to={to}
                    className="font-body text-sm text-cream/70 no-underline hover:text-gold hover:pl-1 transition-all duration-300"
                  >
                    › {label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Categories */}
        <motion.div variants={fadeUp}>
          <h4 className="font-heading text-xs tracking-widest text-gold mb-4">
            CATEGORIES
          </h4>
          <ul className="flex flex-col gap-2">
            {["Ganesh", "Lakshmi", "Shiva", "Krishna", "Hanuman", "Durga"].map(
              (cat) => (
                <li key={cat}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={`/products?category=${cat}`}
                      className="font-body text-sm text-cream/70 no-underline hover:text-gold hover:pl-1 transition-all duration-300"
                    >
                      › {cat} Ji
                    </Link>
                  </motion.div>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h4 className="font-heading text-xs tracking-widest text-gold mb-4">
            CONTACT
          </h4>
          <div className="flex flex-col gap-2 text-sm font-body text-cream/70">
            <p>📍 Kachchi Chawani Taraunha Road , Karwi ,Chitrakoot Uttar Pradesh</p>
            <p>📞 +91 93354 56799</p>
            <p>✉️ toppershourya@gmail.com</p>
          </div>

         
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <div className="border-t border-gold/20 text-center py-4 text-sm font-body text-cream/40">
        © {new Date().getFullYear()} Samarth Divine. All rights reserved. Made with ❤️ & Devotion
      </div>
    </footer>
  );
}