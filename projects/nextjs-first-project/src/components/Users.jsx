import Link from "next/link";
function Users({ users }) {
  return (
    <ul className="">
      <h1>Home Page </h1>
      {users.map(({ id, first_name, last_name, avatar, email }) => (
        <Link href={`/users/${id}`} key={id}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md text-black justify-between flex">
            <div>
              <h5 className="font-bold">
                {first_name} {last_name}
              </h5>
              <p className="text-slate-100">{email}</p>
            </div>
            <img src={avatar} alt={first_name} className="rounded-full w-18" />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
