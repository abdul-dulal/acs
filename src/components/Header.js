"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav } from "@/lib/site";
import Icon from "./Icon";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-ink text-xs text-white/70 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-sun">
              <Icon name="phone" className="size-3.5" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-sun">
              <Icon name="mail" className="size-3.5" /> {company.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Icon name="clock" className="size-3.5" /> {company.hours}
            </span>
            <span lang="ar" dir="rtl" className="font-arabic text-sm text-sun">{company.nameAr}</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image src="/asc-logo.jpg" alt={`${company.short} — ${company.name}`} width={688} height={228} priority className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-1">
              {nav.slice(0, -1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative block px-4 py-2 text-[15px] font-semibold transition-colors ${
                      isActive(item.href) ? "text-ink" : "text-graphite/80 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-[3px] origin-left rounded-full bg-brand transition-transform duration-300 ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-coal sm:inline-flex"
            >
              Contact Us
              <span className="grid size-6 place-items-center rounded-full bg-brand text-ink">
                <Icon name="arrow" className="size-3.5" strokeWidth={2.4} />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full border border-black/10 text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-nav" className={`overflow-hidden border-t border-black/5 bg-white lg:hidden ${open ? "block" : "hidden"}`}>
          <ul className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-3 font-semibold ${
                    isActive(item.href) ? "bg-mist text-ink" : "text-graphite"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && <span className="size-2 rounded-full bg-brand" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
