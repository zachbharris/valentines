"use client";
import Image from "next/image";
import { useState, useMemo } from "react";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Don't you want to reconsider?",
  "You're making a mistake",
  "You're breaking my heart",
];

export default function Home() {
  const [saidYes, setSaidYes] = useState(false);
  const [count, setCount] = useState(0);

  const yesButtonSize = useMemo(() => {
    return count * 20 + 16;
  }, [count]);

  const noButtonText = useMemo(() => {
    return phrases[Math.min(count, phrases.length - 1)];
  }, [count]);

  function restart() {
    setSaidYes(false);
    setCount(0);
  }

  if (saidYes) {
    return (
      <main className="h-screen w-screen flex flex-col items-center justify-center gap-4">
        <Image
          src="https://media.giphy.com/media/IzXiddo2twMmdmU8Lv/giphy.gif"
          alt="white bear jumping into the arms of a brown bear for a hug"
          width={200}
          height={200}
        />
        <p className="font-bold text-xl">Yay! Love you boo 💖</p>
        <button type="button" onClick={() => restart()} className="bg-neutral-200 rounded-lg p-1">
          🔃
        </button>
      </main>
    );
  }

  return (
    <main className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <Image
        src="https://media.giphy.com/media/gjHkRHSuHqu99y9Yjt/giphy.gif"
        alt="white bear on heart"
        width={200}
        height={200}
      />
      <h1 className="font-bold text-2xl">Will you be my valentine?</h1>

      <div className="flex flex-row gap-4 items-center">
        <button
          type="button"
          onClick={() => setSaidYes(true)}
          style={{ fontSize: yesButtonSize }}
          className="bg-green-500 text-white font-bold rounded-lg px-4 py-2 h-fit w-fit"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => setCount((prev) => prev + 1)}
          className="text-white font-bold bg-red-500 rounded-lg px-4 py-2 h-fit w-fit"
        >
          {noButtonText}
        </button>
      </div>
    </main>
  );
}
