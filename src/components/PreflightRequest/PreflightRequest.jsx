"use client";

import { useEffect, useRef, useState } from "react";

import { useLocale } from "../LocaleProvider/LocaleProvider";

import "./PreflightRequest.css";

const content = {
  en: {
    eyebrow: "Preflight request",
    title: "The lab on wheels",
    description: "Our mobile technical unit brings testing, demonstrations, and direct product comparison into the conditions where your team actually works.",
    points: [
      "Live on-site experiments with 100% transparent methods",
      "Competitor product testing, side by side",
      "Immediate observations with practical technical guidance",
    ],
    action: "Request a preflight visit",
    mediaLabel: "Bondure mobile technical unit in action",
  },
  de: {
    eyebrow: "Vorabprüfung anfragen",
    title: "Das Labor auf Rädern",
    description: "Unsere mobile technische Einheit bringt Prüfungen, Vorführungen und direkte Produktvergleiche dorthin, wo Ihr Team tatsächlich arbeitet.",
    points: [
      "Live-Experimente vor Ort mit vollständig transparenten Methoden",
      "Direkte Vergleichstests mit Wettbewerbsprodukten",
      "Sofortige Erkenntnisse mit praxisnaher technischer Beratung",
    ],
    action: "Vorabprüfung anfragen",
    mediaLabel: "Mobile technische Einheit von Bondure im Einsatz",
  },
};

export default function PreflightRequest() {
  const { locale } = useLocale();
  const videoRef = useRef(null);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const copy = content[locale] || content.en;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.connection?.saveData) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoEnabled(entry.isIntersecting);
        if (!entry.isIntersecting) video.pause();
      },
      { rootMargin: "250px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="preflight-request" id="preflight-request" aria-labelledby="preflight-request-title">
      <div className="preflight-request__media">
        <video
          ref={videoRef}
          src={videoEnabled ? "/services/mobile-technical-unit.mp4" : undefined}
          autoPlay={videoEnabled}
          muted
          loop
          playsInline
          preload="none"
          aria-label={copy.mediaLabel}
        />
        <div className="preflight-request__shade" aria-hidden="true" />
      </div>

      <div className="preflight-request__content">
        <p className="preflight-request__eyebrow">{copy.eyebrow}</p>
        <h2 id="preflight-request-title">{copy.title}</h2>
        <p className="preflight-request__description">{copy.description}</p>
        <ul>
          {copy.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <a className="preflight-request__action" href="/connect">{copy.action}</a>
      </div>
    </section>
  );
}
