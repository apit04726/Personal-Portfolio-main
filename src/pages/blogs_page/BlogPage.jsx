import React, { useState } from "react";
import Particle from "../../Particle";
import Zoom from "react-reveal/Zoom";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendar, FaUser, FaClock, FaHeart, FaComment, FaShare, FaBookmark, } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

// Blog images
import kasturi from "../../images/kasturi_jpg.jpeg";
import nikkoo from "../../images/nikko-home22.jpeg";
import nikko from "../../images/nikko-garden.jpeg";
import jkCapinvest from "../../images/jk-.jpeg";
import mrFish from "../../images/mr-fish.jpg";
import ammPro from "../../images/Amm-pro.jpg";

const blogPosts = [
  {
    id: 1,
    image: kasturi,
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt: "Deep dive into React Hooks and how they revolutionize functional components with practical examples and best practices.",
    content: "React Hooks have completely transformed how we write React components. In this comprehensive guide, we'll explore useState, useEffect, useContext, and custom hooks. Learn how to manage state, handle side effects, and share logic across your application with real-world examples and performance optimization techniques. React Hooks have completely transformed how we write React components. In this comprehensive guide, we'll explore useState, useEffect, useContext, and custom hooks. Learn how to manage state, handle side effects, and share logic across your application with real-world examples and performance optimization techniques. React Hooks have completely transformed how we write React components. In this comprehensive guide, we'll explore useState, useEffect, useContext, and custom hooks. Learn how to manage state, handle side effects, and share logic across your application with real-world examples and performance optimization techniques.    React Hooks have completely transformed how we write React components. In this comprehensive guide, we'll explore useState, useEffect, useContext, and custom hooks. Learn how to manage state, handle side effects, and share logic across your application with real-world examples and performance optimization techniques.    React Hooks have completely transformed how we write React components. In this comprehensive guide, we'll explore useState, useEffect, useContext, and custom hooks. Learn how to manage state, handle side effects, and share logic across your application with real-world examples and performance optimization techniques.     React Hooks have completely transformed how we write React components. In this comprehensive guide, we'll explore useState, useEffect, useContext, and custom hooks. Learn how to manage state, handle side effects, and share logic across your application with real-world examples and performance optimization techniques.",

    author: "John Developer",
    date: "15 March, 2024",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Hooks"],
    likes: 42,
    comments: 12,
    featured: true,
    trending: true
  },
  {
    id: 2,
    image: nikkoo,
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "Understanding the differences between CSS Grid and Flexbox with practical layout examples and use cases.",
    content: "CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Grid is perfect for two-dimensional layouts, while Flexbox excels at one-dimensional layouts. We'll explore real-world examples, browser support, and when to choose one over the other for optimal results.",
    author: "Sarah Designer",
    date: "12 March, 2024",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Web Design"],
    likes: 38,
    comments: 8,
    featured: true,
    trending: false
  },
  {
    id: 3,
    image: nikko,
    title: "JavaScript Performance Optimization Techniques",
    excerpt: "Advanced techniques to optimize your JavaScript code for better performance and user experience.",
    content: "Performance is crucial for modern web applications. Learn about debouncing, throttling, memoization, code splitting, and other advanced techniques to make your JavaScript applications faster and more efficient. We'll cover both theoretical concepts and practical implementations.",
    author: "Mike Engineer",
    date: "10 March, 2024",
    readTime: "10 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Performance", "Optimization"],
    likes: 56,
    comments: 15,
    featured: false,
    trending: true
  },
  {
    id: 4,
    image: jkCapinvest,
    title: "Building Scalable React Applications",
    excerpt: "Architectural patterns and best practices for building large-scale React applications that stand the test of time.",
    content: "Scaling React applications requires careful planning and architecture. Learn about component composition, state management strategies, folder structure, testing approaches, and deployment strategies for enterprise-level applications. We'll discuss Redux, Context API, and modern state management solutions.",
    author: "John Developer",
    date: "8 March, 2024",
    readTime: "12 min read",
    category: "React",
    tags: ["React", "Architecture", "Scalability"],
    likes: 34,
    comments: 7,
    featured: false,
    trending: false
  },
  {
    id: 5,
    image: mrFish,
    title: "Modern Web Security Best Practices",
    excerpt: "Essential security practices every web developer should implement in 2024.",
    content: "Web security is more important than ever. This guide covers HTTPS, CORS, Content Security Policy, authentication best practices, and common vulnerabilities like XSS and CSRF. Learn how to protect your applications and users with practical security implementations.",
    author: "Alex Security",
    date: "5 March, 2024",
    readTime: "9 min read",
    category: "Security",
    tags: ["Security", "Web", "Best Practices"],
    likes: 29,
    comments: 5,
    featured: false,
    trending: true
  },
  {
    id: 6,
    image: ammPro,
    title: "TypeScript for React Developers",
    excerpt: "Transition from JavaScript to TypeScript in React projects with confidence and best practices.",
    content: "TypeScript brings type safety and better developer experience to React applications. Learn how to type components, hooks, props, and state effectively. We'll cover advanced patterns, third-party library integration, and migration strategies from existing JavaScript codebases.",
    author: "Emma TypeScript",
    date: "3 March, 2024",
    readTime: "11 min read",
    category: "TypeScript",
    tags: ["TypeScript", "React", "JavaScript"],
    likes: 47,
    comments: 11,
    featured: true,
    trending: false
  }
];

