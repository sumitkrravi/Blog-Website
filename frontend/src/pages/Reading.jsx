import './Reading.css'

function Reading() {
  return (
    <>
      <section>
        <div className="reading-page">
          <div className="title">
            <h1>Blog Title</h1>
            <p>Sub-heading</p>
          </div>
          <div className="author-date">
            <span>
              by <span>Author Name</span>
            </span>
            <span>Publish Date</span>
          </div>
          <div className="blog-poster"></div>
          <div className="blog-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              voluptatem quo reiciendis? Rem, fugiat eius explicabo hic dolore
              cum? Neque omnis magni labore debitis non aut quod inventore eaque
              eum assumenda. Voluptatum deleniti, deserunt aliquid hic excepturi
              illo consequuntur minus delectus assumenda neque mollitia quo ut
              harum reiciendis ea eos veniam! Magni inventore adipisci maxime
              eum illum voluptatibus, suscipit fugiat quasi perspiciatis quia
              provident natus molestias, at corrupti optio dolorum fugit in
              officia repellendus aliquam recusandae! Quis labore recusandae
              dicta enim, debitis nostrum nesciunt nihil expedita ab eveniet
              quaerat nam sapiente rerum optio culpa. Blanditiis tempore
              architecto commodi deserunt numquam.
            </p>
            <div className="comment-like">
                <a href="#comment">Comment</a>
                <a href="#">Like</a>
            </div>
          </div>

          <div className="reviews">
            <p>ReviewBy</p>
            <p>Comment</p>
          </div>

          <div className="comment-box" id="comment">
            <textarea name="comment" id="">

            </textarea>
            <button>send</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reading;
