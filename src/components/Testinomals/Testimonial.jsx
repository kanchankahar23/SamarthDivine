import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    location: "Delhi, India",
    text: "Mahakal Tours made my Ujjain trip unforgettable. The spiritual vibes and well-planned itinerary were beyond expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad, India",
    text: "I felt safe and spiritually enriched. The guides were knowledgeable, and the experience was deeply personal.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Verma",
    location: "Lucknow, India",
    text: "The best pilgrimage journey I’ve ever had. The attention to detail and hospitality were top-notch.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Kavya Menon",
    location: "Kerala, India",
    text: "From the Ganga Aarti to the Jyotirlinga darshan, Mahakal Tours curated an incredible spiritual retreat.",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
            Customer Say
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="flex overflow-x-auto space-x-6 px-2 scrollbar-thin scrollbar-thumb-pink-500">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-2xl shadow-lg p-6 mb-5"
            >
              {/* Profile */}
              <div className="flex items-center space-x-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-2 border-pink-500 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-700 italic leading-relaxed">
                "{item.text}"
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}