/*
 * Layout: Quiet Studio — Wabi-Sabi Minimalism
 * Lora + Nunito Sans typography.
 * Centered layout for web, responsive for mobile.
 * Header: name + Writing + dark/light toggle + EN/中 toggle.
 */

import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LanguageContext";
import { Moon, Sun } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="pt-10 pb-6 sm:pt-14 sm:pb-8">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <nav className="flex items-center justify-between">
            {/* Left: name + nav */}
            <div className="flex items-baseline gap-8">
              <Link href="/">
                <span className="font-serif text-[22px] tracking-tight text-foreground hover:opacity-70 transition-opacity duration-200">
                  Qian Lin
                </span>
              </Link>
              <div className="flex items-baseline gap-6 text-[15px]">
                <Link href="/writing">
                  <span
                    className={`transition-colors duration-200 ${
                      location.startsWith("/writing")
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang === "en" ? "Writing" : "文章"}
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: toggles */}
            <div className="flex items-center gap-1">
              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="p-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 select-none"
                aria-label="Toggle language"
                title={lang === "en" ? "切换到中文" : "Switch to English"}
              >
                {lang === "en" ? "中" : "EN"}
              </button>

              {/* Divider */}
              <span className="text-border select-none text-[13px]">/</span>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Toggle theme"
                title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? (
                  <Moon size={16} strokeWidth={1.5} />
                ) : (
                  <Sun size={16} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
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

      {/* Footer — minimal */}
      <footer className="pb-10">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <span className="text-muted-foreground/40 text-xs select-none">·</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
