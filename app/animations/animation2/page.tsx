import { LiquidMetal } from "@paper-design/shaders-react";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

export default function Animation2() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <div className="fixed top-4 left-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
      <div className="text-center text-black mb-8 pt-80">
        <p className="text-lg mb-2">Scroll Down</p>
        <ChevronsDown className="mx-auto h-8 w-8 animate-bounce" />
      </div>

      <LiquidMetal
        width={1280}
        height={720}
        image="/Group43.png"
        colorBack="#ffffff"
        colorTint="#ffffff"
        shape={undefined}
        repetition={2}
        softness={0.1}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.07}
        contour={0.4}
        angle={70}
        speed={1}
        scale={1.1}
        offsetY={0.88}
        fit="contain"
      />
    </div>
  );
}
