"use client";

import { useState, useEffect, CSSProperties, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState<{ top: string; left: string } | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [yesSize, setYesSize] = useState<CSSProperties | undefined>({ height: '36px', fontSize: '14px' });
  const yesBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNoMouseEnter = () => {
    // Ensure we are on client to access window
    if (typeof window !== "undefined") {
      const maxX = window.innerWidth - 100; // Buffer for button width
      const maxY = window.innerHeight - 50; // Buffer for button height

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      setNoBtnPosition({ top: `${y}px`, left: `${x}px` });
      console.log(Number(yesBtnRef.current?.style?.height.slice(0, -2)) + 12);
      setYesSize({ height: `${Number(yesBtnRef.current?.style?.height.slice(0, -2)) + 16}px`, fontSize: `${Number(yesBtnRef.current?.style?.fontSize.slice(0, -2)) + 7}px` });
    }
  };

  if (yesPressed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center px-4 animate-in fade-in duration-500">
        <div className="text-9xl mb-4 animate-bounce">💖</div>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">
          Yay! I knew you would say yes!
        </h1>
        <p className="text-xl text-pink-400">I'm so happy to be your Valentine, Uuzii!</p>
        <address>
          14th Feb 2026, 4 pm, Talbai deer uulziy
        </address>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 relative overflow-hidden px-4">
      {/* Decorative hearts background - optional simplistic implementation */}

      <div className="z-10 text-center">
        <div className="mb-8">
          <span className="text-8xl" role="img" aria-label="pleading face">🥺</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-12 leading-tight">
          Will you be my Valentine, Uuzii?
        </h1>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center min-h-[60px]">
          <Button
            style={yesSize}
            ref={yesBtnRef}
            className="aspect-3/2"
            onClick={() => setYesPressed(true)}
          // className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full text-xl shadow-lg transition-transform transform hover:scale-110 active:scale-95 focus:outline-none ring-4 ring-green-300 ring-opacity-50"
          >
            Yes
          </Button>

          <Button
            variant={'destructive'}
            onMouseEnter={handleNoMouseEnter}
            onClick={handleNoMouseEnter} // Should be practically unclickable, but just in case
            style={
              noBtnPosition
                ? { position: "fixed", top: noBtnPosition.top, left: noBtnPosition.left, transition: "all 0.2s ease" }
                : { transition: "all 0.2s ease" }
            }
          // className={`px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-xl shadow-lg focus:outline-none ring-4 ring-red-300 ring-opacity-50 ${noBtnPosition ? "z-50" : ""}`}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}
