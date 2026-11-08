import Icon from "@/components/Icon";
import Wings from "@/components/Wings";
import { CtaBand, IconBadge, PageHero, SectionHeading } from "@/components/ui";
import { company, stats, values } from "@/lib/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About ASC"
        title="Built on trust, driven by service."
        text={`${company.name} is a Bahrain-based supplier of industrial materials, equipment and technical services.`}
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
          <SectionHeading eyebrow="Our story" title="A local supplier with a wide reach." />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-graphite/80">
            <p>
              ASC started with a simple promise: give Bahrain’s contractors and industries a supplier they can call
              once and rely on completely. Over the years that promise has grown into a broad portfolio of products and
              services backed by an experienced technical team.
            </p>
            <p>
              Today we work with contractors, plant operators, facility managers and public-sector clients — sourcing
              from approved manufacturers, holding local stock and supporting every order through to installation and
              after-sales.
            </p>
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
            To keep every project and facility we serve supplied with genuine, on-spec materials — delivered on time
            and supported by people who understand the work.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand p-10 text-ink">
          <Icon name="eye" className="size-10" />
          <h3 className="mt-8 font-display text-4xl font-extrabold">Our Vision</h3>
          <p className="mt-4 max-w-md text-ink/75">
            To be the most trusted industrial supply and service partner in the Kingdom of Bahrain, known for
            reliability, quality and long-term relationships.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Our values" title="What every order stands on." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
