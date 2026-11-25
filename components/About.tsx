const skills = ["WordPress", "HTML", "PHP", "CSS", "Figma", "UFT One", "JIRA", "Android Studio","Java", "Git"];

export default function About() {
  return (
    <section id="about" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold">About me</h2>
          <p className="mt-6 text-lg text-paper/80">
            I'm a Computer Science graduate from Universiti Kebangsaan Malaysia who started in software quality assurance. 
            At Edwards Lifesciences, I automated testing workflows that cut a 3-hour manual process down to 55 seconds. That experience taught me to catch 
            problems early and care about how things work for real users.
          </p>
          <p className="mt-4 text-lg text-paper/80">
            Today I'm a Digital Marketing Associate at Enviros Survey and Consultancy, where I build and manage WordPress websites that support the 
            company's online presence. I bring together development, marketing, and QA thinking, so the sites I make aren't just good-looking. 
            They're reliable, easy to navigate, and built to serve a purpose.
          </p>
          <p className="mt-4 text-lg text-paper/80">
          I learn new tools quickly, I sweat the details, and I like work that makes people's lives easier.
          </p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold">What I work with</h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <li key={s} className="rounded-full border bsorder-paper/30 px-4 py-2">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
