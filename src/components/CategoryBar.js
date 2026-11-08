"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

// Sticky category bar for the Products page.
// The arrows slide the row of category names left / right (no scrollbar).
export default function CategoryBar({ items }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function update() {
    const t = trackRef.current;
    if (!t) return;
    setCanPrev(t.scrollLeft > 4);
    setCanNext(t.scrollLeft + t.clientWidth < t.scrollWidth - 4);
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function slide(dir) {
    const t = trackRef.current;
    if (t) t.scrollBy({ left: dir * t.clientWidth * 0.7, behavior: "smooth" });
  }

  const arrow =
    "grid size-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-ink transition enabled:hover:border-amber enabled:hover:bg-brand disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <div className="sticky top-20 z-40 border-b border-black/5 bg-paper/90 backdrop-blur md:top-[116px]">
      <div className="container-x flex items-center gap-3 py-3">
        <button type="button" onClick={() => slide(-1)} disabled={!canPrev} aria-label="Show previous categories" className={arrow}>
          <Icon name="arrow" className="size-4 rotate-180" strokeWidth={2.4} />
        </button>

        <div ref={trackRef} onScroll={update} className="no-scrollbar flex flex-1 gap-2 overflow-x-auto">
          {items.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="shrink-0 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-graphite transition hover:border-amber hover:text-ink"
            >
              {p.title}
            </a>
          ))}
        </div>

        <button type="button" onClick={() => slide(1)} disabled={!canNext} aria-label="Show more categories" className={arrow}>
          <Icon name="arrow" className="size-4" strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
