import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Liquid Metal Animations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        <Link 
          href="/animations/animation1"
          className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 p-6 text-center text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2">Animation 1</h2>
          <p className="text-blue-100">Classic liquid metal effect</p>
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
            <span className="text-sm font-medium">Click to view →</span>
          </div>
        </Link>

        <Link 
          href="/animations/animation2"
          className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 p-6 text-center text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2">Animation 2</h2>
          <p className="text-purple-100">Enhanced with more effects</p>
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
            <span className="text-sm font-medium">Click to view →</span>
          </div>
        </Link>

        <Link 
          href="/animations/animation3"
          className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-amber-500 to-rose-600 p-6 text-center text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2">Animation 3</h2>
          <p className="text-amber-100">Heatmap effect</p>
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
            <span className="text-sm font-medium">Click to view →</span>
          </div>
        </Link>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Click on any animation to view it in full screen</p>
      </footer>
    </div>
  );
}
