import Link from "next/link";
import Icon from "@/components/Icon";
import { Button, CtaBand, IconBadge, PageHero } from "@/components/ui";
import { products } from "@/lib/site";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        eyebrow="Our range"
        title="Quality products for demanding work."
        text="Browse our main categories below. Can’t see what you need? Send us the specification — we source it."
      />

      {/* Category jump bar */}
      <div className="sticky top-20 z-40 border-b border-black/5 bg-paper/90 backdrop-blur md:top-[116px]">
        <div className="container-x flex gap-2 overflow-x-auto py-3">
          {products.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="shrink-0 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-graphite transition hover:border-amber hover:text-ink"
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      <section className="container-x space-y-6 py-20">
        {products.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="grid scroll-mt-48 overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5 lg:grid-cols-12"
          >
            <div className={`relative flex flex-col justify-between gap-10 p-8 sm:p-10 lg:col-span-5 ${i % 2 ? "bg-mist" : "bg-ink text-white"}`}>
              <div className="flex items-center justify-between">
                <IconBadge name={p.icon} dark={!(i % 2)} />
                <span className={`font-display text-7xl font-extrabold ${i % 2 ? "text-ink/10" : "text-white/10"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-4xl font-extrabold tracking-tight">{p.title}</h2>
                <span className="mt-4 block h-1 w-16 rounded-full bg-brand" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-7">
              <p className="text-lg leading-relaxed text-graphite/80">{p.text}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 rounded-xl bg-mist px-4 py-3 text-sm font-semibold">
                    <Icon name="check" className="size-4 text-flame" strokeWidth={2.6} />
                    {it}
                  </li>
                ))}
              </ul>
              <Link href={`/contact?product=${p.slug}`} className="group mt-8 inline-flex items-center gap-2 self-start text-sm font-bold text-flame">
                Enquire about {p.title.toLowerCase()}
                <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border-2 border-dashed border-amber/50 p-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold">Looking for a specific brand or part number?</h2>
            <p className="mt-2 text-graphite/70">Our sourcing team finds specialised items and alternatives quickly.</p>
          </div>
          <Button href="/contact" variant="dark">Send your requirement</Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
