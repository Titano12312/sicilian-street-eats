import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-panino.jpg";
import frittoImg from "@/assets/fritto-misto.jpg";
import streetImg from "@/assets/palermo-street.jpg";
import { ArrowUpRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nni Franco U Vastiddaru — Paninoteca a Palermo" },
      { name: "description", content: "Paninoteca storica nel cuore di Palermo. Panino con la milza, panelle, arancine. Aperto fino a tarda notte." },
      { property: "og:title", content: "Nni Franco U Vastiddaru — Paninoteca a Palermo" },
      { property: "og:description", content: "Street food siciliano servito al banco fino a tarda notte." },
    ],
  }),
  component: Home,
});

const highlights = [
  {
    n: "01",
    title: "Panino con la Milza",
    desc: "La vastedda palermitana per eccellenza. Pane di semola, milza ripassata nello strutto, scaglie di caciocavallo.",
  },
  {
    n: "02",
    title: "Fritto Misto",
    desc: "Arancine dorate, panelle croccanti, crocché di patata, mozzarella in carrozza. Lo street food al suo apice.",
  },
  {
    n: "03",
    title: "Vastiddaru",
    desc: "Porchetta, emmental, salame piccante e funghi. Il panino che porta il nome della casa.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 md:grid-cols-12 md:gap-8 md:pt-24 lg:px-10">
          <div className="md:col-span-7 md:pt-8">
            <p className="eyebrow">Palermo · Via Vittorio Emanuele 102</p>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-tight md:text-[5rem]">
              Il pane,<br />
              la <em className="text-accent not-italic">milza</em>,<br />
              la memoria.
            </h1>
            <div className="rule-gold mt-10 h-px w-32" />
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/75">
              Da quasi mezzo secolo serviamo lo street food più antico di Palermo,
              al banco, su carta paglia, fino a tarda notte. Una sosta breve,
              un sapore che resta.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 border-b-2 border-foreground pb-1 text-sm font-medium tracking-wide hover:border-accent hover:text-accent"
              >
                Sfoglia il menu
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium text-foreground">4,1</span>
                <span>· 6.730 recensioni</span>
              </div>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={heroImg}
                alt="Panino con la milza siciliano"
                width={1080}
                height={1440}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden bg-background px-6 py-4 md:block">
              <p className="eyebrow">Specialità</p>
              <p className="mt-1 font-display text-xl">Vastedda · 1978</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Le firme della casa</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Tre piatti.<br />
              Una <span className="text-accent">tradizione</span>.
            </h2>
          </div>
          <ul className="md:col-span-8 md:pl-12">
            {highlights.map((h) => (
              <li
                key={h.n}
                className="grid grid-cols-[3rem_1fr] gap-6 border-t border-border py-8 first:border-t-0 md:grid-cols-[5rem_1fr] md:py-10"
              >
                <span className="font-mono text-sm text-accent">{h.n}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{h.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {h.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 md:py-32">
          <p className="eyebrow">Dai nostri ospiti</p>
          <blockquote className="mt-8 font-display text-3xl leading-tight md:text-5xl md:leading-[1.15]">
            “Street food tipico palermitano, ottima accoglienza.
            <span className="text-accent"> Pietanze buone</span>, servizio veloce,
            il vero sapore di Palermo.”
          </blockquote>
          <p className="mt-8 text-sm tracking-wide text-muted-foreground">
            — Maurizio V. · Local Guide
          </p>
        </div>
      </section>

      {/* TWO IMG */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-10 md:py-32">
        <div>
          <img
            src={frittoImg}
            alt="Fritto misto siciliano"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full object-cover"
          />
          <p className="eyebrow mt-6">Capitolo I</p>
          <h3 className="mt-3 font-display text-3xl">La frittura</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Arancine, panelle, crocché: l'arte del fritto palermitano servito caldo,
            come comanda la tradizione.
          </p>
        </div>
        <div className="lg:pt-24">
          <img
            src={streetImg}
            alt="Via Vittorio Emanuele a Palermo"
            loading="lazy"
            width={1600}
            height={1100}
            className="aspect-[4/3] w-full object-cover"
          />
          <p className="eyebrow mt-6">Capitolo II</p>
          <h3 className="mt-3 font-display text-3xl">Il quartiere</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Nel cuore antico di Palermo, lungo Via Vittorio Emanuele,
            il nostro banco si affaccia sulla città che non dorme.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="relative overflow-hidden bg-foreground px-8 py-20 text-background md:px-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow text-background/60">Vieni a trovarci</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                Aperto fino<br />
                <span className="text-accent">alle ore 01</span>.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-3 border-b-2 border-accent pb-1 text-sm font-medium tracking-wide text-accent hover:text-background hover:border-background"
              >
                Indicazioni & orari
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
