async function getUser (id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await response.json()
  return data.data
}




async function UserPage({params}) {
  const user = await getUser(params.id)
  console.log(params);
  return (
    <div className="bg-slate-400 p-10 rounded-md justify-between">
      <img src={user.avatar} alt={user.first_name} className="m-auto my-4" />
      <h3 className="text-3xl font-bold">{user.id} {user.firs_name} {user.last_name}</h3>
      <p>email: {user.email}</p>
    </div>
  )
}

export default UserPage