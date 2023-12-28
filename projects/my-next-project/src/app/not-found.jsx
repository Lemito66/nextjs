import React from 'react'
import Link from 'next/link'
export default function NotFound() {
  return (
    <section>
        <h1>404 - Not Found</h1>
        <p>La página que estás buscando no existe</p>
        <Link href="/">
            Volver
        </Link>
    </section>
  )
}

