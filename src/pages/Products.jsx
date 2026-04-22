import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductFilter from "../components/product/ProductFilter";
import ProductList from "../components/product/ProductList";

import { useProducts } from "../hooks/useProducts";

export default function Products() {
  const [searchParams] = useSearchParams();
  const { products, selectedCategory, setSelectedCategory, sortBy, setSortBy, setSearchQuery, total } = useProducts();

  useEffect(() => {
    const q = searchParams.get("q");
    const cat = searchParams.get("category");
    if (q) setSearchQuery(q);
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* Header */}
        <motion.div
            className="bg-[url('../assets/product.jpg')] bg-cover bg-center py-16 px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="font-heading text-sm tracking-[0.3em] text-pink-700 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              OUR STORY
            </motion.p>
            <motion.h1
              className="font-display font-bold text-3xl md:text-5xl text-cream mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              About Samar Divine
            </motion.h1>
            <motion.p
              className="font-body italic text-cream/60 text-lg max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Crafting divine connections between devotees and the sacred since 2008
            </motion.p>
          </motion.div>
    
      <div className="max-w-6xl mx-auto px-6 mt-10 pb-20">
        <ProductFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          total={total}
        />
        <ProductList products={products} />
      </div>
    </div>
  );
}