import Link from "next/link";
function NotFound() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">Página no encontrada</p>
        <Link href="/" className=" text-blue-500 hover:text-blue-600 text-6xl mt-5">
          Regresar a la página de inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
