// usando prisma
/* import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function loadTasks() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return tasks;
} */

// realizando una petición a la API
async function loadTasks() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const data = await res.json();
  console.log(data);
  return data;
}

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto mt-10">
    <div className="grid grid-cols-3 gap-3">
      {tasks.data.map(({ id, title, description, createdAt }) => (
        <div key={id} className="bg-slate-800 p-3 hover:bg-slate-800 hover:cursor-pointer">
          <h3 className="font-bold text-2xl mb-2">{title}</h3>
          <p>{description}</p>
          <p className="text-sm text-gray-400">{new Date(createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  </section>
  );
}

export default HomePage;
