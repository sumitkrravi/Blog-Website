import { useState } from "react";
import "./Blog.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Blog() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    console.log(`Selected Language: ${selectedLanguage}`);
  };

  return (
    <>
    <Navbar />
      <section>
        <div className="blog-section-head">
          <div className="filter-section">
            <a href="#">All</a>
            <a href="#">Tech</a>
            <a href="#">Travel</a>
            <a href="#">Health</a>
            <a href="#">Lifestyle</a>
          </div>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="language-dropdown"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </section>

      <section>
        <div className="blog-section-body">
          <div className="blog">
          <a href="#">
            <div className="blog-thumbnail"></div>
            <div className="blog-overviews">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus nam labore, laudantium iusto magni explicabo quas
                distinctio. Minima veniam fugiat ipsum et delectus excepturi
                assumenda, molestias maxime accusamus illum? Et commodi
                voluptates aperiam reiciendis cupiditate, ipsum dolor architecto
                blanditiis sit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni incidunt quisquam fugiat quidem,
                cupiditate officiis esse voluptatem expedita atque quibusdam
                nisi harum culpa minima a earum totam, praesentium, provident
                amet?
              </p>
              <span>
                by <span>Author Name</span>
              </span>
              <div className="comments-likes">
                <span>
                  comment <span>20</span>
                </span>
                <span>
                  Like <span>10</span>
                </span>
              </div>
              
            </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
