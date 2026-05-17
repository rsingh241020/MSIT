import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/db";
import { contactSchema } from "@/lib/validations";
import { ContactSubmission } from "@/models/contact-submission";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    await connectToDatabase();
    const submission = await ContactSubmission.create(data);

    return NextResponse.json(
      { success: true, id: submission._id, message: "Contact request submitted." },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof Error && "issues" in error) {
      const issues = (error as { issues?: Array<{ message: string }> }).issues;
      return NextResponse.json({ error: issues?.[0]?.message || "Validation failed." }, { status: 400 });
    }

    return NextResponse.json({ error: "Something went wrong while saving the contact request." }, { status: 500 });
  }
}
