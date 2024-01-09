"use client";
import { useRouter } from "next/navigation";

export function TaskCard({ id, title, description, createdAt }) {
  const router = useRouter();
  return (
    <div
      className="bg-slate-800 p-3 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => router.push(`/tasks/edit/${id}`)}
    >
      <h3 className="font-bold text-2xl mb-2">{title}</h3>
      <p>{description}</p>
      <p className="text-sm text-gray-400">
        {new Date(createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
