"use client";

import "./Intro.css";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

// Only play the intro on the very first load, not on client-side navigations.
let hasPlayedIntro = false;

gsap.registerPlugin(CustomEase);
CustomEase.create("intro-hop", "0.87, 0, 0.13, 1");

// "Bondure" shown first in English, then flipped to German.
const WORD_EN = "BONDURE";
const WORD_DE = "BEOENDEUERE";

// Broadcast once the intro is out of the way so other UI (e.g. the cookie
// consent card) can wait for the reveal to finish before appearing.
function markIntroDone() {
  if (typeof window === "undefined") return;
  if (window.__bondureIntroComplete) return;
  window.__bondureIntroComplete = true;
  window.dispatchEvent(new Event("bondure:intro-complete"));
}

export default function Intro() {
  const introRef = useRef(null);
  const flipRef = useRef(null);
  const contentRef = useRef(null);
  const [showIntro, setShowIntro] = useState(!hasPlayedIntro);
  const [animating, setAnimating] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hasPlayedIntro = true;
      setShowIntro(false);
    }
  }, []);

  // Whenever the intro is not on screen (skipped, already played, or the
  // reveal finished), signal completion so gated UI can appear.
  useEffect(() => {
    if (!showIntro) markIntroDone();
  }, [showIntro]);

  // Lock scrolling while the intro plays.
  useEffect(() => {
    if (!showIntro) return undefined;
    document.body.classList.toggle("intro-active", animating || showIntro);
    return () => document.body.classList.remove("intro-active");
  }, [showIntro, animating]);

  useEffect(() => {
    if (!lenis) return;
    if (animating) lenis.stop();
    else lenis.start();
  }, [lenis, animating]);

  useGSAP(
    () => {
      if (!showIntro || !introRef.current) return undefined;

      setAnimating(true);

      const panelA = introRef.current.querySelector(".intro__panel--a");
      const panelB = introRef.current.querySelector(".intro__panel--b");
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const finish = () => {
        hasPlayedIntro = true;
        setAnimating(false);
        setShowIntro(false);
      };

      const tl = gsap.timeline({ onComplete: finish });

      // 1. Reveal the English word.
      tl.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
      })
        // 2. Hold, then flip the text to German.
        .to({}, { duration: 0.55 })
        .to(flipRef.current, {
          rotationX: 180,
          duration: 0.9,
          ease: "power3.inOut",
        })
        // 3. Hold the German word.
        .to({}, { duration: 0.7 })
        // 4. Fade the text out before splitting the background.
        .to(contentRef.current, {
          opacity: 0,
          scale: 0.96,
          duration: 0.45,
          ease: "power2.in",
        })
        .add("split", "-=0.1");

      // 5. Split the background from the centre and reveal the page.
      if (isMobile) {
        // Mobile: open horizontally (left half slides left, right half right).
        tl.to(panelA, { xPercent: -100, duration: 1.15, ease: "intro-hop" }, "split")
          .to(panelB, { xPercent: 100, duration: 1.15, ease: "intro-hop" }, "split");
      } else {
        // Desktop: open vertically (top half slides up, bottom half down).
        tl.to(panelA, { yPercent: -100, duration: 1.15, ease: "intro-hop" }, "split")
          .to(panelB, { yPercent: 100, duration: 1.15, ease: "intro-hop" }, "split");
      }

      return () => tl.kill();
    },
    { scope: introRef, dependencies: [showIntro] }
  );

  if (!showIntro) return null;

  return (
    <div className="intro" ref={introRef} role="status" aria-label="Bondure">
      <div className="intro__panel intro__panel--a" aria-hidden="true" />
      <div className="intro__panel intro__panel--b" aria-hidden="true" />
      <div className="intro__content" ref={contentRef}>
        <div className="intro__flip">
          <div className="intro__flip-inner" ref={flipRef}>
            <h1 className="intro__word intro__word--front" lang="en">
              {WORD_EN}
            </h1>
            <h1 className="intro__word intro__word--back" lang="de">
              {WORD_DE}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
