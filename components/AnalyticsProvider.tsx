"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function AnalyticsProvider() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "accepted") {
      setAccepted(true);
    }
    const handler = () => setAccepted(true);
    window.addEventListener("cookie-consent-accepted", handler);
    return () => window.removeEventListener("cookie-consent-accepted", handler);
  }, []);

  if (!accepted) return null;
  return <GoogleAnalytics gaId="G-LCKK469NQG" />;
}
