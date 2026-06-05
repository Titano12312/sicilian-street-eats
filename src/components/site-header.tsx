import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Casa" },
  { to: "/menu", label: "Menu" },
  { to: "/storia", label: "Storia" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="eyebrow text-[0.6rem]">Palermo · dal 1978</span>
          <span className="font-display text-2xl tracking-tight">
            Nni Franco <span className="text-accent">U Vastiddaru</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground border-b border-accent pb-1" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+39091325987"
          className="hidden text-sm tracking-wide text-foreground/80 hover:text-accent md:block"
        >
          091 325 987
        </a>

        <button
          aria-label="Apri menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+39091325987" className="py-3 text-sm text-accent">
              091 325 987
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
