The output from `vercel build` (which is the one used by `@cloudflare/next-on-pages`) is in `.vercel/output/functions`
(whilst the output from `@cloudflare/next-on-pages` is in `.vercel/output/static`)

To re-build the application:
```
npm i
npm run pages:build
```
