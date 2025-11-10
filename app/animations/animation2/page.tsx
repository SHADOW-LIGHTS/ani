"use client";

import { Heatmap } from "@paper-design/shaders-react";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "@/components/footer";

export default function Animation2() {
  const [dimensions] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }));

  const heatmapScale = typeof window !== 'undefined' && window.innerWidth >= 1536 ? 2.2 : 2.4;

  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
    console.log('Component mounted, dimensions:', dimensions);
    
    if (!containerRef.current) return;

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const element = containerRef.current;

    // Set initial white background
    gsap.set(element, {
      "--bg-color-r": 255,
      "--bg-color-g": 255,
      "--bg-color-b": 255,
      "--text-color-r": 0,
      "--text-color-g": 0,
      "--text-color-b": 0,
    });

    // Animate from white (255) to black (0) on scroll
    gsap.to(element, {
      "--bg-color-r": 0,
      "--bg-color-g": 0,
      "--bg-color-b": 0,
      "--text-color-r": 255,
      "--text-color-g": 255,
      "--text-color-b": 255,
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "+=100vh",
        scrub: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen font-sans"
      style={mounted ? {
        backgroundColor: 'rgb(var(--bg-color-r) var(--bg-color-g) var(--bg-color-b))',
        color: 'rgb(var(--text-color-r) var(--text-color-g) var(--text-color-b))'
      } : {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(0, 0, 0)'
      }}
      suppressHydrationWarning
    >
      <div className="fixed top-4 left-4 z-20">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Empty space at top */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg mb-2">Scroll Down</p>
          <ChevronsDown className="mx-auto h-8 w-8 animate-bounce" />
        </div>
      </div>

      {/* Footer and Heatmap combined section */}
      {mounted && dimensions.width > 0 && (
        <div className="relative h-[60vh] w-full overflow-hidden">
          {/* Heatmap as background layer */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <Heatmap
              width={dimensions.width}
              height={Math.round(window.innerHeight * 0.6)}
              image="/ThreeToneBlack.svg"
              colors={["#9b8046", "#ffffff", "#9b8046"]}
              colorBack="#ffffff00"
              contour={0.54}
              angle={240}
              noise={0.56}
              innerGlow={0.25}
              outerGlow={0.17}
              speed={0.5}
              scale={1.3}
              offsetY={0.33}
            /> */}
            <Heatmap
              width={dimensions.width}
              height={Math.round(window.innerHeight * 0.6)}
              image="/threetonesvg.svg"
              colors={["#9b8046", "#ffffff", "#9b8046"]}
              colorBack="#ffffff00"
              contour={0.54}
              angle={240}
              noise={0.56}
              innerGlow={0.25}
              outerGlow={0.21}
              speed={0.5}
              scale={heatmapScale}
              offsetY={1.16}
            />
          </div>
          
          {/* Footer overlaying the heatmap */}
          <div className="absolute inset-x-0 z-10 flex items-start justify-center">
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
