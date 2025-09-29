import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";
import { issues } from "@/db/schema";

export async function GET() {
  try {
    const issues = await db.query.issues.findMany({});
    return NextResponse.json({ data: { issues } });
  } catch (error) {
    console.log("Error getting issues:", error);
    return NextResponse.json(
      { error: "Error getting issues" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const [newIssueResponse] = await db
      .insert(issues)
      .values(await req.json())
      .returning();
    return NextResponse.json({ data: newIssueResponse });
  } catch (error) {
    console.log("Error creating issue:", error);
    return NextResponse.json(
      { error: "Error creating issue" },
      { status: 500 }
    );
  }
}
