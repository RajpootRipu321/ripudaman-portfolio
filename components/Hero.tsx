export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-5 tracking-[0.35em] text-cyan-400 uppercase">
          Welcome to My Portfolio
        </p>

        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
          Ripudaman Singh
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-slate-200 md:text-4xl">
          Java Backend Developer
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          I build secure, scalable, and maintainable backend systems using
          Java, Spring Boot, REST APIs, MySQL, and clean architecture.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}