"use client";   
// Este es un componente de lado del cliente 
// que luego lo vamos a importar a un componente de lado del servidor
export function PostCard({ id, title, body }) {
  return (
    <div key={id}>
      <h2>Post {id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => {alert("Funcionando")}}>Click</button>
    </div>
  );
}
