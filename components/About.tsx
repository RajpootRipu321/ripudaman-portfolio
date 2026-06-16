export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Left */}
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mb-6 text-5xl font-black leading-tight">
            Backend Engineer <br />
            Passionate About <br />
            Building Scalable Systems
          </h2>

          <p className="text-slate-300 leading-8">
            I'm <span className="font-bold">Ripudaman Singh</span>, a Java
            Backend Developer passionate about creating secure, scalable, and
            production-ready applications using Java, Spring Boot, REST APIs,
            MySQL, and clean architecture principles.
          </p>

          <p className="mt-5 text-slate-400 leading-8">
            Alongside academics, I have earned the NCC Air Wing C Certificate,
            represented at the state level in volleyball, and built multiple
            backend projects including Banking, Payroll, Utility Billing,
            Finance Dashboard, and Wallet Transaction Systems.
          </p>
        </div>

        {/* Right Card */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <h3 className="mb-6 text-2xl font-bold text-cyan-300">
            Quick Highlights
          </h3>

          <div className="space-y-4 text-slate-300">
            <div>☕ Java & Spring Boot</div>
            <div>🔗 REST API Development</div>
            <div>🗄️ MySQL • JDBC • Hibernate</div>
            <div>🏦 Banking & Finance Projects</div>
            <div>⚡ Clean Architecture & MVC</div>
            <div>✈️ NCC Air Wing (C Certificate)</div>
            <div>🏐 State-Level Volleyball Player</div>
          </div>
        </div>
      </div>
    </section>
  );
}