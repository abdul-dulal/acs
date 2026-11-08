import { Suspense } from "react";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { IconBadge, PageHero, SectionHeading } from "@/components/ui";
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
            <div className="bg-dots absolute inset-0 grid place-items-center text-steel">
              <span className="flex flex-col items-center gap-2 text-sm font-semibold">
                <Icon name="pin" className="size-8 text-flame" /> Manama, Bahrain
              </span>
            </div>
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

      {/* Departments */}
      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <div className="bg-grid absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading light center eyebrow="Reach the right team" title="Who would you like to talk to?" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {departments.map((d) => (
              <a
                key={d.title}
                href={`mailto:${company.email}?subject=${encodeURIComponent(d.title)}`}
                className="group rounded-3xl border border-white/10 bg-white/3 p-8 transition hover:border-amber/60 hover:bg-white/6"
              >
                <IconBadge name={d.icon} dark />
                <h3 className="mt-6 font-display text-2xl font-bold">{d.title}</h3>
                <p className="mt-2 text-sm text-white/60">{d.text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-sun">
                  Email this team <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Before you get in touch." text="Quick answers to the questions we hear most often." />
        </div>
        <div className="space-y-3 lg:col-span-8">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 open:ring-amber/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-bold">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-mist text-ink transition group-open:rotate-45 group-open:bg-brand">
                  <Icon name="close" className="size-4 rotate-45" strokeWidth={2.4} />
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-graphite/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

const departments = [
  { icon: "chat", title: "Sales & Quotations", text: "Pricing, availability and lead times for products and material lists." },
  { icon: "cog", title: "Technical Support", text: "Product selection, specifications, installation and maintenance help." },
  { icon: "headset", title: "After-Sales & Accounts", text: "Warranty, spare parts, invoices and delivery follow-ups." },
];

const faqs = [
  { q: "How quickly will I receive a quotation?", a: "Most enquiries for stock items are quoted within one working day. Larger BOQs or specialised items may take a little longer — we’ll confirm a timeline when we receive your request." },
  { q: "Can you source items that aren’t listed on the website?", a: "Yes. Send us the specification, brand or part number and our sourcing team will find the item or suggest approved alternatives." },
  { q: "Do you deliver across Bahrain?", a: "We deliver to sites, plants and offices across the Kingdom, including staged deliveries that follow your project schedule." },
  { q: "Do your products come with certificates?", a: "Where required, we supply test certificates, data sheets and manufacturer documentation with the order." },
];
