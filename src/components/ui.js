import Link from "next/link";
import Icon from "./Icon";
import Wings from "./Wings";

export function Eyebrow({ children, light = false }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-sun" : "text-flame"}`}>
      <span className="h-[3px] w-8 rounded-full bg-brand" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/65" : "text-graphite/75"}`}>{text}</p>}
    </div>
  );
}

export function Button({ href, children, variant = "brand", className = "" }) {
  const styles = {
    brand: "bg-brand text-ink shadow-lg shadow-amber/25 hover:shadow-amber/40",
    dark: "bg-ink text-white hover:bg-coal",
    ghost: "border border-white/25 text-white hover:border-sun hover:text-sun",
    outline: "border border-ink/15 text-ink hover:border-ink",
  };
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
      <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
    </Link>
  );
}

export function PageHero({ eyebrow, title, text, crumb }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 -left-40 size-[480px] rounded-full bg-amber/20 blur-3xl" />
      <Wings className="pointer-events-none absolute -right-10 bottom-0 hidden w-[460px] opacity-90 md:block" />
      <div className="container-x relative py-20 sm:py-28">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/50">
          <Link href="/" className="hover:text-sun">Home</Link>
          <span>/</span>
          <span className="text-white/80">{crumb}</span>
        </nav>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{text}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-14 sm:px-14">
        <Wings className="pointer-events-none absolute -right-16 -bottom-10 w-[420px] opacity-25 mix-blend-multiply" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              Looking for a distribution partner in Bahrain?
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              ASC welcomes new clients for its world-class sales, merchandising, trade marketing and logistics services.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="dark">Business inquiry</Button>
            <Button href="/products" variant="outline" className="border-ink/25">Our brands</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IconBadge({ name, dark = false }) {
  return (
    <span className={`grid size-14 place-items-center rounded-2xl ${dark ? "bg-white/5 text-sun ring-1 ring-white/10" : "bg-ink text-sun"}`}>
      <Icon name={name} className="size-7" />
    </span>
  );
}
