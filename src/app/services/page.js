import Icon from "@/components/Icon";
import { CtaBand, IconBadge, PageHero, SectionHeading } from "@/components/ui";
import { process, services } from "@/lib/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  const [featured, ...rest] = services;
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Services that keep projects moving."
        text="Beyond supply, our technical team supports you with sourcing, advice, installation and maintenance."
      />

      <section className="container-x py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Featured service */}
          <div className="relative overflow-hidden rounded-[2rem] bg-brand p-10 lg:row-span-2">
            <span className="grid size-16 place-items-center rounded-2xl bg-ink text-sun">
              <Icon name={featured.icon} className="size-8" />
            </span>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-ink/60">Core service</p>
            <h2 className="mt-2 font-display text-5xl font-extrabold leading-none tracking-tight text-ink">{featured.title}</h2>
            <p className="mt-5 text-lg text-ink/75">{featured.text}</p>
            <ul className="mt-8 space-y-3 font-semibold text-ink">
              {["One consolidated quotation", "Approved-vendor sourcing", "Alternatives when items are scarce", "Order tracking to delivery"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-ink text-sun"><Icon name="check" className="size-3.5" strokeWidth={3} /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {rest.map((s) => (
            <div key={s.title} className="group rounded-[2rem] bg-white p-8 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber/10">
              <IconBadge name={s.icon} />
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/70">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="bg-grid absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading light center eyebrow="Our process" title="Simple, transparent, on schedule." />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-4">
            <span className="absolute top-7 right-[12%] left-[12%] hidden h-0.5 bg-brand md:block" />
            {process.map((step, i) => (
              <li key={step.title} className="relative text-center">
                <span className="relative mx-auto grid size-14 place-items-center rounded-full bg-brand font-display text-2xl font-extrabold text-ink ring-8 ring-ink">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-60 text-sm text-white/60">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
