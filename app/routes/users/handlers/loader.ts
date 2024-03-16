import { type LoaderFunctionArgs, json } from "@remix-run/cloudflare";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const users = await context.db.user.findMany()

  return json({ users: users })
}
