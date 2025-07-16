"use client";

import { useEffect, useState } from "react";
import ButtonMain from "./ButtonMain";

export default function CalendlyPopupButton() {
  const [isCalendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      console.log("Calendly script loaded", window.Calendly);
      setCalendlyReady(true);
    };

    script.onerror = () => {
      console.error("Failed to load Calendly script");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (isCalendlyReady && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/loxonnron/30min",
      });
    }
  };

  return (
    <ButtonMain onClick={openCalendly} />
  );
}
