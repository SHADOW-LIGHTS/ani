import { Heatmap } from "@paper-design/shaders-react";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

export default function Animation3() {
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
      <div className="bg-linear-to-br from-white to-gray-200 p-4 rounded-lg z-10">
        <Heatmap
          width={1280}
          height={720}
          image="/Group43.png"
          colors={["#9b8046", "#ffffff"]}
          colorBack="#ffffff"
          contour={0.04}
          angle={0}
          noise={0.48}
          innerGlow={1}
          outerGlow={0.05}
          speed={0.48}
          scale={1.1}
          offsetY={0.75}
        />
      </div>
    </div>
  );
}
