# Deploy su Cloudflare Pages

Il progetto è configurato per Cloudflare Pages tramite il preset Nitro `cloudflare-pages`.
Il build produce `dist/` con `dist/_worker.js` (modalità advanced) — pronto per essere
caricato da `wrangler pages deploy` o dalla dashboard di Cloudflare.

## Opzione A — Deploy manuale via Wrangler (consigliato)

```bash
# 1. Installa Wrangler (una sola volta)
npm i -g wrangler
wrangler login

# 2. Build
npm run build         # genera ./dist

# 3. Crea il progetto Pages (la prima volta)
wrangler pages project create nni-franco-vastiddaru --production-branch main

# 4. Deploy
wrangler pages deploy dist --project-name nni-franco-vastiddaru
```

A ogni nuovo deploy ripeti soltanto i passi 2 e 4.

## Opzione B — Collega un repo GitHub alla dashboard Pages

1. Esporta il progetto su GitHub (pulsante GitHub in alto a destra in Lovable).
2. Nella dashboard Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Seleziona il repo e usa queste impostazioni di build:
   - **Framework preset**: `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version** (variabile env): `20` o superiore
4. Salva. Ogni push su `main` farà un deploy automatico.

## Variabili d'ambiente

Se aggiungi variabili `VITE_*`, impostale anche nelle **Settings → Environment variables**
del progetto Pages (sia *Production* sia *Preview*).

## Dominio personalizzato

Dopo il primo deploy: **Custom domains** → **Set up a custom domain** e segui la procedura
(richiede che il dominio sia su Cloudflare DNS, oppure di aggiungere i record CNAME indicati).

## Note tecniche

- Il sito usa SSR via TanStack Start. Pages lo esegue come Worker grazie a `dist/_worker.js`.
- `public/_routes.json` esclude asset statici dal Worker per ridurre le invocazioni.
- Se preferisci Cloudflare Workers "puri" invece di Pages, cambia in `vite.config.ts`
  `preset: "cloudflare-pages"` → `preset: "cloudflare-module"` e usa `wrangler deploy`.
