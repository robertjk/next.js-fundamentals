import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/data-access-layer";

import IssueForm from "../IssueForm";

export default async function NewIssuePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signin");
  }

  return <IssueForm userId={user.id} />;
}
