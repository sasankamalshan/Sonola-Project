
import { useNavigate } from "react-router-dom";
import "../index.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/home");
  };

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
            <p className="medium-text">
              63% of marketers say creating engaging content consistently is their
              biggest challenge.
            </p>
            <p className="small-text">
              <small>Content Marketing Institute, 2022 </small>
              </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', width: '100%' }}>
              <div className="progress-bar" style={{ marginBottom: 0 }}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot active"></div>
              </div>
              <button className="next-btn" onClick={handleNextClick}>Next</button>
            </div>
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
    <div className="underimage">
      <img
        src="/public/watermark.png"
        alt="sonola welcome watermark logo"
        className="watermark"
      />
    </div>
  </div>
  );
}

export default WelcomeScreen;
