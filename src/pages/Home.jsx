import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/product/ProductCard";
import { products } from "../data/products";
// import bg from '../assets/bg.webp';

const featured = products.filter((p) => p.tags?.includes("bestseller")).slice(0, 4);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen bg-[url('../assets/bg.jpg')]  bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at center, #d4a820 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
  <div className="absolute inset-0 bg-black/30"></div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          
          <motion.p variants={fadeUp} className="font-heading text-gold tracking-[0.3em] text-xs mb-4">
            🕉 JAI SHREE RAM 🕉
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
            Divine Handcrafted<br />
            <span className="text-gold">Idols & Murtis</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body italic text-white/70 text-lg md:text-xl mb-10">
            Bringing the blessings of the divine into your home, crafted with devotion and tradition.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link to="/products"
                className="font-heading tracking-widest text-sm bg-gradient-to-r from-saffron to-gold text-white px-8 py-3 rounded hover:brightness-110 transition-all no-underline inline-block">
                EXPLORE COLLECTION
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact"
                className="font-heading tracking-widest text-sm border-2 border-gold/50 text-gold px-8 py-3 rounded hover:bg-gold/10 transition-all no-underline inline-block">
                CONTACT US
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <motion.section
        className="bg-maroon text-white py-5 px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { icon: "🚚", text: "Free Shipping ₹999+" },
            { icon: "✅", text: "100% Authentic" },
            { icon: "🔄", text: "Easy Returns" },
            { icon: "🛡️", text: "Secure Payment" },
          ].map(({ icon, text }) => (
            <motion.div key={text} variants={fadeUp}>
              <p className="text-xl mb-1">{icon}</p>
              <p className="font-heading text-xs tracking-wider text-gold">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-xs tracking-[0.3em] text-gold mb-2">HANDPICKED FOR YOU</p>
            <h2 className="font-heading text-3xl text-maroon mb-2">Bestselling Idols</h2>
            <p className="font-body italic text-brown/50">Most loved by our devotees</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {featured.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/products"
                className="font-heading tracking-widest text-sm border-2 border-maroon text-maroon px-8 py-3 rounded hover:bg-maroon hover:text-white transition-all no-underline inline-block">
                VIEW ALL PRODUCTS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-heading text-3xl text-maroon text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Samarth Murti?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: "🏺", title: "Handcrafted", desc: "Every idol is carefully handcrafted by skilled artisans with years of experience and devotion." },
              { icon: "🌿", title: "Eco-Friendly", desc: "We use natural, sustainable materials — clay, brass, marble — safe for your home and planet." },
              { icon: "📦", title: "Safe Delivery", desc: "Carefully packed with protective cushioning to ensure your idol arrives safely and beautifully." },
            ].map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(122,28,28,0.12)" }}
                className="text-center p-8 rounded-lg border border-gold/20 bg-white transition-shadow"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
                <h3 className="font-heading text-lg text-maroon mb-3">{title}</h3>
                <p className="font-body text-brown/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <motion.section
        className="bg-gradient-to-r from-maroon to-deepmaroon py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="font-display text-2xl md:text-3xl text-gold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          🪔 Bring Divinity Home Today
        </motion.p>
        <motion.p
          className="font-body italic text-cream/60 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          Special discounts on bulk orders & festival gifting
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/contact"
            className="font-heading tracking-widest text-sm bg-gold text-brown px-8 py-3 rounded hover:brightness-110 transition-all no-underline inline-block">
            GET IN TOUCH
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}