import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* Header */}
      {/* Header */}
      <motion.div
        className="bg-[url('../assets/product.jpg')] bg-cover bg-center py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
    
        <motion.h1
          className="font-display font-bold text-3xl md:text-5xl text-cream mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          Contect Us
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
      <div style={{fontFamily:'sans-serif'}} className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 mt-15 gap-12">
        {/* Info */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}

        >
          <motion.h2 variants={fadeUp} style={{fontFamily:'sans-serif'}} className="font-heading text-3xl font-bold text-maroon mb-4">
            We'd Love to Hear From You
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-brown/70 mb-8 leading-relaxed">
            Whether you're looking for a specific idol, want to place a bulk order, or need help choosing the right murti — we're here to help.
          </motion.p>

          <div className="flex flex-col gap-5">
            {[
              { icon: "📍", label: "Address", value: " Kachchi Chawani Taraunha Road , Karwi ,Chitrakoot Uttar Pradesh" },
              { icon: "📞", label: "Phone", value: " +91 93354 56799" },
              { icon: "✉️", label: "Email", value: "info@samardivine.com" },
             
            ].map(({ icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex gap-4 items-start"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-heading text-xs tracking-widest text-gold mb-0.5">{label.toUpperCase()}</p>
                  <p className="font-body text-brown/70">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white rounded-lg p-8  shadow-sm border border-gold/15"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.p
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
              >
                🙏
              </motion.p>
              <h3 className="font-heading text-xl font-bold text-maroon mb-2">Thank You!</h3>
              <p className="font-body italic text-brown/60">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              variants={stagger}
              initial="hidden"
              animate="show"
          style={{fontFamily:'sans-serif'}}

            >
              <motion.h3 
          style={{fontFamily:'sans-serif'}}
              
              variants={fadeUp} className="font-heading text-xl font-bold text-maroon mb-2">
                Send a Message
              </motion.h3>

              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                { name: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              ].map(({ name, label, type, placeholder }) => (
                <motion.div key={name} variants={fadeUp}>
                  <label 
          style={{fontFamily:'sans-serif'}}

                   className="font-heading text-[10px] tracking-widest text-gold font-bold block mb-1">
                    {label.toUpperCase()}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full border border-gold/25 rounded px-4 py-2.5 font-body text-brown bg-cream outline-none focus:border-maroon transition-colors"
                  />
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <label className="font-heading text-[10px] tracking-widest text-gold block mb-1">MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="w-full border border-gold/25 rounded px-4 py-2.5 font-body text-brown bg-cream outline-none focus:border-maroon transition-colors resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                variants={fadeUp}
                whileHover={{ scale: 1.02, brightness: 1.1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 bg-gradient-to-r from-saffron to-gold text-white font-heading tracking-widest text-sm rounded transition-all"
              >
                SEND MESSAGE 🙏
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </div>
  );
}