"use client";
import { useRouter } from "next/navigation";

/* export const metadata = {
  title: "About Page",
  description: "Primera aplicación con Next.js",
  keywords: "nextjs, react, javascript, ecommerce, tienda",
}; */
export default function AboutPage() {
  const router = useRouter(); // Hook de Next.js para obtener el objeto router y poder navegar entre páginas
  return (
    <section>
      <h1>About Page</h1>
      <p>fdgffdgdfgdfgsf</p>

      <button
        className="bg-sky-500 rounded-md"
        onClick={() => {
          router.push("/"); // Navegar a la página de inicio
        }}
      >
        Clic
      </button>
    </section>
  );
}
