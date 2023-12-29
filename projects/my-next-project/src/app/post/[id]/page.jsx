import React, { Suspense } from "react";
import Posts from "../page";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  //console.log(props);

  const post = await loadPost(params.id);
  console.log(post);
  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
      <hr></hr>
      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<div>Cargando Publicaciones...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default Page;
