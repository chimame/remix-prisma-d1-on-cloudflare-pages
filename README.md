# Remix + Prisma + D1

This is a sample program that uses Remix and D1 with Prisma that supports Edge Function.

- [Remix](https://remix.run/)
- [Vite](https://vitejs.dev/guide/)
- [Prisma](https://www.prisma.io/)
  - [Prisma ORM Support for Edge Functions is now in Preview](https://www.prisma.io/blog/prisma-orm-support-for-edge-functions-is-now-in-preview)
- [Cloudflare D1](https://developers.cloudflare.com/d1/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages)

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Development

Run the Vite dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Deployment

> [!WARNING]  
> Cloudflare does _not_ use `wrangler.toml` to configure deployment bindings.
> You **MUST** [configure deployment bindings manually in the Cloudflare dashboard][bindings].

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
npm run deploy
```

[bindings]: https://developers.cloudflare.com/pages/functions/bindings/
