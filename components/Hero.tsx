export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-28">
      <div className="grid items-end gap-12 md:grid-cols-[1.6fr_1fr]">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Web development with a QA mindset.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Hi, I'm Aishah, a digital marketing associate and WordPress developer in Kuala Lumpur. I design and build websites 
            that are fast, polished, and tested before anyone sees them.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-cobalt px-6 py-3 font-medium text-white transition hover:bg-ink">
              View My Work
            </a>
            <a href="#contact" className="rounded-full border-2 border-ink px-6 py-3 font-medium transition hover:bg-marigold hover:border-marigold">
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative hidden h-64 md:block" aria-hidden="true">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-marigold" />
          <div className="absolute bottom-0 left-4 h-32 w-32 rounded-full border-[14px] border-cobalt" />
        </div>
      </div>
    </section>
  );
}
