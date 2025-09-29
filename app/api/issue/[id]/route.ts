import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";
import { issues } from "@/db/schema";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const issue = await db.query.issues.findFirst({
      where: eq(issues.id, parseInt(id)),
    });
    return NextResponse.json({ data: issue });
  } catch (error) {
    console.log("Error getting issue:", error);
    return NextResponse.json({ error: "Error getting issue" }, { status: 404 });
  }
}
