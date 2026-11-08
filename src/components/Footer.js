import Link from "next/link";
import { company, nav, products } from "@/lib/site";
import Icon from "./Icon";
import Wings from "./Wings";
import Year from "./Year";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ink text-white/70">
      <div className="h-1 bg-brand" />
      <Wings className="pointer-events-none absolute -right-24 -bottom-16 w-[520px] opacity-[0.07]" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-5xl font-extrabold tracking-tight text-white">ASC</span>
            <span lang="ar" dir="rtl" className="font-arabic text-lg text-sun">{company.nameAr}</span>
          </div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-steel">{company.name}</p>
          <p className="mt-5 max-w-sm leading-relaxed">
            One of the Kingdom’s foremost distributors of fast moving consumer goods — bringing over 40 world-class
            brands to shelves across the {company.country} since {company.founded}.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-sun">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Key Clients</h3>
          <ul className="mt-4 space-y-2.5">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link href={`/products#${p.slug}`} className="transition hover:text-sun">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Get in touch</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3"><Icon name="pin" className="size-5 shrink-0 text-amber" />Head Office: {company.address}</li>
            <li className="flex gap-3"><Icon name="phone" className="size-5 shrink-0 text-amber" />{company.phone}</li>
            <li className="flex gap-3"><Icon name="mail" className="size-5 shrink-0 text-amber" />{company.email}</li>
            <li className="flex gap-3"><Icon name="truck" className="size-5 shrink-0 text-amber" />Distribution Center: Bahrain Investment Wharf, Hidd</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© <Year /> {company.name}. All rights reserved.</p>
          <p>{company.country}</p>
        </div>
      </div>
    </footer>
  );
}
