"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";

const field =
  "w-full rounded-xl border border-black/10 bg-paper px-4 py-3.5 text-ink outline-none transition placeholder:text-steel focus:border-amber focus:bg-white focus:ring-4 focus:ring-sun/20";

// No backend is wired yet: on submit this opens the visitor's email client
// with the message pre-filled. Swap for an API route / form service later.
export default function ContactForm({ products, email }) {
  const preset = useSearchParams().get("product") ?? "";
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const subject = `Website enquiry${d.product ? ` — ${d.product}` : ""}`;
    const body = `Name: ${d.name}\nCompany: ${d.company}\nPhone: ${d.phone}\nEmail: ${d.email}\nInterest: ${d.product}\n\n${d.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-8 rounded-2xl bg-mist p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand"><Icon name="check" strokeWidth={2.6} /></span>
        <h3 className="mt-4 font-display text-2xl font-bold">Thank you!</h3>
        <p className="mt-1 text-graphite/70">Your email app should open with the message ready to send.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-5 text-sm font-bold text-flame">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm font-semibold">
        Full name *
        <input name="name" required className={field} placeholder="Your name" autoComplete="name" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Company
        <input name="company" className={field} placeholder="Company name" autoComplete="organization" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Email *
        <input name="email" type="email" required className={field} placeholder="you@company.com" autoComplete="email" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Phone
        <input name="phone" type="tel" className={field} placeholder="+973" autoComplete="tel" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
        I’m interested in
        <select name="product" defaultValue={products.find((p) => p.slug === preset)?.title ?? ""} className={field}>
          <option value="">General enquiry</option>
          {products.map((p) => (
            <option key={p.slug} value={p.title}>{p.title}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
        Message *
        <textarea name="message" required rows={5} className={field} placeholder="Item, specification, quantity, delivery location…" />
      </label>
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-bold text-ink shadow-lg shadow-amber/25 transition hover:shadow-amber/40 sm:col-span-2 sm:justify-self-start"
      >
        Send message
        <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
      </button>
    </form>
  );
}
