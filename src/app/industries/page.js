import Icon from "@/components/Icon";
import Wings from "@/components/Wings";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { channelsIntro, industries, strengths } from "@/lib/site";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Our channels"
        title="Deep coverage across every channel."
        text={channelsIntro}
      />

      <section className="container-x py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {industries.map((ind, i) => (
            <article
              key={ind.title}
              className="group relative flex gap-6 overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-transparent hover:bg-ink hover:text-white"
            >
              <span className="absolute top-6 right-8 font-display text-6xl font-extrabold text-ink/5 transition group-hover:text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-mist text-flame transition group-hover:bg-brand group-hover:text-ink">
                <Icon name={ind.icon} className="size-8" />
              </span>
              <div className="relative">
                <h2 className="font-display text-3xl font-extrabold tracking-tight">{ind.title}</h2>
                <p className="mt-2 text-graphite/75 transition group-hover:text-white/65">{ind.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our strengths"
            title="Four core strengths that help us excel."
            text="We define key business drivers for every channel based on research, data analysis and market learnings — and explore new channels to take brands to shoppers through all mediums."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map(({ icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
                <Icon name={icon} className="size-7 text-flame" />
                <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                <p className="mt-1.5 text-sm text-graphite/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center pt-16">
        <Wings className="w-32 opacity-80" />
      </div>
      <CtaBand />
    </>
  );
}
