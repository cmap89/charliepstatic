export default function Navbar() {
  return (
    <nav className="flex justify-between p-20">
      <h2 className="w-1/3 text-6xl font-bold">Charles Pariente</h2>
      <ul className="flex w-1/2 items-center justify-between">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
}
