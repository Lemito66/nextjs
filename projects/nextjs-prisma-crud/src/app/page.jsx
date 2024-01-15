import { TaskCard } from "@/components/TaskCard";
// usando prisma
import { prisma } from "@/libs/prisma";
async function loadTasks() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return tasks;
}

// realizando una petición a la API si la creo con otro framework
/* async function loadTasks() {
  const res = await fetch("/api/tasks");
  const data = await res.json();
  console.log(data);
  return data;
} */

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto mt-10">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map(({ id, title, description, createdAt }) => (
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
