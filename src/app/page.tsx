"use client";

import Image from "next/image";
import ScribbleBackground from "@/components/ScribbleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-pink-100">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <ScribbleBackground />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col px-6 md:px-12 py-8 max-w-[1400px] mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/Cherision.svg"
              alt="Cherision Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>

          {/* Top Right Text */}
          <div className="text-sm font-medium text-gray-800 tracking-wide">
            Cherision - UI Icons Library
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl mt-12 md:mt-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[1.1] uppercase">
            Coming Soon
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-500 font-light tracking-tight">
            new type library is coming up soon.
          </p>
        </div>

        {/* Footer / Badge */}
        <div className="w-full flex justify-end pb-8 md:pb-16">

        </div>
      </div>
    </main>
  );
}
