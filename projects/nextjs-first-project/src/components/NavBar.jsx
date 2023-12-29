import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-slate-400 flex justify-between items-center px-20 font-bold text-black">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
