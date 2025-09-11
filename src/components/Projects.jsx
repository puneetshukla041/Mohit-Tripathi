// src/components/Blog.jsx
import React from "react";
import { motion } from "framer-motion";

// This is a placeholder for your blog post data.
// All image paths now use the .jpeg file extension.
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of AI in Design",
    description: "Exploring how artificial intelligence is revolutionizing the creative process, from generating concepts to automating tasks.",
    image: "/images/blog-post-1.jpeg",
    date: "Sep 1, 2025",
  },
  {
    id: 2,
    title: "Building Scalable Web Apps with Rust",
    description: "A deep dive into why Rust is becoming a go-to language for performance-critical and secure backend systems.",
    image: "/images/blog-post-2.jpeg",
    date: "Aug 25, 2025",
  },
  {
    id: 3,
    title: "Demystifying Blockchain Technology",
    description: "Understanding the core principles of blockchain beyond cryptocurrency and its potential for various industries.",
    image: "/images/blog-post-3.jpeg",
    date: "Aug 15, 2025",
  },
  {
    id: 4,
    title: "A Guide to Modern CSS Layouts",
    description: "Mastering Flexbox and Grid to create beautiful, responsive, and maintainable user interfaces.",
    image: "/images/blog-post-4.jpeg",
    date: "Jul 30, 2025",
  },
  {
    id: 5,
    title: "Optimizing Performance in React",
    description: "Practical tips and techniques to make your React applications faster and more efficient.",
    image: "/images/blog-post-5.jpeg",
    date: "Jul 10, 2025",
  },
  {
    id: 6,
    title: "Cybersecurity Basics for Developers",
    description: "An essential guide to protecting your applications and data from common vulnerabilities and threats.",
    image: "/images/blog-post-6.jpeg",
    date: "Jun 20, 2025",
  },
  {
    id: 7,
    title: "Exploring Generative AI Art",
    description: "From Midjourney to DALL-E, we explore the world of AI-generated art and its implications for creativity.",
    image: "/images/blog-post-7.jpeg",
    date: "Jun 5, 2025",
  },
  {
    id: 8,
    title: "The Rise of Edge Computing",
    description: "How moving computation closer to the data source is changing the landscape of modern applications.",
    image: "/images/blog-post-8.jpeg",
    date: "May 25, 2025",
  },
  {
    id: 9,
    title: "Web3: A New Era of the Internet",
    description: "An introduction to the decentralized web and its potential to reshape digital ownership and online interactions.",
    image: "/images/blog-post-9.jpeg",
    date: "May 10, 2025",
  },
  {
    id: 10,
    title: "Data Science for Beginners",
    description: "A step-by-step guide to starting your journey in data science, from foundational concepts to practical tools.",
    image: "/images/blog-post-10.jpeg",
    date: "Apr 28, 2025",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {BLOG_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href="#" // Replace with a dynamic link
              className="relative rounded-3xl overflow-hidden shadow-xl group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-6 flex flex-col h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover rounded-xl mb-4"
                  // Removed fixed height to allow image to dictate card height
                />
                <div className="flex-grow flex flex-col">
                  <p className="text-xs text-neutral-400 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {post.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;