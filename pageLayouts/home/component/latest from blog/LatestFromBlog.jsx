import React from "react";
import "./lastestfromblog.scss";

import blogImage1 from "/images/7c/blog-first.jpg";
import blogImage2 from "/images/7c/blog-second.jpg";
import blogImage3 from "/images/7c/blog-third.jpg";
import Image from "next/image";

const blogs = [
  {
    date: "20",
    month: "May",
    image: blogImage1,
    title: "Elementum purus id ultrices.",
    author: "Admin",
    likes: "350",
    comments: "30",
  },
  {
    date: "20",
    month: "May",
    image: blogImage2,
    title: "Elementum purus id ultrices.",
    author: "Admin",
    likes: "350",
    comments: "30",
  },
  {
    date: "20",
    month: "May",
    image: blogImage3,
    title: "Elementum purus id ultrices.",
    author: "Admin",
    likes: "350",
    comments: "30",
  },
];

const LatestBlogs = () => {
  return (
    <div className="blog-section">
      <h2>
        Latest From <span>Blogs</span>
      </h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="image-container">
              <Image src={blog.image} alt={`Blog ${index + 1}`} />
              <div className="date-box">
                <span>{blog.date}</span>
                {blog.month}
              </div>
            </div>
            <div className="content">
              <h5 >{blog.title}</h5>
              <div className="meta">
                <div className="icon">
                  <i className="fa fa-user"></i> {blog.author}
                </div>
                <div className="icon">
                  <i className="fa fa-heart"></i> {blog.likes}
                </div>
                <div className="icon">
                  <i className="fa fa-comment"></i> {blog.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
