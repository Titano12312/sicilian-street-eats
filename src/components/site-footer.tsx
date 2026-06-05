import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <p className="eyebrow">Paninoteca</p>
          <h3 className="mt-3 font-display text-3xl">
            Nni Franco <span className="text-accent">U Vastiddaru</span>
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Street food siciliano servito al banco fino a tarda notte, nel cuore
            antico di Palermo. Pane, milza, panelle, mare e memoria.
          </p>
        </div>

        <div>
          <p className="eyebrow">Trovaci</p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-foreground/80">
            Via Vittorio Emanuele, 102<br />
            90133 Palermo, PA<br />
            <a href="tel:+39091325987" className="mt-2 inline-block hover:text-accent">
              091 325 987
            </a>
          </address>
        </div>

        <div>
          <p className="eyebrow">Esplora</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-accent">Il menu</Link></li>
            <li><Link to="/storia" className="hover:text-accent">La nostra storia</Link></li>
            <li><Link to="/contatti" className="hover:text-accent">Contatti & orari</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center lg:px-10">
          <span>© {new Date().getFullYear()} Nni Franco U Vastiddaru. Tutti i diritti riservati.</span>
          <span className="font-mono uppercase tracking-[0.2em]">Palermo · Sicilia</span>
        </div>
      </div>
    </footer>
  );
}
