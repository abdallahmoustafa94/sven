import React, { useState, useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import ReactPlayer from "react-player";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoSource, setVideoSource] = useState("/assets/img/hero-video.mp4");

  useEffect(() => {
    const updateVideoSource = () => {
      if (window !== undefined && window.innerWidth <= 600) {
        setVideoSource("/assets/img/hero-video-sm.mp4");
      } else {
        setVideoSource("/assets/img/hero-video.mp4");
      }
    };

    updateVideoSource();

    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  return (
    <header className="style-14">
      <div className="content" style={{ width: "100vw", height: "100vh" }}>
        <div
          id="hero-video"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize: "4rem",
                zIndex: 3,
                lineHeight: "3rem",
              }}
            >
              SVEN
            </h1>
            <span style={{ color: "#fff", fontSize: "2rem", zIndex: 3 }}>
              für Reinigungsdienste
            </span>
          </div>
          <div className="hero-overlay"></div>
          <ReactPlayer
            url={videoSource}
            playing
            autoplay
            loop
            muted
            playsinline
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
