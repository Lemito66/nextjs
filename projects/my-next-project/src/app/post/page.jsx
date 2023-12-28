// useState
// useEffect
// render
// esto se hacia antes

async function loadPost () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data);
  return data

}

function PostPages() {
  loadPost();
  return (
    <div>page</div>
  )
}

export default PostPages