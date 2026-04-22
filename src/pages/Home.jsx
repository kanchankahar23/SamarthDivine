import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ProductCard from "../components/product/ProductCard";
import { products } from "../data/products";
import Testimonials from "../components/Testinomals/Testimonial";
import {  Phone, CheckCircle } from "lucide-react";
import SEO from '../components/SEO'

const featured = products
  .filter((p) => p.tags?.includes("bestseller"))
  .slice(0, 4);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const [stats, setStats] = useState({
    customers: 0,
    years: 0,
    products: 0,
    rating: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        customers: 5000,
        years: 15,
        products: 50,
        rating: 4.8,
      };

      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;

      const interval = setInterval(() => {
        step++;
        const progress = step / steps;

        setStats({
          customers: Math.floor(targets.customers * progress),
          years: Math.floor(targets.years * progress),
          products: Math.floor(targets.products * progress),
          rating: Math.round(targets.rating * progress * 10) / 10,
        });

        if (step >= steps) {
          clearInterval(interval);
          setStats(targets);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <>

        <SEO
      title="Handcrafted Divine Murtis & Idols"
      description="Buy authentic handcrafted Hindu murtis online — Ganesha, Ram, Krishna, Durga and more. Free delivery across India."
      url="/"
    />
      {/* HERO */}
      <section className="min-h-screen bg-[url('../assets/bg.jpg')] bg-cover bg-center flex items-center justify-center text-center px-6 pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-black/30"></div>

        <motion.div
          className="relative z-10 max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="inline-block px-4 py-2 mb-5 font-bold text-sm tracking-[0.2em]
            bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full"
          >
            🕉 JAI SHREE RAM 🕉
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Divine Handcrafted <br />
            <span className="text-gold">Idols & Murtis</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/80 text-lg mb-10"
          >
            Bringing the blessings of the divine into your home.
          </motion.p>
        </motion.div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mt-10">
          <h2 className="text-5xl font-bold text-maroon mb-4">
            Why Samar Divine?
          </h2>

          <p className="text-zinc-600 max-w-2xl mx-auto mb-12">
            We blend traditional craftsmanship with premium quality to create
            murtis that reflect devotion and elegance.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-pink-600">
                {stats.customers.toLocaleString()}+
              </h3>
              <p className="text-zinc-600">Happy Customers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-pink-600">
                {stats.years}+
              </h3>
              <p className="text-zinc-600">Years Experience</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-pink-600">
                {stats.products}+
              </h3>
              <p className="text-zinc-600">Products</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-pink-600 flex items-center justify-center">
                <Star className="w-6 h-6 mr-1 fill-pink-600" />
                {stats.rating}
              </h3>
              <p className="text-zinc-600">Rating</p>
            </div>
          </div>

          {/* FEATURES */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
          >
            {[
              { icon: "🏺", title: "Handcrafted", desc: "Every idol is carefully handcrafted by skilled artisans with years of experience and devotion." }, { icon: "🌿", title: "Eco-Friendly", desc: "We use natural, sustainable materials — clay, brass, marble — safe for your home and planet." }, { icon: "📦", title: "Safe Delivery", desc: "Carefully packed with protective cushioning to ensure your idol arrives safely and beautifully." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 border rounded-xl border border-zinc-200 shadow-sm hover:shadow-xl"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-maroon">{item.title}</h3>
                <p className="text-zinc-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-maroon mb-4">
            Our Work
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto mb-12">
            Explore our collection of handcrafted murtis, created with precision, devotion, and artistic excellence to bring divine beauty into every space.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <Link
            to="/products"
            className="inline-block mt-10 border border-maroon px-6 py-2 text-maroon hover:bg-maroon hover:text-white"
          >
            View All
          </Link>
        </div>
      </section>

      {/* testimonial */}
      <Testimonials />

     
    </>



  );
}