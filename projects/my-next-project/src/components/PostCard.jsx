"use client";
// Este es un componente de lado del cliente
// que luego lo vamos a importar a un componente de lado del servidor

import Link from "next/link";
export function PostCard({ id, title, body }) {
  return (
    <div key={id}>
      <Link href={`/post/${id}`}>
        <h2>
          Post {id} {title}
        </h2>
      </Link>
      <p>{body}</p>
    </div>
  );
}
