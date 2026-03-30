/*
 * Home: Quiet Studio — Wabi-Sabi Minimalism
 * A gentle landing that communicates curiosity and warmth.
 * No hero image, no call-to-action — just a quiet introduction.
 */

import { Link } from "wouter";

export default function Home() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-8 text-foreground">
        Hello, world.
      </h1>

      <div className="space-y-6 text-foreground/80 leading-relaxed max-w-xl">
        <p>
          I'm Qian — a curious learner who finds joy in the space between 
          ideas. I believe the most interesting things happen at the edges 
          of what we understand.
        </p>
        <p>
          This is a quiet place where I think out loud. Sometimes about 
          technology, sometimes about creativity, sometimes about the 
          questions that don't have answers yet.
        </p>
        <p>
          If you're curious too, you might enjoy my{" "}
          <Link href="/writing">
            <span className="wabi-link">writing</span>
          </Link>
          , or learn a bit more{" "}
          <Link href="/about">
            <span className="wabi-link">about me</span>
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
