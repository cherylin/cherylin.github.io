/*
 * About: Quiet Studio — Wabi-Sabi Minimalism
 * A personal introduction that reads like a letter.
 * Communicates curiosity, creativity, and humility.
 */

export default function About() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-10 text-foreground">
        About
      </h1>

      <div className="space-y-6 text-foreground/80 leading-relaxed max-w-xl">
        <p>
          Hi, I'm Qian Lin.
        </p>

        <p>
          I'm drawn to the kind of questions that sit at the intersection of 
          disciplines — where engineering meets philosophy, where systems 
          thinking meets human intuition. I believe that the best ideas often 
          emerge not from expertise alone, but from curiosity and the 
          willingness to wander.
        </p>

        <p>
          I care deeply about how we organize knowledge — not just for 
          machines, but for the people and teams who create it. How do 
          organizations remember? How do ideas evolve across conversations? 
          These are the kinds of questions that keep me up at night.
        </p>

        <p>
          When I'm not thinking about these things, I'm probably reading 
          something unexpected, watching a film that changes how I see the 
          world, or having a conversation that goes somewhere neither person 
          anticipated.
        </p>

        <p>
          This site is my notebook — a place to think slowly in a world 
          that moves fast.
        </p>

        {/* Separator */}
        <div className="pt-8">
          <hr className="border-t border-border/50 max-w-[60px]" />
        </div>

        {/* Contact */}
        <div className="pt-2 text-sm text-muted-foreground">
          <p>
            You can find me on{" "}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="wabi-link"
            >
              X
            </a>
            {" "}and{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="wabi-link"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