const BlogCard = ({ post, onReadMore }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mb-4">
      <div className="blog-card">
        {/* Featured/Trending Badges */}
        <div className="blog-badges">
          {post.featured && <span className="badge featured">Featured</span>}
          {post.trending && <span className="badge trending">Trending</span>}
        </div>

        {/* Blog Image */}
        <div className="blog-image">
          <img
            src={post.image}
            alt={post.title}
            onError={(e) => {
              e.target.src = `https://picsum.photos/400/250?random=${post.id}`;
            }}
          />
          <div className="image-overlay">
            {/* <span className="category-tag">{post.category}</span> */}
          </div>
        </div>

        {/* Blog Content */}
        <div className="blog-content">
          {/* Meta Information */}
          <div className="blog-meta">
            <div className="meta-item">
              <FaUser className="meta-icon" />
              <span>{post.author}</span>
            </div>
            <div className="meta-item">
              <FaCalendar className="meta-icon" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="blog-title">{post.title}</h3>

          {/* Excerpt */}
          <p className="blog-excerpt">{post.excerpt}</p>

          {/* Tags */}
          <div className="blog-tags">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
            {post.tags.length > 2 && (
              <span className="tag-more">+{post.tags.length - 2}</span>
            )}
          </div>

          {/* Actions */}
          <div className="blog-actions">
            <div className="action-left">
              <button
                className={`action-btn like-btn ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
              >
                <FaHeart />
                <span>{post.likes + (isLiked ? 1 : 0)}</span>
              </button>
              <button className="action-btn comment-btn">
                <FaComment />
                <span>{post.comments}</span>
              </button>
            </div>
            <div className="action-right">
              <button
                className="read-more-btn"
                onClick={() => onReadMore(post)}
              >
                Read More
                <HiArrowRight className="viewArr" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = filter === 'all' ||
      (filter === 'featured' && post.featured) ||
      (filter === 'trending' && post.trending) ||
      post.category.toLowerCase() === filter.toLowerCase();

    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section className="home-section">
      <Particle />
      <Container fluid id="home">
        {/* Header Section */}
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>BLOGS</h1>
            </Zoom>
          </div>
        </Container>

        {/* Blog Grid */}
        <Container className="mt-3">
          <Row className="blog-grid">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} onReadMore={handleReadMore} />
            ))}
          </Row>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <h3>No blog posts found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </Container>
      </Container>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="blog-post-modal-overlay" onClick={closeModal}>
          <div className="blog-post-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>

            <div className="modal-image">
              <img src={selectedPost.image} alt={selectedPost.title} />
              <div className="image-overlay">
                {/* <span className="category-tag">{selectedPost.category}</span> */}
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-meta">
                <div className="meta-item-modal">
                  <FaUser className="meta-icon-modal" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="meta-item-modal">
                  <FaCalendar className="meta-icon-modal" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="meta-item-modal">
                  <FaClock className="meta-icon-modal" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <h2 className="modal-title">{selectedPost.title}</h2>

              <div className="modal-tags">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="tag-modal">{tag}</span>
                ))}
              </div>

              <div className="modal-body">
                <div className="modal-body-content">
                  <p>{selectedPost.content}</p>
                </div>

                <div className="modal-actions">
                  <button className="action-btn-modal">
                    <FaHeart />
                    <span>Like</span>
                  </button>
                  <button className="action-btn-modal">
                    <FaComment />
                    <span>Comment</span>
                  </button>
                  <button className="action-btn-modal">
                    <FaShare />
                    <span>Share</span>
                  </button>
                  <button className="action-btn-modal">
                    <FaBookmark />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .blog-card {
          padding: 20px 15px !important;
          width: 100% !important;
          min-width: 280px !important;
          max-width: 100% !important;
          height: auto !important;
          min-height: 480px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: center !important;
          background: #1f0060 !important;
          border-radius: 16px !important;
          box-shadow: 0 3px 12px 2px rgba(145, 77, 161, 0.25) !important;
          margin: 0 auto 20px auto !important;
          overflow: hidden !important;
        }
        
        .blog-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #8e46ba 0%, #b061df 100%);
          position: relative;
          padding: 20px 0;
        }

        .blog-header {
          text-align: center;
          padding: 30px 0 20px;
          color: #fbd9ad;
        }

        .main-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight {
          background: linear-gradient(135deg, #fbd9ad, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1rem;
          opacity: 0.9;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 300px;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          font-size: 0.9rem;
        }

        .search-input {
          width: 100%;
          padding: 10px 15px 10px 35px;
          border: none;
          border-radius: 20px;
          background: white;
          font-size: 0.9rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(-1px);
        }

        .filter-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 0.85rem;
          backdrop-filter: blur(10px);
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: white;
          color: #8e46ba;
          border-color: white;
          transform: translateY(-2px);
        }

        .blog-grid {
          margin: 0 -8px;
        }

        .blog-card {
          background-color: rgba(142, 70, 186, 0.31) !important;
          color: #fbd9ad;
          border: 1px solid;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .blog-badges {
          position: absolute;
          top: 22px;
          left: 18px;
          z-index: 2;
          display: flex;
          gap: 6px;
        }

        .badge {
          padding: 4px 8px;
          border-radius: 10px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .badge.featured {
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
          color: white;
        }

        .badge.trending {
          background: linear-gradient(135deg, #feca57, #ff9ff3);
          color: white;
        }

        .blog-image {
          position: relative;
          height: 160px;
          overflow: hidden;
          width: 100%;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 12px;
        }

        // .category-tag {
        //   background: rgba(142, 70, 186, 0.9);
        //   color: white;
        //   padding: 4px 10px;
        //   border-radius: 10px;
        //   font-size: 0.7rem;
        //   font-weight: 600;
        // }

        .blog-content {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .blog-meta {
          display: flex;
          
          gap: 10px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
.meta-item {
  display: flex;
  align-items: center; 
  gap: 6px;              
  color: #fbd9ad;
font-size: 15px;}

.meta-item i {
  font-size: 14px;
  display: inline-block;
}


.meta-item-modal {
 display: flex;
  align-items: center; 
  gap: 6px;              
  color: rgb(176, 97, 223);
  font-size: 14px;
}

.meta-item-modal i {
  font-size: 1rem;       /* adjust icon size */
  display: inline-block;
}



        .meta-icon {
          font-size: 0.7rem;
          color: #fbd9ad;
        }

        .meta-icon-modal {
        font-size: 0.7rem;
          color: rgb(176, 97, 223);
        }
        .blog-title {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #fbd9ad;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 2.6em;
          text-align: left !important;
          font-family: var(--primaryFont);

        }

        .blog-excerpt {
          color: #fbd9ad;
          margin-bottom: 12px;
          line-height: 1.5;
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
          min-height: 3.6em;
          text-align: justify !important;
        }

        .blog-tags {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .tag {
          background: rgba(142, 70, 186, 0.1);
          color: #fbd9ad;
          padding: 3px 8px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid  #fbd9ad;
        }

          .tag-modal {
            background: rgba(142, 70, 186, 0.1);
            color: rgb(176, 97, 223);
            padding: 3px 8px;
            border-radius: 8px;
            font-size: 0.65rem;
            font-weight: 600;
            border: 1px solid rgb(176, 97, 223);
          }

        .tag-more {
          background: rgba(107, 114, 128, 0.1);
          color: #fbd9ad;
          padding: 3px 8px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
        }

        .blog-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid rgba(251, 217, 173, 0.3);
          width: 100%;
        }

        .action-left {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .action-right {
          display: flex;
          align-items: center;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: #fbd9ad;
          cursor: pointer;
          padding: 5px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-size: 13px;
        }

        .action-btn:hover {
          background: #6d20c5d7 !important; 
        }

        .action-btn-modal {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color:  #6d20c5d7;
          cursor: pointer;
          padding: 5px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-size: 0.75rem;
        }
          .action-btn-modal:hover {
          background: #fbd9ad !important; 
        }

        

        .like-btn.liked {
          color: #ff6b6b;
        }

        .read-more-btn {
          background: linear-gradient(135deg, #8e46ba, #b061df);
          color: #fbd9ad;
          border: none;
          padding: 1px 8px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .read-more-btn:hover {
          background: #6d20c5d7 !important; 
        }

        /* Modal Styles */
        .blog-post-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 15px;
        }

        .blog-post-modal-content {
          background: white;
          border-radius: 16px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
        }

        .close-modal {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-image {
          position: relative;
          height: 200px;
          flex-shrink: 0;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-content {
          padding: 20px;
          // background: rgb(251, 217, 173);
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .modal-meta {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .modal-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: rgb(176, 97, 223);
          line-height: 1.3;
          text-align: left !important; 
        }

        .modal-tags {
          display: flex;
          gap: 6px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .modal-body {
          line-height: 1.6;
          color: #555;
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .modal-body-content {
          flex: 1;
          overflow-y: auto;
          max-height: 300px;
          padding-right: 10px;
          text-align: justify;
          scrollbar-width: thin;
          scrollbar-color: #c7a4de transparent;
        }

        .modal-body-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-body-content::-webkit-scrollbar-track {
          background: rgba(176, 97, 223, 0.1);
          border-radius: 3px;
        }

        .modal-body-content::-webkit-scrollbar-thumb {
          background: rgba(176, 97, 223, 0.5);
          border-radius: 3px;
        }

        .modal-body-content::-webkit-scrollbar-thumb:hover {
          background: rgba(176, 97, 223, 0.7);
        }

        .modal-body-content p {
          margin-bottom: 15px;
          font-size: 0.9rem;
          color: rgb(176, 97, 223);
          line-height: 1.6;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
          padding-top: 15px;
          border-top: 1px solid #e9ecef;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        .no-posts {
          text-align: center;
          padding: 40px 15px;
          color: white;
        }

        .no-posts h3 {
          margin-bottom: 10px;
          font-size: 1.2rem;
        }

        /* Mobile-First Responsive Design */
        @media (max-width: 480px) {
          .blog-card {
            padding: 15px 10px !important;
            min-height: 420px !important;
            margin: 0 auto 15px auto !important;
            border-radius: 12px !important;
          }

          .blog-image {
            height: 140px;
          }

          .blog-content {
            padding: 12px 8px;
          }

          .blog-meta {
            gap: 8px;
            margin-bottom: 8px;
          }

          .meta-item {
            font-size: 0.7rem;
          }

           .meta-item-modal {
            font-size: 0.7rem;
          }

          .blog-title {
            font-size: 0.9rem;
            min-height: 2.4em;
          }

          .blog-excerpt {
            font-size: 0.75rem;
            min-height: 3.3em;
          }

          .blog-actions {
            flex-direction: column;
            gap: 8px;
            align-items: stretch;
          }

          .action-left {
            justify-content: center;
            width: 100%;
          }

          .action-btn {
            flex: 1;
            justify-content: center;
            padding: 6px 4px;
            font-size: 0.7rem;
          }

          .action-btn-modal{
          flex: 1;
            justify-content: center;
            padding: 6px 4px;
            font-size: 0.7rem;
          }

          .read-more-btn {
            width: 100%;
            justify-content: center;
            padding: 8px 12px;
            font-size: 0.8rem;
          }

          .blog-tags {
            // justify-content: center;
          }

          .tag {
            font-size: 0.6rem;
            padding: 2px 6px;
          }

          /* Modal Mobile Styles */
          .blog-post-modal-overlay {
            padding: 10px;
          }

          .blog-post-modal-content {
            max-height: 95vh;
            border-radius: 12px;
            margin-top: 73px;
          }

          .modal-image {
            height: 150px;
          }

          .modal-content {
            padding: 15px;
          }

          .modal-meta {
            // flex-direction: column;
            gap: 7px;
          }

          .modal-title {
            font-size: 1.1rem;
          }

          .modal-tags {
            // justify-content: center;
          }

          .modal-body-content {
            max-height: 200px;
          }

          .modal-body-content p {
            font-size: 0.85rem;
          }

          .modal-actions {
            gap: 0px;
            justify-content: center;
            width: 107%;
            margin-left: -16px;
          }

          .action-btn {
            flex: 1;
            min-width: 80px;
            justify-content: center;
            font-size: 0.7rem;
          }

          .action-btn-modal {
          flex: 1;
            min-width: 80px;
            justify-content: center;
            font-size: 0.7rem;
          }
        }

        @media (max-width: 360px) {
          .blog-card {
            padding: 12px 8px !important;
            min-height: 400px !important;
            margin: 0 5px 12px 5px !important;
          }

          .blog-image {
            height: 120px;
          }

          .blog-title {
            font-size: 0.85rem;
          }

          .blog-excerpt {
            font-size: 0.7rem;
          }

          .action-btn {
            padding: 4px 3px;
            font-size: 0.65rem;
          }
          
          .action-btn-modal {
            padding: 4px 3px;
            font-size: 0.65rem;
          }

          .read-more-btn {
            padding: 7px 10px;
            font-size: 0.75rem;
          }

          .modal-image {
            height: 130px;
          }

          .modal-content {
            padding: 12px;
          }

          .modal-title {
            font-size: 1rem;
          }

          .modal-body-content {
            max-height: 180px;
          }

          .modal-body-content p {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 320px) {
          .blog-card {
            min-height: 380px !important;
            padding: 10px 6px !important;
          }

          .blog-image {
            height: 110px;
          }

          .blog-content {
            padding: 10px 5px;
          }

          .blog-title {
            font-size: 0.8rem;
          }

          .blog-excerpt {
            font-size: 0.68rem;
          }

          .action-btn {
            font-size: 0.6rem;
          }
          .action-btn-modal {
            font-size: 0.6rem;
          }

          .read-more-btn {
            font-size: 0.7rem;
          }

          .modal-body-content {
            max-height: 150px;
          }
        }

        /* Tablet and Larger Mobile Adjustments */
        @media (min-width: 481px) and (max-width: 768px) {
          .blog-card {
            padding: 18px 12px !important;
            min-height: 460px !important;
          }
          
          .blog-image {
            height: 150px;
          }

          .blog-title {
            font-size: 0.95rem;
          }

          .blog-excerpt {
            font-size: 0.78rem;
          }

          .modal-title {
            font-size: 1.3rem;
          }

          .modal-content {
            padding: 18px;
          }

          .modal-image {
            height: 180px;
          }

          .modal-body-content {
            max-height: 250px;
          }
        }

        @media (min-width: 769px) and (max-width: 992px) {
          .blog-card {
            min-height: 480px !important;
          }
          
          .blog-image {
            height: 160px;
          }
        }

        @media (min-width: 1200px) {
          .blog-card {
            padding: 20px 15px !important;
          }
        }
      `}</style>
    </section>
  );
}