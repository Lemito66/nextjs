// usando prisma
/* import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function loadTasks() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return tasks;
} */

import { TaskCard } from "@/components/TaskCard";

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
          <TaskCard
            key={id}
            id={id}
            title={title}
            description={description}
            createdAt={createdAt}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
