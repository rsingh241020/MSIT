import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { connectToDatabase } from "@/lib/db";
import { careerApplicationSchema } from "@/lib/validations";
import { CareerApplication } from "@/models/career-application";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = careerApplicationSchema.parse(body);

    await connectToDatabase();
    const submission = await CareerApplication.create(data);

    return NextResponse.json(
      { success: true, id: submission._id, message: "Career application submitted." },
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

    return NextResponse.json({ error: "Something went wrong while saving the application." }, { status: 500 });
  }
}
