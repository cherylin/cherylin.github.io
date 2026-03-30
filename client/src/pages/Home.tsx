/*
 * Home: Quiet Studio — Wabi-Sabi Minimalism
 * Combined Home + About. A single page that introduces Qian
 * with a literary, abstract tone. Communicates curiosity,
 * the joy of connecting dots, and the urge to write things down.
 * Cormorant Garamond headings, Nunito Sans body.
 */

import { Link } from "wouter";

export default function Home() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-10 text-foreground">
        Hello, world.
      </h1>

      <div className="space-y-6 text-foreground/80 leading-relaxed max-w-xl text-[16.5px]">
        <p>
          I'm Qian — a curious mind drawn to the spaces between things.
          Where engineering meets philosophy. Where systems thinking meets
          human intuition. I find that the most interesting ideas live not
          in the center of any one discipline, but at the quiet edges where
          they overlap.
        </p>

        <p>
          I'm interested in many things, perhaps too many. But I've learned
          that the dots always connect eventually — sometimes in ways you
          never expect. A film echoes a conversation. A book reframes a
          problem. A walk untangles what hours of thinking could not.
        </p>

        <p>
          I write because I need to. Not out of obligation, but out of the
          same impulse that makes you underline a sentence in a book or
          scribble in the margins. Some thoughts refuse to stay inside.
        </p>

        <p className="italic text-foreground/60">
          This is a place to think slowly in a world that moves fast.
        </p>

        <p>
          If you're curious too, you might enjoy my{" "}
          <Link href="/writing">
            <span className="wabi-link">writing</span>
          </Link>
          .
        </p>
      </div>

      {/* Separator */}
      <div className="mt-14">
        <hr className="border-t border-border/40 max-w-[48px]" />
      </div>

      {/* Social links */}
      <div className="mt-6 text-sm text-muted-foreground/70">
        <p>
          Find me on{" "}
          <a
            href="https://www.linkedin.com/in/qian-lin-27b8bb15a"
            target="_blank"
            rel="noopener noreferrer"
            className="wabi-link"
          >
            LinkedIn
          </a>
          {" "}and{" "}
          <a
            href="https://github.com/cherylin"
            target="_blank"
            rel="noopener noreferrer"
            className="wabi-link"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
