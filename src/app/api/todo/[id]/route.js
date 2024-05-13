import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(request, { params }) {
  const { id } = params;
  try {
    const todoToUpdate = await prisma.todo.findFirst({
      where: { id },
    });

    if (!todoToUpdate) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    let updatedTodo;
    if (request.headers.get("update-type") === "starred") {
      updatedTodo = await prisma.todo.update({
        where: { id },
        data: { isStarred: !todoToUpdate.isStarred },
      });
    }
    if (request.headers.get("update-type") === "isCompleted") {
      updatedTodo = await prisma.todo.update({
        where: { id },
        data: { isCompleted: true },
      });
    }
    return NextResponse.json({ message: "Task updated", updatedTodo });
  } catch (error) {
    console.log("[TODO_POST]:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
