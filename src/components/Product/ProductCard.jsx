import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatPrice, getDiscount } from "../../utils/formatPrice";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const discount = getDiscount(product.originalPrice, product.price);

  const handleAdd = (e) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link to={`/products/${product.id}`} className="no-underline group">
      <motion.article
        className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full border border-gold/10"
        whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(122,28,28,0.15)" }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5]">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.tags?.includes("bestseller") && (
              <motion.span
                className="bg-maroon text-cream text-[10px] font-heading tracking-wider px-2 py-0.5 rounded-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                BESTSELLER
              </motion.span>
            )}
            {product.tags?.includes("new") && (
              <motion.span
                className="bg-green-800 text-cream text-[10px] font-heading tracking-wider px-2 py-0.5 rounded-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                NEW
              </motion.span>
            )}
            {product.tags?.includes("premium") && (
              <motion.span
                className="bg-brown text-cream text-[10px] font-heading tracking-wider px-2 py-0.5 rounded-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                PREMIUM
              </motion.span>
            )}
          </div>

          {discount && (
            <span className="absolute top-2 right-2 bg-saffron text-white text-[10px] font-heading px-2 py-0.5 rounded-sm">
              {discount}
            </span>
          )}

          {!product.inStock && (
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="bg-maroon text-cream text-xs font-heading tracking-widest px-4 py-1.5 rounded">
                OUT OF STOCK
              </span>
            </motion.div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col gap-1.5 flex-1">
          <p className="font-medium text-[14px] tracking-widest text-gold">{product.category.toUpperCase()}</p>
          <h3 className="font-body text-lg font-bold text-maroon leading-snug">{product.name}</h3>
          <p className="text-xs text-brown/60 font-body">{product.material} · {product.height}</p>

          <div className="flex items-center gap-1.5">
            <span className="text-saffron text-sm">
              {"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span className="text-xs text-brown/50 font-body">{product.rating} ({product.reviews})</span>
          </div>

          <div className="flex items-baseline gap-2 mt-auto pt-2">
            <span className="font-heading text-lg text-maroon font-semibold">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-brown/40 line-through font-body">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          <motion.button
            onClick={handleAdd}
            disabled={!product.inStock}
            whileTap={product.inStock ? { scale: 0.96 } : {}}
            whileHover={product.inStock ? { brightness: 1.1 } : {}}
            className={`mt-2 w-full py-2 rounded font-medium text-xs tracking-widest text-white transition-colors duration-300
              ${added ? "bg-green-700" : product.inStock
                ? "bg-[#FF0066]"
                : "bg-gray-300 cursor-not-allowed"}`}
          >
            {added ? "✓ ADDED TO CART" : product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
          </motion.button>
        </div>
      </motion.article>
    </Link>
  );
}