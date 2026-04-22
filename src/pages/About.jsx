import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutperson from '../assets/aboutperson.jpg'
import artist from '../assets/artist.jpeg'
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { value: "5000+", label: "Happy Customers" },
  { value: "200+", label: "Idol Designs" },
  { value: "15+", label: "Years of Craft" },
  { value: "98%", label: "Satisfaction Rate" },
];

const team = [
  { name: "Shaligram Bauriya", role: "Master Craftsman", exp: "20 years experience" },
  { name: "Shaurya Bauriya", role: "Clay & Color Artist", exp: "5 years experience" },
  { name: "Samar Bauriya", role: "Brass & Metal Work", exp: "8 years experience" },
];

const values = [
  { icon: "🙏", title: "Made with Devotion", desc: "Every idol is crafted with prayer and intention. Our artisans begin each piece with a puja, infusing spiritual energy into every creation." },
  { icon: "🌿", title: "Eco-Friendly Materials", desc: "We use natural clay, ethically sourced brass, marble, and non-toxic paints — safe for your home, family, and the environment." },
  { icon: "🏺", title: "Traditional Techniques", desc: "Rooted in centuries-old Indian craftsmanship, our methods are passed down through generations of skilled artisan families." },
  { icon: "🤝", title: "Artisan Community", desc: "We directly support over 50 artisan families across Madhya Pradesh, ensuring fair wages and preserving indigenous art forms." },
];

const process = [
  { step: "01", icon: "🪨", title: "Select Material", desc: "We handpick the finest clay, brass, marble, and stone from trusted local sources." },
  { step: "02", icon: "🖐️", title: "Hand Sculpt", desc: "Skilled artisans shape each idol by hand using traditional tools and techniques." },
  { step: "03", icon: "🎨", title: "Paint & Finish", desc: "Natural, non-toxic colors are applied with fine brushes, layer by layer with care." },
  { step: "04", icon: "🙏", title: "Bless & Pack", desc: "Each idol is blessed with a small puja before being carefully packed for delivery." },
];

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-cream">

      {/* Hero Header */}
      <motion.div
        className="bg-[url('../assets/about-bg.jpg')] bg-cover bg-center py-16 px-6 text-center"
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

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-xl aspect-square bg-[url(../assets/aboutperson.jpg)]  bg-cover bg-center  flex items-center justify-center border border-gold/20"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-center">
            <motion.p
              className="text-8xl mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >

            </motion.p>

          </div>
          <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-gold/40" />
          <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-gold/40" />
          <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-gold/40" />
          <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-gold/40" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} className="font-heading text-sm font-bold  tracking-[0.25em] text-zinc-800  mb-3">
            WHO WE ARE
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-body font-bold text-3xl text-maroon mb-5 leading-snug">
            A Family of Devoted Artisans from Chitrakoot
          </motion.h2>
          <div className="flex flex-col gap-4 font-body text-brown/70 leading-relaxed">
            {[
              "Samar Divine was established in 2008 in the spiritually sacred town of Chitrakoot — a place known for its deep connection with Lord Rama and timeless devotion.",
              "What began as a small traditional workshop by the Bauriya family, led by master craftsman Shaligram Bauriya, has grown into a trusted name for handcrafted divine idols cherished by devotees across India.",
              "From hand-painted clay idols to finely finished brass sculptures, every creation reflects the essence of traditional Indian artistry. Each piece is carefully crafted by skilled artisans of the Bauriya family, carrying forward generations of devotion, culture, and craftsmanship.",
              "At Samar Divine, every murti is not just made — it is created with devotion, preserved with tradition, and delivered with faith. 🕉️"
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp}>{text}</motion.p>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Values */}
      <section style={{ fontFamily: "sans-serif" }} className="py-20 px-6 bg-white ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontFamily: "sans-serif" }} className="text-sm font-semibold tracking-[0.3em] text-gold mb-2">
              WHAT DRIVES US
            </p>
            <h2 style={{ fontFamily: "sans-serif" }} className="font-heading font-bold text-5xl text-maroon">Our Core Values</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ fontFamily: "sans-serif" }}
          >
            {values.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(122,28,28,0.12)" }}
                style={{ fontFamily: "sans-serif" }}
                className="p-6 rounded-lg border border-gold/20 bg-cream text-center cursor-default"
              >
                <motion.p
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.p>
                <h3 className="font-heading text-xl font-bold text-maroon mb-3">{title}</h3>
                <p className="font-body text-sm text-brown/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "sans-serif" }}
          >
            <p style={{ fontFamily: "sans-serif" }} className="font-heading text-sm font-semibold tracking-[0.3em] text-gold mb-2">HOW WE WORK</p>
            <h2 style={{ fontFamily: "sans-serif" }} className="font-heading font-bold text-5xl text-maroon">Our Crafting Process</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 mt-20 md:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {process.map(({ step, icon, title, desc }) => (
              <motion.div
                key={step}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                style={{ fontFamily: "sans-serif" }}
                className="relative text-center p-8  bg-white rounded-lg border border-gold/15 shadow-sm"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-maroon text-white font-heading text-sm px-3 py-1 rounded-full tracking-widest">
                  {step}
                </span>
                <motion.p
                  className="text-4xl mt-3 mb-3"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.p>
                <h3 style={{ fontFamily: "sans-serif" }} className="font-heading text-2xl font-semibold text-maroon mb-2">{title}</h3>
                <p className="font-body text-sm text-brown/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "sans-serif" }}
          >
            <p style={{ fontFamily: "sans-serif" }} className="font-heading text-sm tracking-[0.3em] text-gold mb-2">THE PEOPLE BEHIND</p>
            <h2 style={{ fontFamily: "sans-serif" }} className="font-heading text-5xl font-bold mt-5 text-maroon">Meet Our Artisans</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            style={{ fontFamily: "sans-serif" }}
            viewport={{ once: true }}
          >
            {team.map(({ name, role, exp }) => (
              <motion.div
                key={name}
                            style={{ fontFamily: "sans-serif" }}

                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(122,28,28,0.12)" }}
                className="text-center p-8 rounded-lg border border-gold/20 bg-cream"
              >
             <motion.div
  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-maroon/20 to-gold/20 flex items-center justify-center text-4xl border-2 border-gold/30 overflow-hidden"
  whileHover={{ scale: 1.1, rotate: 3 }}
  transition={{ type: "spring", stiffness: 250 }}
>
  <img src={artist} alt="Artist" className="w-full h-full object-cover" />
</motion.div >
                <h3 className="font-heading text-2xl font-semibold text-maroon mb-1">{name}</h3>
                <p className="font-body italic text-gold text-sm mb-1">{role}</p>
                <p className="font-heading text-[10px] tracking-widest text-brown/40">{exp.toUpperCase()}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}