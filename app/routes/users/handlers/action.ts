import type { ActionFunctionArgs } from "react-router";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");

  await context.db.user.create({
    data: {
      name: name as string,
      email: email as string,
    },
  });

  return null
}
