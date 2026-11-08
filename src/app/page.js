import Link from "next/link";
import Icon from "@/components/Icon";
import Wings from "@/components/Wings";
import { Button, CtaBand, Eyebrow, IconBadge, SectionHeading } from "@/components/ui";
import { company, industries, process, products, services, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute top-1/3 -right-40 size-[620px] rounded-full bg-amber/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 size-[420px] rounded-full bg-flame/15 blur-3xl" />

        <div className="container-x relative grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pr-4 pl-1.5 text-sm text-white/80">
              <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink">Bahrain</span>
              {company.tagline}
            </div>
            <h1 className="mt-7 font-display text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl xl:text-8xl">
              Supplying the industries that <span className="text-brand">build Bahrain.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              From valves and pipes to safety gear and on-site services, {company.name} delivers the right material,
              the right specification and a dependable delivery date.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact">Request a quote</Button>
              <Button href="/products" variant="ghost">Explore products</Button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent" />
              <Wings className="animate-float absolute inset-0 m-auto w-[88%] drop-shadow-[0_30px_60px_rgba(247,148,29,0.35)]" />
              <p lang="ar" dir="rtl" className="absolute top-10 right-10 font-arabic text-2xl text-white/80">{company.nameAr}</p>

              <div className="absolute -bottom-4 -left-2 rounded-2xl border border-white/10 bg-coal/90 p-5 shadow-2xl backdrop-blur sm:-left-8">
                <p className="font-display text-4xl font-extrabold text-sun">{stats[0].value}</p>
                <p className="text-sm text-white/60">{stats[0].label}</p>
              </div>
              <div className="absolute -right-2 bottom-20 flex items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-2xl sm:-right-6">
                <span className="grid size-10 place-items-center rounded-xl bg-brand"><Icon name="check" className="size-5" strokeWidth={2.6} /></span>
                <div>
                  <p className="text-sm font-bold">Genuine products</p>
                  <p className="text-xs text-graphite/70">Approved manufacturers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10">
          <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-8 ${i % 2 ? "pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}>
                <dt className="text-sm text-white/55">{s.label}</dt>
                <dd className="mt-1 font-display text-4xl font-extrabold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-brand py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...industries, ...industries].map((ind, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl font-bold uppercase tracking-wide text-ink">
              {ind.title}
              <span className="size-2 rotate-45 bg-ink" />
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT INTRO */}
      <section className="container-x grid gap-14 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="A one-stop industrial partner, rooted in Bahrain."
            text={`${company.name} brings together a broad product range, technical know-how and local service, so contractors and plant teams can buy with confidence and build without delays.`}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Single-source procurement", "Engineer-backed advice", "Local stock & fast delivery", "After-sales you can reach"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-semibold">
                <span className="grid size-6 place-items-center rounded-full bg-brand"><Icon name="check" className="size-3.5" strokeWidth={3} /></span>
                {t}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="dark" className="mt-10">More about ASC</Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-dots col-span-2 flex items-end justify-between rounded-3xl bg-mist p-8">
            <div>
              <p className="font-display text-6xl font-extrabold text-ink">{stats[1].value}</p>
              <p className="mt-1 text-graphite/70">{stats[1].label}</p>
            </div>
            <Wings className="w-40" />
          </div>
          <div className="rounded-3xl bg-ink p-7 text-white">
            <Icon name="target" className="size-8 text-sun" />
            <p className="mt-6 font-display text-2xl font-bold">Our mission</p>
            <p className="mt-2 text-sm text-white/60">Keep every project supplied on spec, on time.</p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <Icon name="eye" className="size-8 text-flame" />
            <p className="mt-6 font-display text-2xl font-bold">Our vision</p>
            <p className="mt-2 text-sm text-graphite/70">Bahrain’s most trusted industrial supply partner.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-mist py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Products" title="Everything your site and plant need." />
            <Button href="/products" variant="outline">View all products</Button>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Link
                key={p.slug}
                href={`/products#${p.slug}`}
                className="group relative overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber/10"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <IconBadge name={p.icon} />
                  <span className="font-display text-sm font-bold text-steel">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/70">{p.text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-flame">
                  Learn more <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="bg-grid absolute inset-0" />
        <div className="container-x relative grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-36">
              <SectionHeading
                light
                eyebrow="Services"
                title="More than supply. Support at every stage."
                text="Our team stays with you from selection to installation and long after handover."
              />
              <Button href="/services" className="mt-10">All services</Button>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:col-span-8">
            {services.map((s, i) => (
              <div key={s.title} className="group bg-ink p-8 transition hover:bg-coal">
                <div className="flex items-center justify-between">
                  <IconBadge name={s.icon} dark />
                  <span className="font-display text-5xl font-extrabold text-white/5 transition group-hover:text-amber/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-x py-24">
        <SectionHeading
          center
          eyebrow="Industries"
          title="Trusted across Bahrain’s key sectors."
          text="Different industries, different standards — we know what each one demands."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.title} className="group rounded-3xl border border-black/10 p-6 transition hover:border-transparent hover:bg-ink hover:text-white">
              <span className="grid size-12 place-items-center rounded-xl bg-mist text-flame transition group-hover:bg-brand group-hover:text-ink">
                <Icon name={ind.icon} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{ind.title}</h3>
              <p className="mt-1.5 text-sm text-graphite/70 transition group-hover:text-white/60">{ind.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/industries" variant="outline">See how we serve each industry</Button>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-mist py-24">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="From enquiry to delivery in four steps." />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title} className="relative rounded-3xl bg-white p-7 ring-1 ring-black/5">
                <span className="font-display text-6xl font-extrabold text-brand">{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-graphite/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
