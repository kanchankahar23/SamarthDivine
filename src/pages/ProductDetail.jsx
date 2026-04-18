import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { formatPrice, getDiscount } from "../utils/formatPrice";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen bg-cream">
        <p className="text-5xl mb-4">🪔</p>
        <p className="font-body italic text-xl text-brown/60">Product not found.</p>
        <Link to="/products" className="font-heading text-sm text-maroon no-underline mt-4 inline-block">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const discount = getDiscount(product.originalPrice, product.price);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <motion.p
          className="font-body text-sm text-brown/50 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="hover:text-maroon no-underline text-brown/50">Home</Link>
          {" › "}
          <Link to="/products" className="hover:text-maroon no-underline text-brown/50">Products</Link>
          {" › "}
          <span className="text-maroon">{product.name}</span>
        </motion.p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/5]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {discount && (
              <span className="absolute top-4 right-4 bg-saffron text-white font-heading text-xs px-3 py-1 rounded">
                {discount}
              </span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            className="flex flex-col gap-4"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeUp} className="font-heading text-xs tracking-[0.2em] text-gold">
              {product.category.toUpperCase()}
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-body text-3xl text-brown leading-snug">
              {product.name}
            </motion.h1>

            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="text-saffron">
                {"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}
              </span>
              <span className="font-body text-sm text-brown/50">{product.rating} ({product.reviews} reviews)</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-baseline gap-3">
              <span className="font-heading text-3xl text-maroon">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <span className="font-body text-lg text-brown/40 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </motion.div>

            <motion.hr variants={fadeUp} className="border-gold/20" />

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              {[
                { label: "Material", value: product.material },
                { label: "Height", value: product.height },
                { label: "Category", value: product.category },
                { label: "Availability", value: product.inStock ? "In Stock ✅" : "Out of Stock ❌" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white rounded p-3 border border-gold/15">
                  <p className="font-heading text-[10px] tracking-widest text-gold mb-1">{label.toUpperCase()}</p>
                  <p className="font-body text-sm text-brown">{value}</p>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="font-body text-brown/70 leading-relaxed">
              {product.description}
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.button
                onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000); }}
                disabled={!product.inStock}
                whileHover={product.inStock ? { scale: 1.02 } : {}}
                whileTap={product.inStock ? { scale: 0.97 } : {}}
                className={`w-full py-3 px-8 rounded font-heading tracking-widest text-sm text-white transition-colors duration-300
                  ${added ? "bg-green-700" : product.inStock
                    ? "bg-gradient-to-r from-saffron to-gold"
                    : "bg-gray-300 cursor-not-allowed"}`}
              >
                {added ? "✓ ADDED TO CART" : product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
              </motion.button>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link to="/products" className="font-body italic text-sm text-maroon no-underline hover:underline">
                ← Back to all products
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl text-maroon mb-6">More in {product.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Link to={`/products/${p.id}`} className="no-underline group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <img src={p.image} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="p-4">
                        <p className="font-body text-brown">{p.name}</p>
                        <p className="font-heading text-maroon mt-1">{formatPrice(p.price)}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}