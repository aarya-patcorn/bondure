"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import "./HomePage.css";

const statsCopy = {
  en: {
    statsLabel: "Key figures",
    stats: ["Tests performed", "Team members", "Years of innovation", "Continents"],
  },
  de: {
    statsLabel: "Kennzahlen",
    stats: ["durchgeführte Tests", "Teammitglieder", "Jahre Innovation", "Kontinente"],
  },
};

const statValues = [
  { value: 759000, suffix: "+", illustration: "/home-media/test-performed.png", progress: 100 },
  { value: 1000, suffix: "+", illustration: "/home-media/stat-team.png", progress: 92 },
  { value: 30, suffix: "+", illustration: "/home-media/stat-innovation.png", progress: 72 },
  { value: 2, suffix: "", illustration: "/home-media/stat-continents.webp", progress: 36 },
];

function AnimatedStatCard({ stat, label }) {
  const cardRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(stat.value);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();
    let frameId;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(stat.value * eased));

      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, stat.value]);

  return (
    <article
      ref={cardRef}
      className={`home-stat-card${isVisible ? " is-visible" : ""}`}
      style={{ "--home-stat-progress": `${isVisible ? stat.progress : 0}%` }}
    >
      <div className="home-stat-card__visual">
        <img src={stat.illustration} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="home-stat-card__content">
        <strong>
          {displayValue.toLocaleString("en-US")}
          {stat.suffix}
        </strong>
        {/* <div className="home-stat-card__progress" aria-hidden="true">
          <span />
        </div> */}
        <p className="home-stat-card__label">{label}</p>
      </div>
    </article>
  );
}

export default function HomeStats() {
  const { locale } = useLocale();
  const copy = statsCopy[locale];

  return (
    <section className="home-stats" aria-label={copy.statsLabel}>
      <div className="home-stats__inner">
        <div className="home-stats__grid">
          {statValues.map((stat, index) => (
            <AnimatedStatCard
              key={stat.value}
              stat={stat}
              label={copy.stats[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}