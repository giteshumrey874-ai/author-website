export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <a
          href="#"
          className="text-2xl font-bold tracking-wide text-white hover:text-yellow-400 transition"
        >
          Gitesh Kumar Umrey
        </a>

        <div className="hidden md:flex gap-10 text-gray-300 font-medium">

          <a href="#" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#books" className="hover:text-yellow-400 transition">
            Books
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}