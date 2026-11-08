import { useId } from "react";

// Decorative swoosh motif inspired by the wing shape in the ASC logo.
export default function Wings({ className = "" }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`w${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#e2401c" />
          <stop offset="0.35" stopColor="#f7941d" />
          <stop offset="1" stopColor="#fdb913" />
        </linearGradient>
      </defs>
      <g fill={`url(#w${id})`}>
        <path d="M40 262C120 200 250 92 386 14C338 96 222 196 62 272Z" />
        <path d="M30 268C104 214 206 156 342 136C258 176 152 234 46 278Z" opacity="0.92" />
        <path d="M22 274C84 246 164 222 270 228C186 246 104 270 32 284Z" opacity="0.85" />
      </g>
      <path d="M40 262C120 200 250 92 386 14" fill="none" stroke="#e2401c" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
