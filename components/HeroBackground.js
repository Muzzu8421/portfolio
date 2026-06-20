"use client";
import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";

export default function HeroBackground() {
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaReady && vantaRef.current && window.VANTA) {
      const effect = window.VANTA.DOTS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe57a23,
        color2: 0xc56c22,
        backgroundColor: 0x0b0b0f,
        size: 4.5,
        showLines: false
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaReady, vantaEffect]);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
        strategy="lazyOnload"
        onLoad={() => setThreeReady(true)}
      />
      {threeReady && (
        <Script 
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
          strategy="lazyOnload"
          onLoad={() => setVantaReady(true)}
        />
      )}
      <div ref={vantaRef} className="absolute inset-0 z-0" />
    </>
  );
}
