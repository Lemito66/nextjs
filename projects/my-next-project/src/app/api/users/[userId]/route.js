import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  console.log(request);
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  return NextResponse.json({ data: data, status: "ok" });
}
