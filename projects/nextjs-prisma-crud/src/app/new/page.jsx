"use client";
import { useRouter } from "next/navigation";
function NewPage() {

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    console.log(title, description);

    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    router.push("/");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 lg:w-1/4 md:w-full" onSubmit={handleSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          type="text"
          id="title"
          placeholder="Título"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción
        </label>
        <textarea
          placeholder="Describe tu tarea"
          row="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          id="description"
        ></textarea>
        <button type="submit" className="bg-green-500 text-white p-2 w-full">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
