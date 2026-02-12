"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState<{ top: string; left: string } | null>(null);
  const [yesScale, setYesScale] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNoMouseEnter = () => {
    if (typeof window !== "undefined") {
      const maxX = window.innerWidth - 100; // Buffer for button width
      const maxY = window.innerHeight - 50; // Buffer for button height

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      console.log(x, y);

      setNoBtnPosition({ top: `${y}px`, left: `${x}px` });

      // Increase scale of Yes button
      setYesScale((prev) => prev + 0.15);
    }
  };

  if (yesPressed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center px-4 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ scale: [1, .95, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-9xl mb-4"
          >
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVja243c3hvd21tMm01NGhhNXNneWM4MXltNjN3Y3ZreHJ4d294YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBuq3ganYoTUwuc/giphy.gif"
              alt="happy face"
              className="size-40"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">
            Yay! I knew you would say yes!
          </h1>
          <p className="text-xl text-pink-400 mb-6">I'm so happy to be your Valentine, Uuzii!</p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-md border border-pink-200"
          >
            <address className="not-italic text-pink-700 text-lg font-medium">
              📅 14th Feb 2026<br />
              ⏰ 4 pm<br />
              📍 See you at Central!
            </address>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 relative overflow-hidden px-4">
      {/* Decorative background elements can be added here */}

      <div className="z-10 text-center w-full max-w-4xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-8xl inline-block" role="img" aria-label="pleading face">
            <img
              className="size-30"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDY3OGY0cnpqenc4cGVmNm1oODZ3dXBjMm54aDljdzU0NmFoemhxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vDhDcIEmShbUI/giphy.gif"
              alt="pleading face"
            />
          </span>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold text-pink-600 mb-12 leading-tight"
        >
          Will you be my Valentine, Uuzii?
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-[100px] relative">
          <motion.div
            animate={{ scale: yesScale }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative z-20"
          >
            <Button
              onClick={() => setYesPressed(true)}
              className="bg-emerald-500"
            >
              Yes
            </Button>
          </motion.div>

          {/* Wrapper for the No button to handle positioning without affecting flow initially */}
          <div className="relative">
            <motion.div
              initial={false}
              animate={noBtnPosition ? {
                top: noBtnPosition.top,
                left: noBtnPosition.left,
              } : {}}
              style={noBtnPosition ? {
                position: "fixed",
                zIndex: 9999,
              } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                variant={'destructive'}
                onMouseEnter={handleNoMouseEnter}
                onClick={handleNoMouseEnter}
              >
                No
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
