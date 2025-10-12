import "../index.css";

const WelcomeScreen = () => {
  return (
  <div className="container">
    <div className="all-sections">
      <div className="container">
        {/* Left Side */}
        <div className="left-section">
          <div>
            <h1>Welcome to Sonola</h1>
            <p>
              With Sonola, making stand-out marketing content is as easy as a few
              clicks. Let’s get started!
            </p>
          </div>

          <div className="bottom-area">
            <p className="small-text">
              63% of marketers say creating engaging content consistently is their
              biggest challenge.
            </p>
            <p className="source">Content Marketing Institute, 2022</p>
            <div className="progress-bar">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot active"></div>
            </div>
            <button className="next-btn">Next</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-section">
          <video autoPlay muted loop>
            <source src="/public/welcome-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
    </div>
  </div>
  );
}

export default WelcomeScreen;
