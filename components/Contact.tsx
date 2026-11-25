"use client";

import { useState } from "react";

const EMAIL = "nuraishahsf9@gmail.com"; // replace with your email

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-md border border-ink/25 bg-white px-4 py-3 focus:border-cobalt";

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold">Contact</h2>
          <p className="mt-6 text-lg text-muted">
            Have a project or a job opening? Send me a message and I'll reply within two days.
          </p>
          <p className="mt-6">
            My email: <a href={`mailto:${EMAIL}`} className="font-medium text-cobalt underline underline-offset-4">{EMAIL}</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            Name
            <input name="name" required className={field} />
          </label>
          <label className="block">
            Email
            <input name="email" type="email" required className={field} />
          </label>
          <label className="block">
            Message
            <textarea name="message" rows={5} required className={field} />
          </label>
          <button type="submit" className="rounded-full bg-cobalt px-6 py-3 font-medium text-white transition hover:bg-ink">
            Send message
          </button>
          {sent && <p role="status" className="text-muted">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
    </section>
  );
}
