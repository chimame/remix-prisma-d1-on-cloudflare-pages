# Remix + Prisma + D1

This is a sample program that uses Remix and D1 with Prisma that supports Edge Function.

- [Remix](https://remix.run/)
- [Vite](https://vitejs.dev/guide/)
- [Prisma](https://www.prisma.io/)
  - [Prisma ORM Support for Edge Functions is now in Preview](https://www.prisma.io/blog/prisma-orm-support-for-edge-functions-is-now-in-preview)
- [Cloudflare D1](https://developers.cloudflare.com/d1/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages)

## Notes

As shown in this repository, if you build Remix and D1 for one worker, the file size will exceed 1MB. Please note that if this happens, you will not be able to deploy with a free Cloudflare account.

If you want to deploy with a free account, you can avoid this by building Remix and Prisma into separate Cloudflare Workers and using [Service Bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/).
Cloudflare now supports connecting Service Bindings with [RPC](https://blog.cloudflare.com/javascript-native-rpc), so it's not bad to use.

A sample using Service Bindings can be found here.

https://github.com/chimame/connect-remix-and-prisma-d1-using-rpc-on-cloudflare-pages

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
