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

    const getBestVoice = () => {
      const voices = synth.getVoices();

      const preferredVoice =
        voices.find(
          (voice) =>
            voice.lang === "en-GB" &&
            voice.name.toLowerCase().includes("microsoft")
        ) ||
        voices.find(
          (voice) =>
            voice.lang === "en-US" &&
            voice.name.toLowerCase().includes("microsoft")
        ) ||
        voices.find(
          (voice) =>
            voice.lang === "en-GB"
        ) ||
        voices.find(
          (voice) =>
            voice.lang === "en-US"
        ) ||
        voices.find(
          (voice) =>
            voice.lang.startsWith("en")
        );

      return preferredVoice || null;
    };

    const speak = () => {
      try {
        synth.cancel();

        const text =
          `${getGreeting()}, Adrian. ` +
          "All systems are operational. " +
          "You have four meetings, four pending decisions, " +
          "and four active risks. " +
          "Shall we begin?";

        const utterance =
          new SpeechSynthesisUtterance(text);

        const voice = getBestVoice();

        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang;
        } else {
          utterance.lang = "en-GB";
        }

        /*
         * Natural assistant voice.
         * Nie obniżamy pitch agresywnie.
         */
        utterance.rate = 0.9;
        utterance.pitch = 0.95;
        utterance.volume = 0.9;

        synth.speak(utterance);
      } catch (error) {
        console.error("AOS Voice error:", error);
      }
    };

    let hasStarted = false;

    const startVoice = () => {
      if (hasStarted) {
        return;
      }

      hasStarted = true;

      speak();

      window.removeEventListener("click", startVoice);
      window.removeEventListener("keydown", startVoice);
      window.removeEventListener("touchstart", startVoice);
    };

    /*
     * Próbujemy automatycznie.
     */
    const timer = window.setTimeout(() => {
      startVoice();
    }, 1200);

    /*
     * Fallback dla przeglądarek wymagających interakcji.
     */
    window.addEventListener("click", startVoice);
    window.addEventListener("keydown", startVoice);
    window.addEventListener("touchstart", startVoice);

    return () => {
      window.clearTimeout(timer);

      window.removeEventListener("click", startVoice);
      window.removeEventListener("keydown", startVoice);
      window.removeEventListener("touchstart", startVoice);

      synth.cancel();
    };
  }, []);

  return null;
}
