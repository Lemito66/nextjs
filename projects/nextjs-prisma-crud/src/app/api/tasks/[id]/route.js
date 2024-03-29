import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function GET(request, { params }) {
  const tasks = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json({
    message: "obteniendo tarea por id: " + params.id,
    data: tasks,
  });
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json({
    message: "Actualizando tarea por id: " + params.id,
    data: taskUpdated,
  });
}

export async function DELETE(request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({
      message: "Eliminando tarea por id: " + params.id,
      data: taskRemoved,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al eliminar tarea por id: " + params.id,
      data: error,
    });
  }
}
