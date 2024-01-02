import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
/* export async function GET(request, { params }) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json({
    message: "obteniendo tarea por id: ",
    data: tasks,
  });
}

export async function POST(request, { params }) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json({
    message: "Creación de tarea exitosa",
  });
}

export function PUT(request, { params }) {
    return NextResponse.json({
      message: "Actualizando tarea por id: " + params.id,
    });
  } */