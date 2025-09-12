// src/components/Blog.jsx
import React from "react";
import { motion } from "framer-motion";

// All image paths now use the .jpeg file extension.
const BLOG_POSTS = [
  {
    id: 1,
    image: "/images/blog-post-1.jpeg",
  },
  {
    id: 2,
    image: "/images/blog-post-2.jpeg",
  },
  {
    id: 3,
    image: "/images/blog-post-3.jpeg",
  },
  {
    id: 4,
    image: "/images/blog-post-4.jpeg",
  },
  {
    id: 5,
    image: "/images/blog-post-5.jpeg",
  },
  {
    id: 6,
    image: "/images/blog-post-6.jpeg",
  },
  {
    id: 7,
    image: "/images/blog-post-7.jpeg",
  },
  {
    id: 8,
    image: "/images/blog-post-8.jpeg",
  },
  {
    id: 9,
    image: "/images/blog-post-9.jpeg",
  },
  {
    id: 10,
    image: "/images/blog-post-10.jpeg",
  },
];

// Staggered animation for the container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation for each blog post card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Blog = () => {
  return (
    <div className="min-h-screen px-4 py-20 text-neutral-200 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="my-10 text-4xl font-bold text-center text-white sm:text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Blog
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" // Removed gap
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {BLOG_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href="#" // Replace with a dynamic link
              className="relative overflow-hidden group transition-all duration-300 transform hover:-translate-y-2" // Removed rounded-3xl, border, and shadow classes
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={post.image}
                alt={`Blog post ${post.id}`}
                className="w-full h-auto object-cover" // Ensures image fills container without fixed dimensions
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;