import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    date: 'September 10, 2024',
    excerpt: 'Explore how AI is shaping the future of web development, from personalized user experiences to advanced predictive analytics.',
    image: '/assets/images/ai-web-development.jpg',
    content: 'Artificial Intelligence (AI) is transforming various sectors, and web development is no exception. With AI-driven tools, developers can now create more personalized and efficient applications. From chatbots that enhance user interactions to predictive analytics that optimize user experiences, AI offers a plethora of opportunities. In this blog post, we delve into the latest AI trends in web development, exploring how these technologies are revolutionizing the industry and what the future holds.',
  },
  {
    id: 2,
    title: 'Top 5 Frameworks for Modern Web Applications',
    date: 'August 30, 2024',
    excerpt: 'Discover the top five frameworks that are driving innovation in modern web application development.',
    image: '/assets/images/web-frameworks.jpg',
    content: 'In the ever-evolving landscape of web development, choosing the right framework is crucial. This blog post highlights the top five frameworks that are currently leading the market. From React.js, known for its flexibility and performance, to Angular with its robust structure, each framework has its strengths. We’ll also cover Vue.js, Ember.js, and Svelte, providing insights into their unique features and benefits. Whether you’re a seasoned developer or new to the field, this guide will help you make an informed choice.',
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-post-image" />
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-date">{post.date}</p>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
