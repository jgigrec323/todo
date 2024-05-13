import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { period } = params;

  if (!["day", "week"].includes(period.toLowerCase())) {
    return new NextResponse(JSON.stringify({ message: "Invalid period" }), {
      status: 400,
    });
  }

  try {
    const now = new Date();
    const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000); // Convert to UTC

    let startDate, endDate;

    if (period === "day") {
      startDate = new Date(
        utcNow.getFullYear(),
        utcNow.getMonth(),
        utcNow.getDate()
      );
      endDate = new Date(
        utcNow.getFullYear(),
        utcNow.getMonth(),
        utcNow.getDate() + 1
      );
    } else if (period === "week") {
      const firstDayOfWeek = new Date(
        utcNow.getFullYear(),
        utcNow.getMonth(),
        utcNow.getDate() - utcNow.getDay() + 1
      );
      startDate = firstDayOfWeek;
      endDate = new Date(
        firstDayOfWeek.getFullYear(),
        firstDayOfWeek.getMonth(),
        firstDayOfWeek.getDate() + 7
      );
    }

    const todos = await prisma.todo.findMany({
      where: {
        isCompleted: false,
        createdAt: {
          gte: startDate.toISOString(),
          lt: endDate.toISOString(),
        },
      },
    });

    return NextResponse.json({ message: "Todos fetched", todos });
  } catch (error) {
    console.error("[TODO_GET]:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
