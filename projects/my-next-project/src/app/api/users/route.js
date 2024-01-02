import { NextResponse } from "next/server";

export async function GET() {
  // query data from database
  // extract params
  // communicate with other services

  //return new Response("Hello World");
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json();

//   return NextResponse.json({ message: "Obteniendo datos", status: "ok" });
  return NextResponse.json({data: data, status: "ok" });
}

export async function POST(request) {
  // El request en este caso es el body de la petición. 
  const {nombre, apellido} = await request.json();
  console.log(nombre, apellido);
  return NextResponse.json({ message: "Creando datos", status: "ok" });
}

export function PUT() {
  return NextResponse.json({ message: "Actualizando datos", status: "ok" });
}
export function DELETE() {
  return NextResponse.json({ message: "Eliminando datos", status: "ok" });
}
