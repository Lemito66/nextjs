import Link from "next/link";

export const metadata = {
  title: "Tienda Oficial",
  description: "Primera aplicación con Next.js",
  keywords: "nextjs, react, javascript, ecommerce, tienda",
  
};
export default function StoreLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Sección Tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorías</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
