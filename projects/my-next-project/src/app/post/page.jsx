// useState
// useEffect
// render
// esto se hacia antes

import { PostCard } from "@/components/PostCard";



// carga los datos
async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  //console.log(data);
  return data;
}

// Renderiza
async function Posts() {
  const posts = await loadPost();
  console.log(posts);

  /* await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }
  ); */
  return (
    <div>
      {posts.map(({ id, title, body }) => {
        return (
          <PostCard
            key={id}
            id={id}
            title={title}
            body={body}
          />
        );
      })}
    </div>
  );
}

export default Posts;