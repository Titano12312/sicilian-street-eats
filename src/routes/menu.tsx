import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Nni Franco U Vastiddaru" },
      { name: "description", content: "Panini, fritti, specialità siciliane. Il menu completo della paninoteca di Via Vittorio Emanuele a Palermo." },
      { property: "og:title", content: "Menu — Nni Franco U Vastiddaru" },
      { property: "og:description", content: "Panini, fritti e street food siciliano dal 1978." },
    ],
  }),
  component: MenuPage,
});

type Dish = { name: string; desc?: string; price: string; tag?: string };
type Section = { title: string; subtitle: string; dishes: Dish[] };

const menu: Section[] = [
  {
    title: "I Panini",
    subtitle: "Capitolo I",
    dishes: [
      { name: "Panino con la Milza", desc: "Milza ripassata, caciocavallo, pane di semola", price: "5,00", tag: "Popolare" },
      { name: "Panino con la Milza al Formaggio", desc: "Variante con doppia scaglia di caciocavallo", price: "5,50", tag: "Popolare" },
      { name: "Vastiddaru", desc: "Porchetta, emmental, salame piccante, funghi piccanti", price: "6,50" },
      { name: "Panino Rustico", desc: "Mortadella, provola, pomodoro secco", price: "5,50" },
      { name: "Panino con Pulled Pork", desc: "Maiale sfilacciato, salsa BBQ siciliana", price: "7,00" },
      { name: "Panino con Panelle e Crocché", desc: "Il classico, semplice e perfetto", price: "3,50" },
    ],
  },
  {
    title: "Il Fritto",
    subtitle: "Capitolo II",
    dishes: [
      { name: "Arancina al Ragù", desc: "Riso, ragù di carne, piselli", price: "3,00" },
      { name: "Arancina al Burro", desc: "Prosciutto e mozzarella", price: "3,00" },
      { name: "Panelle (5 pz)", desc: "Frittelle di ceci, ricetta tradizionale", price: "3,00" },
      { name: "Crocché di Patata", desc: "Patate, prezzemolo, scorza di limone", price: "1,00" },
      { name: "Mozzarella in Carrozza", desc: "Pane raffermo, mozzarella filante", price: "2,50" },
      { name: "Fritto Misto", desc: "Arancine, panelle, crocché, mozzarella in carrozza", price: "9,00", tag: "Popolare" },
    ],
  },
  {
    title: "Specialità",
    subtitle: "Capitolo III",
    dishes: [
      { name: "Samosa Siciliana", desc: "Versione palermitana del classico arabo", price: "2,50" },
      { name: "Sfincione", desc: "Pizza palermitana con cipolla, acciuga, caciocavallo", price: "3,00" },
      { name: "Caponata", desc: "Melanzane, sedano, olive, agrodolce", price: "5,00" },
      { name: "Polpo Bollito", desc: "Servito tiepido con olio e limone", price: "8,00" },
    ],
  },
  {
    title: "Da Bere",
    subtitle: "Capitolo IV",
    dishes: [
      { name: "Birra Messina 33cl", price: "3,00" },
      { name: "Calice di Nero d'Avola", price: "4,00" },
      { name: "Acqua Frizzante / Naturale 50cl", price: "1,50" },
      { name: "Caffè Espresso", price: "1,20" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 md:pt-24">
        <p className="eyebrow">Carta della casa</p>
        <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
          Il <span className="text-accent">menu</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Una piccola enciclopedia dello street food palermitano.
          Tutti i prezzi sono indicativi e in euro.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 md:pb-32">
        {menu.map((section) => (
          <section key={section.title} className="border-t border-border pt-16 mt-16 first:mt-0 first:border-t-0 first:pt-0">
            <div className="grid gap-10 md:grid-cols-12">
              <header className="md:col-span-4 md:sticky md:top-32 md:self-start">
                <p className="eyebrow">{section.subtitle}</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl">{section.title}</h2>
                <div className="rule-gold mt-6 h-px w-16" />
              </header>

              <ul className="md:col-span-8">
                {section.dishes.map((d) => (
                  <li
                    key={d.name}
                    className="grid grid-cols-[1fr_auto] gap-6 border-b border-border/60 py-6 last:border-b-0"
                  >
                    <div>
                      <div className="flex flex-wrap items-baseline gap-3">
                        <h3 className="font-display text-2xl">{d.name}</h3>
                        {d.tag && (
                          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                            · {d.tag}
                          </span>
                        )}
                      </div>
                      {d.desc && (
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                          {d.desc}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl text-foreground">€ {d.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
