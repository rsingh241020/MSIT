import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { connectToDatabase } from "@/lib/db";
import { newsletterSchema } from "@/lib/validations";
import { NewsletterSubscription } from "@/models/newsletter-subscription";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);

    await connectToDatabase();
    const subscription = await NewsletterSubscription.findOneAndUpdate(
      { email: data.email },
      { email: data.email },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

    return NextResponse.json(
      { success: true, id: subscription._id, message: "Newsletter subscription saved." },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message || "Validation failed." },
        { status: 400 },
      );
    }

    return NextResponse.json({ error: "Something went wrong while saving the subscription." }, { status: 500 });
  }
}
