"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg">
            C
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cherision
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/ch6r1x-1g/Cherision"
            target="_blank"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
