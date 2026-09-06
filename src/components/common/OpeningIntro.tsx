"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../../logo-green.png";

type IntroPhase = "playing" | "leaving";

export default function OpeningIntro() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const [phase, setPhase] = useState<IntroPhase>("playing");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isAdmin) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";

    const startExit = window.setTimeout(() => setPhase("leaving"), reduceMotion ? 80 : 2850);
    const finish = window.setTimeout(() => setVisible(false), reduceMotion ? 160 : 3650);

    const dismiss = () => {
      window.clearTimeout(startExit);
      window.clearTimeout(finish);
      setPhase("leaving");
      window.setTimeout(() => setVisible(false), reduceMotion ? 20 : 700);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(startExit);
      window.clearTimeout(finish);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
    };
  }, [isAdmin]);

  useEffect(() => {
    if (isAdmin) return;
    if (!visible) {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    }
  }, [visible, isAdmin]);

  if (isAdmin || !visible) return null;

  return (
    <div
      className={`opening-intro ${phase === "leaving" ? "opening-intro--leaving" : ""}`}
      role="status"
      aria-label="Welcome to Chetana Psychological Counselling Centre"
    >
      <div className="opening-intro__content">
        <div className="opening-intro__logo-stage" aria-hidden="true">
          <span className="opening-intro__logo-shell">
            <Image
              src={logo}
              alt=""
              fill
              preload
              sizes="(max-width: 640px) 184px, 236px"
              className="opening-intro__logo-image"
            />
            <span className="opening-intro__logo-shine" />
          </span>
        </div>

        <div className="opening-intro__copy">
          <p className="opening-intro__eyebrow">Welcome to</p>
          <p className="opening-intro__title">Chetana</p>
          <p className="opening-intro__subtitle">Psychological Counselling Centre</p>
          <div className="opening-intro__progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>

      <p className="opening-intro__motto">Awareness&nbsp;&nbsp;&middot;&nbsp;&nbsp;Growth&nbsp;&nbsp;&middot;&nbsp;&nbsp;Well-being</p>
      <button
        type="button"
        className="opening-intro__skip"
        onClick={() => {
          setPhase("leaving");
          window.setTimeout(() => setVisible(false), 700);
        }}
        aria-label="Skip opening animation"
      >
        Skip
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
