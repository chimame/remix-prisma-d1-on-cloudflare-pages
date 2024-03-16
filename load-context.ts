import { type AppLoadContext } from '@remix-run/cloudflare'
import { type PlatformProxy } from "wrangler";
import { connection } from './app/database/client'

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
    db: Awaited<ReturnType<typeof connection>>
  }
}

type GetLoadContext = (args: {
  request: Request
  context: {
    cloudflare: Cloudflare
  } // load context _before_ augmentation
}) => Promise<AppLoadContext>

// Shared implementation compatible with Vite, Wrangler, and Cloudflare Pages
export const getLoadContext: GetLoadContext = async ({ context }) => {
  return {
    ...context,
    db: await connection(
      context.cloudflare.env.RemixPrismaD1,
    ),
  }
}
