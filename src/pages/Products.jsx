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
        className="bg-gradient-to-r from-deepmaroon to-maroon py-14 px-6 text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="font-heading text-xs tracking-[0.3em] text-gold mb-2"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          OUR COLLECTION
        </motion.p>
        <motion.h1
          className="font-display text-3xl md:text-4xl text-cream"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          All Idols & Murtis
        </motion.h1>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
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