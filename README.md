# Enervate Analytics Revamp

Isolated redesign of the Enervate Analytics website. The production repository and
its custom domain are intentionally untouched.

## Local Development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run build
npm run lint
npm test
```

## Deployment

Pushes to `main` deploy the Vite build through `.github/workflows/deploy-pages.yml`.
The site uses hash-based routing so every page works when hosted from a GitHub
Pages project URL.

## Production Backup

`legacy-live-backup/` contains an exact static snapshot of the current production
site, including its assets and original `CNAME`. That nested `CNAME` is archival
only and does not affect this revamp's Pages deployment.
