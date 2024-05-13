import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {}

export async function POST(request) {
  try {
    const { task } = await request.json();

    console.log(task);
    const addedTask = await prisma.todo.create({
      data: {
        text: task,
      },
    });
    return NextResponse.json({ message: "Task added", addedTask });
  } catch (error) {
    console.log("[TODO_POST]:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
