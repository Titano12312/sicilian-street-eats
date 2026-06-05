import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import streetImg from "@/assets/palermo-street.jpg";

export const Route = createFileRoute("/storia")({
  head: () => ({
    meta: [
      { title: "La nostra storia — Nni Franco U Vastiddaru" },
      { name: "description", content: "Dal 1978, una paninoteca nel cuore antico di Palermo. La storia di Franco e della vastedda con la milza." },
      { property: "og:title", content: "La nostra storia — Nni Franco U Vastiddaru" },
      { property: "og:description", content: "Quasi mezzo secolo di street food siciliano in Via Vittorio Emanuele." },
      { property: "og:image", content: "/og-storia.jpg" },
    ],
  }),
  component: StoriaPage,
});

function StoriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-10 md:pt-24">
        <p className="eyebrow">Dal 1978</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-8xl">
          Una <em className="not-italic text-accent">vastedda</em><br />
          chiamata casa.
        </h1>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <img
          src={streetImg}
          alt="Via Vittorio Emanuele, Palermo"
          loading="lazy"
          width={1600}
          height={1100}
          className="aspect-[16/9] w-full object-cover"
        />
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Via Vittorio Emanuele · Palermo
        </p>
      </section>

      <section className="mx-auto mt-24 max-w-3xl px-6 lg:px-10 md:mt-32">
        <div className="space-y-8 font-display text-2xl leading-[1.55] text-foreground/85 md:text-3xl md:leading-[1.5]">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[5.5rem] first-letter:leading-[0.85] first-letter:text-accent">
            La paninoteca aprì in una sera di settembre del 1978, in un piccolo
            spazio al banco che dava sulla strada. Franco serviva una sola cosa:
            la vastedda con la milza, ripassata nello strutto, con caciocavallo
            tagliato a scaglie sottili.
          </p>
          <p>
            Si mangiava in piedi, su carta paglia, ascoltando il rumore del Cassaro
            che non dormiva mai. Quarantasette anni dopo, le cose sono cambiate
            poco — abbiamo aggiunto qualche piatto, un paio di sedie fuori.
          </p>
          <p>
            Ma il pane è ancora quello, la milza è ancora quella, e il banco
            chiude solo quando l'ultima ordinazione è stata servita.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl border-t border-border px-6 py-24 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { n: "47", label: "Anni di servizio" },
            { n: "01:00", label: "Chiusura quotidiana" },
            { n: "6.730", label: "Recensioni dei nostri ospiti" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-7xl text-accent md:text-8xl">{stat.n}</p>
              <p className="eyebrow mt-4">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
