"use client";

import { useEffect } from "react";

export default function JarvisGreeting() {
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    // Nie powtarzaj powitania przy każdym rerenderze
    const alreadyGreeted = sessionStorage.getItem("aosJarvisGreeted");

    if (alreadyGreeted) return;

    const speakGreeting = () => {
      const hour = new Date().getHours();

      let greeting = "Good morning";

      if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon";
      } else if (hour >= 18 || hour < 5) {
        greeting = "Good evening";
      }

      const message = `${greeting}, Adrian.`;

      const voices = window.speechSynthesis.getVoices();

      // Preferujemy angielski głos Microsoft, jeśli przeglądarka go udostępnia.
      const preferredVoice =
        voices.find(
          (voice) =>
            voice.lang.startsWith("en") &&
            voice.name.toLowerCase().includes("microsoft")
        ) ||
        voices.find(
          (voice) =>
            voice.lang.startsWith("en-GB")
        ) ||
        voices.find(
          (voice) =>
            voice.lang.startsWith("en-US")
        ) ||
        voices.find(
          (voice) =>
            voice.lang.startsWith("en")
        );

      const utterance = new SpeechSynthesisUtterance(message);

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      // Wolniej i niżej daje bardziej "AI command center" feeling.
      utterance.rate = 0.86;
      utterance.pitch = 0.72;
      utterance.volume = 0.85;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);

      sessionStorage.setItem("aosJarvisGreeted", "true");
    };

    // Chrome/Edge potrafią ładować listę głosów asynchronicznie.
    const voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
      const timer = setTimeout(speakGreeting, 700);

      return () => clearTimeout(timer);
    }

    window.speechSynthesis.onvoiceschanged = speakGreeting;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  return null;
}
