// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
"use client"; // Así se indica que se va a usar el cliente de Next.js para renderizar la página del lado del cliente
import { Users } from "@/components/Users";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My Next Project</h1>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
      <Users />
    </div>
  );
}
