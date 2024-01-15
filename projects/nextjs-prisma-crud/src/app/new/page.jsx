"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
function NewPage({ params }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.data.title);
          setDescription(data.data.description);
        });

      console.log(params.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(title, description);

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    }

    router.push("/");
    router.refresh();
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-full"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          type="text"
          id="title"
          placeholder="Título"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción
        </label>
        <textarea
          placeholder="Describe tu tarea"
          row="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white p-2 font-bold py-2 px-4 rounded"
          >
            {params.id ? "Actualizar" : "Crear"}
          </button>

          {params.id && (
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white p-2 font-bold py-2 px-4 rounded ml-4"
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                const data = await res.json();
                console.log(data);

                router.push("/");
                router.refresh();
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewPage;
