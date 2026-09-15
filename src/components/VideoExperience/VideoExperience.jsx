"use client";

import { useEffect, useRef, useState } from "react";

import "./VideoExperience.css";

export default function VideoExperience({ videos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const activeVideo = activeIndex === null ? null : videos[activeIndex];

  const closeVideo = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeVideo();
    };

    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section className="video-experience" aria-labelledby="video-experience-title">

      {/* <header className="video-experience__header">
        <h2 id="video-experience-title">"Click and explore our experience center"</h2>
      </header> */}

      <div className="video-experience__grid">
        {videos.map((video, index) => (
          <button
            className="video-experience__card"
            key={video.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Play ${video.title}`}
          >
            <video src={video.src} muted playsInline preload="metadata" aria-hidden="true" />
            {/* <span className="video-experience__card-shade" aria-hid/den="true" /> */}
          </button>
        ))}
      </div>

      {activeVideo && (
        <div className="video-experience__overlay" role="presentation" onMouseDown={closeVideo}>
          <div
            className="video-experience__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
            ref={dialogRef}
            tabIndex={-1}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <video src={activeVideo.src} autoPlay playsInline onEnded={closeVideo} />
          </div>
        </div>
      )}
    </section>
  );
}
