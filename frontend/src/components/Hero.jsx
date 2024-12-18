import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import "./Hero.css";
function Hero() {
  return (
    <>
      <section>
        <div className="hero-section">
          <h6>Image</h6>

          <h1>
            Write to inspire, read to grow, and create to leave your mark.
          </h1>
          <h6>Over 1,000 inspiring blogs to explore!</h6>
          <input
            type="text"
            placeholder="Search for blogs, topics, or authors..."
          />
          <div className="link">
            <a href="#">Tech</a>
            <a href="#">LifeStyle</a>
            <a href="#">Travel</a>
            <a href="#">Health</a>
          </div>
        </div>
      </section>

      <section>
        <div className="featured-section">
          <h1>Featured Blogs</h1>
          <div className="blog-cards">
            {/* minimum 6 card in 1 row 3 cards */}
            <div className="card">
              {/* <img src="" alt="" /> */}
              <h1>Blog Thumbnail</h1>
              <div className="blog-details">
                <h1>Title</h1>
                <p>Descriptio</p>
                <a href="#">Author</a>
                <span>Date</span>
              </div>
            </div>
          </div>
          <a href="#">View More</a>
        </div>
      </section>

      <section>
        <div className="tag-section">
          <h1>Tags Section</h1>
          <div className="tag-cards">
            {/* minimum 4 card in 1 row */}
            <div className="tag">
              <h1>use icon</h1>
              <h3>Technology</h3>
            </div>
            <div className="tag">
              <h1>use icon</h1>
              <h3>Lifestyle</h3>
            </div>
            <div className="tag">
              <h1>use icon</h1>
              <h3>Travel</h3>
            </div>
            <div className="tag">
              <h1>use icon</h1>
              <h3>Health</h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="about-section">
          <h1>Why Choose BlogOasis?</h1>
          <p>
            Welcome to BlogOasis – your go-to platform for discovering and
            sharing captivating blogs. Whether you're passionate about Tech,
            Health, Travel, or Lifestyle, BlogOasis offers a rich variety of
            content, including global blogs, to keep you informed and inspired.
            Our advanced search feature allows you to easily find blogs on
            specific topics or by popular authors, making it simple to navigate
            through a vast range of content. Not only can you read, but you can
            also create and publish your own blogs with ease. BlogOasis provides
            detailed guidance on how to craft and post your content properly,
            ensuring it reaches the right audience. Each blog post comes with
            author details, so you can connect with writers and explore more of
            their work. Join the BlogOasis community today, where you can learn,
            share, and grow through engaging blog posts from around the world.
          </p>
          <a href="#">Join Now</a>
        </div>
      </section>

      <section>
        <div className="call-section">
            <a href="#">Share Your Story with the World</a>
        </div>
      </section>


      <section>
        <div className="author-section">
            <h1>Meet Our Creators</h1>
        <div className="author-cards">
            {/* card slider */}
            <div className="author">
              {/* <img src="" alt="" /> */}
              <h1>Author image</h1>
              <div className="author-details">
                <h1>Author Name</h1>
                <p>About Author</p>
               <a href="#">Blog Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section>
      <div className="community-section">
        <h1>Join the Conversation Online</h1>
        <div className="icon-cards">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <br />
            Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <br />
            Instagram
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <br />
            LinkedIn
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <br />
            Twitter
          </a>
        </div>
      </div>
      </section>
    </>
  );
}

export default Hero;
