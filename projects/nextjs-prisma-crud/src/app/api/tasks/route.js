import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json({
    message: "Tareas obtenidas satisfactoriamente",
    data: tasks,
  });
}
export async function POST(request, { params }) {
  const { title, description } = await request.json();
  const data = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  console.log(data);
  return NextResponse.json({
    message: "Creación de tarea exitosa",
  });
}
