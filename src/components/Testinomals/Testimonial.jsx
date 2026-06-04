import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    location: "Delhi, India",
    text: "The Ganesh murti I ordered from Samarth Divine is breathtaking. The craftsmanship and detailing are extraordinary — it feels like a divine presence in my home.",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Karan Patel",
    location: "Ahmedabad, India",
    text: "I gifted a Laxmi murti to my mother on Diwali. She was moved to tears by its beauty. Samarth Divine truly pours devotion into every creation.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Diya Verma",
    location: "Lucknow, India",
    text: "The Shiva idol arrived perfectly packaged and the finish is immaculate. You can feel the spiritual energy radiating from it. Truly divine craftsmanship",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Kajal tiwade",
    location: "Kerala, India",
    text: "Our pooja ghar feels complete now. The Saraswati murti is carved with such devotion and precision. Samarth Divine is our go-to for all sacred murtis",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
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
    <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-center font-bold text-maroon mb-4">
          Our Customer
        </h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-12">
           Our customers' trust and satisfaction inspire us to create beautiful handcrafted murtis that reflect devotion, culture, and timeless craftsmanship.

        </p>
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