"use client"

import { useEffect } from "react";

export default function CalendlyInline() {
  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget z-0"
      data-url="https://calendly.com/loxonnron/30min"
      style={{ minWidth: "320px", height: "630px" }}

    />
  );
}
