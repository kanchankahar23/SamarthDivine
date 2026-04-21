import React from "react";
import { motion } from "framer-motion";
import { categories } from "../../data/products";

export default function ProductFilter({ selectedCategory, setSelectedCategory, sortBy, setSortBy, total }) {
  return (
    <motion.div
      className="flex flex-wrap items-center justify-between gap-3 mb-8 bg-white px-5 py-4 rounded-lg border border-gold/20 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap gap-2">
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1.5 rounded-full text-xs font-heading tracking-wider border transition-all duration-200
              ${selectedCategory === cat
                ? "bg-maroon text-cream border-maroon"
                : "bg-transparent text-brown border-gold/30 hover:border-maroon hover:text-maroon"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <motion.span
          className="font-body italic text-sm text-brown/50"
          key={total}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {total} items
        </motion.span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="font-heading text-xs text-brown bg-cream border border-gold/30 rounded px-3 py-1.5 outline-none cursor-pointer"
        >
          <option value="default">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </motion.div>
  );
}