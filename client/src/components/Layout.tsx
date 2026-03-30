/*
 * Layout: Quiet Studio — Wabi-Sabi Minimalism
 * Left-aligned asymmetric layout with generous whitespace.
 * Navigation is minimal: name + two links.
 * Content breathes on the left, right side stays open.
 */

import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="pt-10 pb-6 sm:pt-14 sm:pb-8">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:ml-[12%] lg:mr-auto lg:px-0">
          <nav className="flex items-baseline gap-8">
            <Link href="/">
              <span className="font-serif text-xl tracking-tight text-foreground hover:opacity-70 transition-opacity duration-200">
                Qian Lin
              </span>
            </Link>
            <div className="flex items-baseline gap-6 text-[15px]">
              <Link href="/about">
                <span
                  className={`transition-colors duration-200 ${
                    location === "/about"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  About
                </span>
              </Link>
              <Link href="/writing">
                <span
                  className={`transition-colors duration-200 ${
                    location === "/writing"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Writing
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:ml-[12%] lg:mr-auto lg:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer — minimal, just a dot */}
      <footer className="pb-10">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:ml-[12%] lg:mr-auto lg:px-0">
          <div className="text-center lg:text-left">
            <span className="text-muted-foreground/40 text-xs select-none">·</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
