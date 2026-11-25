import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-4xl font-bold">Projects</h2>

      <ul className="mt-10 border-t border-ink/20">
        {projects.map((p) => (
          <li key={p.title} className="border-b border-ink/20">
            <a
              //href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-3 py-8 transition-colors hover:bg-white md:grid-cols-[1fr_2fr_auto] md:gap-10 md:px-4"
            >
              <h3 className="font-display text-2xl font-semibold group-hover:text-cobalt">{p.title}</h3>
              <div>
                <p className="text-muted">{p.description}</p>
                <p className="mt-3 text-sm font-medium">{p.tech.join(", ")}</p>
              </div>
              <span className="text-muted md:text-right">{p.year}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
