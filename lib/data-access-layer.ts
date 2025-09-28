import { eq } from "drizzle-orm";
import { unstable_cacheTag as cacheTag } from "next/cache";

import { db } from "@/db";
import { issues, users } from "@/db/schema";

import { getSession } from "./auth";
import { mockDelay } from "./utils";

export const getCurrentUser = async () => {
  const session = await getSession();
  if (!session) {
    return null;
  }

  try {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId));
    return result[0] || null;
  } catch (error) {
    console.error("Error getting user by ID:", error);
    return null;
  }
};

export async function getUserByEmail(email: string) {
  try {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result[0] || null;
  } catch (error) {
    console.error("Error getting user by email:", error);
    return null;
  }
}

export async function getIssues() {
  "use cache";
  cacheTag("issues");

  try {
    await mockDelay(2000);
    const result = await db.query.issues.findMany({
      with: {
        user: true,
      },
      orderBy: (issues, { desc }) => [desc(issues.createdAt)],
    });
    return result;
  } catch (error) {
    console.error("Error fetching issues:", error);
    throw new Error("Failed to fetch issues");
  }
}

export async function getIssue(id: number) {
  try {
    await mockDelay(2000);
    const result = await db.query.issues.findFirst({
      with: {
        user: true,
      },
      where: eq(issues.id, id),
    });
    return result;
  } catch (error) {
    console.error("Error fetching issue:", error);
    throw new Error("Failed to fetch issue");
  }
}
