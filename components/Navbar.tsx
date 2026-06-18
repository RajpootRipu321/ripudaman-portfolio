export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-cyan-400">
          Ripudaman Singh
        </h1>

        <div className="flex gap-6 text-white">
          <a href="#journey" className="hover:text-cyan-400">
            Journey
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            Resume
          </a>

          <a
            href="https://github.com/RajpootRipu321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ripudaman-singh-023685242"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}