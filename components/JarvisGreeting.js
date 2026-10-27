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
        return "Good morning, Adrian.";
      }

      if (hour < 18) {
        return "Good afternoon, Adrian.";
      }

      return "Good evening, Adrian.";
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

      const message = new SpeechSynthesisUtterance(
        getGreeting()
      );

      const voice = selectVoice();

      if (voice) {
        message.voice = voice;
        message.lang = voice.lang;
      } else {
        message.lang = "en-GB";
      }

      message.rate = 0.82;
      message.pitch = 0.72;
      message.volume = 1;

      message.onstart = () => {
        hasSpoken = true;

        console.log(
          "AOS Voice:",
          message.text,
          voice?.name || "default voice"
        );
      };

      message.onerror = (event) => {
        console.log(
          "AOS Voice waiting for interaction:",
          event.error
        );
      };

      synth.cancel();
      synth.resume();
      synth.speak(message);
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

    const timer = setTimeout(() => {
      speak();
    }, 900);

    synth.addEventListener("voiceschanged", selectVoice);

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

      synth.removeEventListener(
        "voiceschanged",
        selectVoice
      );

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
