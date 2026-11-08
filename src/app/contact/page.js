import { Suspense } from "react";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { IconBadge, PageHero, SectionHeading } from "@/components/ui";
import { company, products } from "@/lib/site";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  const cards = [
    { icon: "phone", label: "Call us", value: `${company.phone}\n${company.phone2}`, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { icon: "mail", label: "Email us", value: company.email, href: `mailto:${company.email}` },
    { icon: "pin", label: "Head Office", value: company.address },
    { icon: "truck", label: "Distribution Center", value: `${company.dcAddress}\n${company.dcPhone} · ${company.dcPhone2}` },
  ];

  return (
    <>
      <PageHero
        crumb="Contact Us"
        eyebrow="Get in touch"
        title="Get in touch with ASC."
        text="Reach our Head Office in Seef District or our Distribution Center at Hidd — or send a business inquiry using the form below."
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
              <p className="mt-1 font-semibold break-words whitespace-pre-line">{c.value}</p>
            </Tag>
          );
        })}
      </section>

      <section className="container-x grid gap-8 py-20 lg:grid-cols-12">
        <div className="rounded-[2rem] bg-white p-8 ring-1 ring-black/5 sm:p-10 lg:col-span-7">
          <h2 className="font-display text-4xl font-extrabold tracking-tight">Business inquiry</h2>
          <p className="mt-2 text-graphite/70">Tell us about your company and how we can work together.</p>
          <Suspense>
            <ContactForm products={products.map((p) => ({ slug: p.slug, title: p.title }))} email={company.email} />
          </Suspense>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-5">
          <div className="relative min-h-80 flex-1 overflow-hidden rounded-[2rem] bg-mist ring-1 ring-black/5">
            <div className="bg-dots absolute inset-0 grid place-items-center text-steel">
              <span className="flex flex-col items-center gap-2 text-sm font-semibold">
                <Icon name="pin" className="size-8 text-flame" /> AlSaffar House, Seef District
              </span>
            </div>
            <iframe
              title="ASC location map"
              src="https://www.google.com/maps?q=AlSaffar+House,+Seef+District,+Bahrain&output=embed"
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
                href={`mailto:${d.email}?subject=${encodeURIComponent(d.title)}`}
                className="group rounded-3xl border border-white/10 bg-white/3 p-8 transition hover:border-amber/60 hover:bg-white/6"
              >
                <IconBadge name={d.icon} dark />
                <h3 className="mt-6 font-display text-2xl font-bold">{d.title}</h3>
                <p className="mt-2 text-sm text-white/60">{d.text}</p>
                <p className="mt-4 text-sm font-semibold text-white/85">{d.email}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-sun">
                  Send an email <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Before you get in touch." text="Fast facts about Abudawood AlSaffar Company." />
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
  { icon: "chat", title: "Business Inquiries", email: company.email, text: "Partnerships, distribution opportunities and general questions about ASC." },
  { icon: "people", title: "Careers", email: company.jobsEmail, text: "Join a Top Employer — send your CV and the role you are interested in." },
  { icon: "headset", title: "Complaints", email: company.complainEmail, text: "Tell us about any issue with our products or service so we can resolve it." },
];

const faqs = [
  { q: "What does ASC do?", a: "Abudawood AlSaffar Company (ASC) provides localized market brand development and distribution services. Established in December 2005, it is one of the Kingdom’s foremost distributors of fast moving consumer packaged goods." },
  { q: "Which brands does ASC distribute?", a: "Our portfolio includes over 40 world-class brands from clients such as Procter & Gamble, Ferrero, Kellogg Company, The Hershey Company, COTY, The Clorox Company, Duracell, Armor All, STP, Dr. Oetker, Dilmah, Panzani and more." },
  { q: "How wide is your coverage in Bahrain?", a: "ASC covers 1,290 retail and wholesale outlets with 130 employees and 60 vehicles — across hypermarkets, supermarkets, mini markets, traditional trade, pharmacies, wholesale, hotels, e-commerce and car speciality shops." },
  { q: "Where is your distribution center?", a: "Our 10,000 m² Distribution Center is at Bahrain Investment Wharf, Hidd — with Dry, TC Non-food, TC Food and Freezer chambers, 17 loading docks and 9,300 pallet positions." },
  { q: "Is ASC ISO certified?", a: "Yes. ASC achieved ISO 9001:2015 certification in 2024, and has been certified as a Top Employer by the Top Employers Institute." },
];
