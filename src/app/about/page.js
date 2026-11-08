import Image from "next/image";
import Icon from "@/components/Icon";
import Wings from "@/components/Wings";
import { CtaBand, IconBadge, PageHero, SectionHeading } from "@/components/ui";
import { company, history, leadership, stats, values } from "@/lib/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About ASC"
        title="A company of integrity."
        text="We operate with an understated professionalism, a kind of quiet pride born of hard-earned success."
      />

      {/* Story */}
      <section className="container-x grid gap-14 py-24 lg:grid-cols-2">
        <div className="relative">
          <div className="bg-dots relative overflow-hidden rounded-[2rem] bg-mist p-10">
            <p lang="ar" dir="rtl" className="font-arabic text-4xl font-bold text-graphite">{company.nameAr}</p>
            <p className="mt-2 font-display text-8xl font-extrabold tracking-tight text-ink">ASC</p>
            <Wings className="mt-6 w-full max-w-sm" />
          </div>
          <div className="absolute -right-4 -bottom-6 rounded-2xl bg-ink p-6 text-white shadow-2xl sm:right-8">
            <p className="font-display text-5xl font-extrabold text-sun">{stats[0].value}</p>
            <p className="text-sm text-white/60">{stats[0].label}</p>
          </div>
        </div>

        <div className="lg:pt-6">
          <SectionHeading eyebrow="Our history" title="Rooted in heritage, built for growth." text={company.intro} />
          <div className="mt-8 space-y-6">
            {history.map((h) => (
              <div key={h.title} className="border-l-[3px] border-amber pl-5">
                <p className="font-display text-xl font-bold uppercase tracking-wide text-flame">{h.title}</p>
                <p className="mt-1 leading-relaxed text-graphite/80">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="container-x grid gap-5 pb-24 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-white">
          <Wings className="pointer-events-none absolute -right-10 -bottom-10 w-72 opacity-20" />
          <Icon name="target" className="size-10 text-sun" />
          <h3 className="mt-8 font-display text-4xl font-extrabold">Our Mission</h3>
          <p className="mt-4 max-w-md text-white/65">
            To constantly and surely grow the wealth and well-being of our shareholders, employees, clients,
            customers and community.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand p-10 text-ink">
          <Icon name="eye" className="size-10" />
          <h3 className="mt-8 font-display text-4xl font-extrabold">Our Vision</h3>
          <p className="mt-4 max-w-md text-ink/75">
            Best integrated services provider in the region — every business partner satisfied, every employee
            committed, every commitment delivered, focused on mutual growth and profit.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Our values" title="We believe that…" text="Our values serve to guide our actions and determine how we behave in the world." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white p-8 text-center ring-1 ring-black/5">
                <div className="flex justify-center"><IconBadge name={v.icon} /></div>
                <h3 className="mt-6 font-display text-2xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-graphite/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-x pt-24">
        <SectionHeading center eyebrow="Leadership" title="Our management team." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m) => (
            <div key={m.name} className="group flex items-center gap-5 rounded-3xl bg-white p-5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber/10">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-mist ring-2 ring-amber/40">
                <Image src={m.photo} alt={m.name} fill sizes="80px" className="object-cover object-top" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">{m.name}</h3>
                <p className="mt-1 text-sm text-graphite/70">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container-x py-24">
        <dl className="grid overflow-hidden rounded-[2rem] bg-ink sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`p-10 ${i > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""}`}>
              <dd className="font-display text-6xl font-extrabold text-brand">{s.value}</dd>
              <dt className="mt-2 text-white/60">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <CtaBand />
    </>
  );
}
