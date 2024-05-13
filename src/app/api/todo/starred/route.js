import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const starredTodo = await prisma.todo.findMany({
      where: { isStarred: true, isCompleted: false },
    });
    return NextResponse.json({ message: "starredTodo fetched", starredTodo });
  } catch (error) {
    console.log("[TODO_GET]:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
