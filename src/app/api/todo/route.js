import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const todos = await prisma.todo.findMany({ where: { isCompleted: false } });
    return NextResponse.json({ message: "todos fetched", todos });
  } catch (error) {
    console.log("[TODO_GET]:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { task } = await request.json();
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
