"use client";

import { useEffect } from "react";

export default function JarvisGreeting() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      return;
    }

    const synth = window.speechSynthesis;
    let spoken = false;

    const getGreeting = () => {
      const hour = new Date().getHours();

      if (hour < 12) {
        return "Good morning";
      }

      if (hour < 18) {
        return "Good afternoon";
      }

      return "Good evening";
    };

    const speak = () => {
      if (spoken) return;

      spoken = true;

      const text =
        `${getGreeting()}, Adrian. ` +
        "All systems are operational. " +
        "You have four meetings, four pending decisions, " +
        "and four active risks. " +
        "Shall we begin?";

      const utterance =
        new SpeechSynthesisUtterance(text);

      const voices = synth.getVoices();

      const voice =
        voices.find(
          (v) =>
            v.lang.startsWith("en-GB") &&
            v.name.toLowerCase().includes("microsoft")
        ) ||
        voices.find((v) =>
          v.lang.startsWith("en-GB")
        ) ||
        voices.find((v) =>
          v.lang.startsWith("en-US")
        ) ||
        voices.find((v) =>
          v.lang.startsWith("en")
        );

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = "en-GB";
      }

      utterance.rate = 0.92;
      utterance.pitch = 1;
      utterance.volume = 1;

      synth.cancel();
      synth.resume();
      synth.speak(utterance);

      console.log(
        "AOS VOICE:",
        voice?.name || "DEFAULT"
      );
    };

    const start = () => {
      speak();

      window.removeEventListener("click", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("touchstart", start);
    };

    window.addEventListener("click", start);
    window.addEventListener("keydown", start);
    window.addEventListener("touchstart", start);

    return () => {
      window.removeEventListener("click", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("touchstart", start);

      synth.cancel();
    };
  }, []);

  return null;
}
