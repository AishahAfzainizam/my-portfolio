export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} Aishah Afzainizam</p>
        <p className="flex gap-5">
          <a href="https://github.com/AishahAfzainizam" className="hover:text-cobalt">GitHub</a>
          <a href="https://www.linkedin.com/in/nuraishahafzainizam79/" className="hover:text-cobalt">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
