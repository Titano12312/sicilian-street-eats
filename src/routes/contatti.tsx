import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti & Orari — Nni Franco U Vastiddaru" },
      { name: "description", content: "Via Vittorio Emanuele 102, Palermo. Aperto fino alle ore 01. Telefono 091 325 987." },
      { property: "og:title", content: "Contatti & Orari — Nni Franco U Vastiddaru" },
      { property: "og:description", content: "Trovaci nel cuore di Palermo, aperti fino a tarda notte." },
    ],
  }),
  component: ContattiPage,
});

const giorni = [
  { d: "Lunedì", h: "10:00 – 01:00" },
  { d: "Martedì", h: "10:00 – 01:00" },
  { d: "Mercoledì", h: "10:00 – 01:00" },
  { d: "Giovedì", h: "10:00 – 01:00" },
  { d: "Venerdì", h: "10:00 – 01:00" },
  { d: "Sabato", h: "10:00 – 01:00" },
  { d: "Domenica", h: "10:00 – 01:00" },
];

function ContattiPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-10 md:pt-24">
        <p className="eyebrow">Vieni a trovarci</p>
        <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
          Contatti<br />
          & <span className="text-accent">orari</span>.
        </h1>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-12 lg:gap-12 lg:px-10 md:pb-32">
        <div className="space-y-12 lg:col-span-5">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="h-3 w-3" /> Indirizzo
            </p>
            <p className="mt-3 font-display text-2xl leading-snug">
              Via Vittorio Emanuele, 102<br />
              90133 Palermo, PA
            </p>
            <a
              href="https://maps.google.com/?q=Via+Vittorio+Emanuele+102+Palermo"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block border-b border-accent pb-0.5 text-sm tracking-wide hover:text-accent"
            >
              Indicazioni su Google Maps →
            </a>
          </div>

          <div>
            <p className="eyebrow flex items-center gap-2">
              <Phone className="h-3 w-3" /> Telefono
            </p>
            <a
              href="tel:+39091325987"
              className="mt-3 block font-display text-2xl hover:text-accent"
            >
              091 325 987
            </a>
          </div>

          <div>
            <p className="eyebrow flex items-center gap-2">
              <Facebook className="h-3 w-3" /> Seguici
            </p>
            <a
              href="https://m.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block font-display text-2xl hover:text-accent"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-2">
            <Clock className="h-3 w-3" /> Orari della settimana
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {giorni.map((g) => (
              <li
                key={g.d}
                className="flex items-baseline justify-between py-4"
              >
                <span className="font-display text-xl">{g.d}</span>
                <span className="font-mono text-sm tracking-wider text-foreground/80">
                  {g.h}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Servizio al banco, asporto e consegna a domicilio. Prezzo medio:
            <span className="text-foreground"> 1 – 10 € a persona</span>.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <iframe
            title="Mappa"
            src="https://www.google.com/maps?q=Via+Vittorio+Emanuele+102+Palermo&output=embed"
            className="h-[420px] w-full grayscale-[40%]"
            loading="lazy"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
