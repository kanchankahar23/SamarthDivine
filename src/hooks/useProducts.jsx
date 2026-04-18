import { useState, useMemo } from "react";
import { products } from "../data/products";

export function useProducts(initialSearch = "") {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All")
      result = result.filter((p) => p.category === selectedCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "popular": result.sort((a, b) => b.reviews - a.reviews); break;
    }

    return result;
  }, [selectedCategory, sortBy, searchQuery]);

  return { products: filtered, selectedCategory, setSelectedCategory, sortBy, setSortBy, searchQuery, setSearchQuery, total: filtered.length };
}