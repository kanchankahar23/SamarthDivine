import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <footer className="bg-gradient-to-b from-deepmaroon to-brown text-cream">
      <motion.div
        className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <h3 className="font-display text-lg text-gold mb-3">🪔 Samarth Murti</h3>
          <p className="font-body text-sm text-cream/70 leading-relaxed">
            Bringing divine blessings to your home through authentic handcrafted idols.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <h4 className="font-heading text-xs tracking-widest text-gold mb-4">QUICK LINKS</h4>
          <ul className="flex flex-col gap-2">
            {[{ to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/products", label: "Products" }, { to: "/contact", label: "Contact" }]
              .map(({ to, label }) => (
                <li key={to}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to={to} className="font-body text-sm text-cream/70 no-underline hover:text-gold transition-colors">
                      › {label}
                    </Link>
                  </motion.div>
                </li>
              ))}
          </ul>
        </motion.div>

        {/* Categories */}
        <motion.div variants={fadeUp}>
          <h4 className="font-heading text-xs tracking-widest text-gold mb-4">CATEGORIES</h4>
          <ul className="flex flex-col gap-2">
            {["Ganesh", "Lakshmi", "Shiva", "Krishna", "Hanuman", "Durga"].map((cat) => (
              <li key={cat}>
                <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to={`/products?category=${cat}`} className="font-body text-sm text-cream/70 no-underline hover:text-gold transition-colors">
                    › {cat} Ji
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h4 className="font-heading text-xs tracking-widest text-gold mb-4">CONTACT</h4>
          <div className="flex flex-col gap-2 text-sm font-body text-cream/70">
            {[
              { icon: "📍", text: "123 Temple Street, Jabalpur, MP" },
              { icon: "📞", text: "+91 98765 43210" },
              { icon: "✉️", text: "info@samarthmurti.com" },
              { icon: "🕐", text: "Mon–Sat: 9 AM – 7 PM" },
            ].map(({ icon, text }) => (
              <p key={text}>{icon} {text}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="border-t border-gold/20 text-center py-4 text-xs font-body text-cream/40">
        © {new Date().getFullYear()} Samarth Murti. All rights reserved. Made with ❤️ & Devotion
      </div>
    </footer>
  );
}