import { Suspense } from "react";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { company, products } from "@/lib/site";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  const cards = [
    { icon: "phone", label: "Call us", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { icon: "mail", label: "Email us", value: company.email, href: `mailto:${company.email}` },
    { icon: "pin", label: "Visit us", value: company.address },
    { icon: "clock", label: "Working hours", value: company.hours },
  ];

  return (
    <>
      <PageHero
        crumb="Contact Us"
        eyebrow="Get in touch"
        title="Let’s talk about your requirement."
        text="Call, email or send the form — our team usually responds within one working day."
      />

      <section className="container-x relative z-10 -mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => {
          const Tag = c.href ? "a" : "div";
          return (
            <Tag
              key={c.label}
              {...(c.href ? { href: c.href } : {})}
              className="group rounded-3xl bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-1"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-brand text-ink">
                <Icon name={c.icon} />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-steel">{c.label}</p>
              <p className="mt-1 font-semibold break-words">{c.value}</p>
            </Tag>
          );
        })}
      </section>

      <section className="container-x grid gap-8 py-20 lg:grid-cols-12">
        <div className="rounded-[2rem] bg-white p-8 ring-1 ring-black/5 sm:p-10 lg:col-span-7">
          <h2 className="font-display text-4xl font-extrabold tracking-tight">Send us a message</h2>
          <p className="mt-2 text-graphite/70">Tell us what you need and we’ll prepare a quotation.</p>
          <Suspense>
            <ContactForm products={products.map((p) => ({ slug: p.slug, title: p.title }))} email={company.email} />
          </Suspense>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-5">
          <div className="relative min-h-80 flex-1 overflow-hidden rounded-[2rem] bg-mist ring-1 ring-black/5">
            <iframe
              title="ASC location map"
              src="https://www.google.com/maps?q=Manama,Bahrain&output=embed"
              className="absolute inset-0 size-full grayscale-[60%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-[2rem] bg-ink p-8 text-white">
            <p lang="ar" dir="rtl" className="font-arabic text-2xl text-sun">{company.nameAr}</p>
            <p className="mt-1 font-display text-3xl font-extrabold">{company.name}</p>
            <p className="mt-3 text-white/60">{company.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
