import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="Home-header">
        <div className="site-heading">
          <h1>Clean Blog</h1>
          <span>A Blog Theme by Start Bootstrap</span>
        </div>
      </header>
      <div>
        <div className="container">
          <div className="posts">
            <div className="post-preview">
              <Link to="post.html">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </Link>
              <p className="post-meta">
                Posted by
                <Link to="#!"> Start Bootstrap </Link>
                on September 24, 2023
              </p>
            </div>
            <div className="post-preview">
              <Link to="post.html">
                <h2 className="post-title">
                  I believe every human has a finite number of heartbeats. I
                  don't intend to waste any of mine.
                </h2>
              </Link>
              <p className="post-meta">
                Posted by
                <Link to="#!"> Start Bootstrap </Link>
                on September 18, 2023
              </p>
            </div>
            <div className="post-preview">
              <Link to="post.html">
                <h2 className="post-title">
                  Science has not yet mastered prophecy
                </h2>
                <h3 className="post-subtitle">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </Link>
              <p className="post-meta">
                Posted by
                <Link to="#!"> Start Bootstrap </Link>
                on August 24, 2023
              </p>
            </div>
            <div className="post-preview">
              <Link to="post.html">
                <h2 className="post-title">Failure is not an option </h2>
                <h3 className="post-subtitle">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </Link>
              <p className="post-meta">
                Posted by
                <Link to="#!"> Start Bootstrap </Link>
                on July 8, 2023
              </p>
            </div>
            <Link
              to="#!"
              className="btn"
            >
              Older Posts →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
