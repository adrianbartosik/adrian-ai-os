"use client";

import { useEffect } from "react";

export default function JarvisGreeting() {
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      console.log("AOS Voice: speech synthesis unavailable");
      return;
    }

    const synth = window.speechSynthesis;
    let hasSpoken = false;

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

    const getMessage = () => {
      return `${getGreeting()}, Adrian. All systems are operational. You have four meetings, four pending decisions and four active risks. Shall we begin?`;
    };

    const selectVoice = () => {
      const voices = synth.getVoices();

      if (!voices.length) {
        return null;
      }

      const preferredNames = [
        "Microsoft Ryan Online",
        "Microsoft Guy Online",
        "Microsoft Christopher Online",
        "Microsoft Eric Online",
        "Microsoft George",
        "Microsoft David",
        "Daniel",
      ];

      for (const preferredName of preferredNames) {
        const voice = voices.find((item) =>
          item.name
            .toLowerCase()
            .includes(preferredName.toLowerCase())
        );

        if (voice) {
          return voice;
        }
      }

      return (
        voices.find(
          (voice) =>
            voice.lang === "en-GB" &&
            voice.localService
        ) ||
        voices.find(
          (voice) =>
            voice.lang === "en-US" &&
            voice.localService
        ) ||
        voices.find((voice) =>
          voice.lang.startsWith("en-GB")
        ) ||
        voices.find((voice) =>
          voice.lang.startsWith("en-US")
        ) ||
        voices.find((voice) =>
          voice.lang.startsWith("en")
        ) ||
        null
      );
    };

    const speak = () => {
      if (hasSpoken) {
        return;
      }

      const voice = selectVoice();

      const utterance = new SpeechSynthesisUtterance(
        getMessage()
      );

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = "en-GB";
      }

      // Wolniej i trochę niżej dla efektu AOS / AI assistant
      utterance.rate = 0.82;
      utterance.pitch = 0.72;
      utterance.volume = 1;

      utterance.onstart = () => {
        hasSpoken = true;

        console.log(
          "AOS Voice started:",
          voice?.name || "default voice"
        );
      };

      utterance.onerror = (event) => {
        console.log(
          "AOS Voice waiting for interaction:",
          event.error
        );
      };

      synth.cancel();
      synth.resume();
      synth.speak(utterance);
    };

    const speakAfterInteraction = () => {
      if (!hasSpoken) {
        speak();
      }

      document.removeEventListener(
        "click",
        speakAfterInteraction
      );

      document.removeEventListener(
        "keydown",
        speakAfterInteraction
      );

      document.removeEventListener(
        "touchstart",
        speakAfterInteraction
      );
    };

    // Próba automatycznego powitania po załadowaniu AOS
    const timer = setTimeout(() => {
      speak();
    }, 1000);

    // Jeśli przeglądarka zablokuje autoplay,
    // pierwsza interakcja użytkownika uruchomi powitanie
    document.addEventListener(
      "click",
      speakAfterInteraction
    );

    document.addEventListener(
      "keydown",
      speakAfterInteraction
    );

    document.addEventListener(
      "touchstart",
      speakAfterInteraction
    );

    return () => {
      clearTimeout(timer);

      document.removeEventListener(
        "click",
        speakAfterInteraction
      );

      document.removeEventListener(
        "keydown",
        speakAfterInteraction
      );

      document.removeEventListener(
        "touchstart",
        speakAfterInteraction
      );
    };
  }, []);

  return null;
}
