const projects = [
  {
    title: "Utility Billing Backend",
    tech: "Java • Spring Boot • MySQL",
    description:
      "Scalable utility billing backend with REST APIs, layered architecture, and database integration.",
    github: "link",
  },
  {
    title: "Finance Dashboard Backend",
    tech: "Java • Spring Boot",
    description:
      "Backend services for financial analytics, transaction management, and dashboard APIs.",
    github: "#",
  },
  {
    title: "Banking System",
    tech: "Spring Boot • JWT • MySQL",
    description:
      "Secure banking backend with authentication, account management, and money transfer APIs.",
    github: "#",
  },
  {
    title: "Payroll Management",
    tech: "Java • JDBC • MySQL",
    description:
      "Employee payroll automation with salary calculation and CRUD operations.",
    github: "#",
  },
  {
    title: "Wallet Transaction System",
    tech: "Java • REST APIs",
    description:
      "Digital wallet backend supporting secure transactions and balance management.",
    github: "#",
  },
  {
    title: "AI Assistant - Chintu",
    tech: "Python • AI APIs",
    description:
      "Voice-enabled AI assistant capable of reminders, automation, and intelligent responses.",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="uppercase tracking-[0.3em] text-cyan-400 mb-3">
        Featured Work
      </p>

      <h2 className="text-5xl font-black mb-14">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-cyan-400"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 text-cyan-400 text-sm">
              {project.tech}
            </p>

            <p className="mt-5 text-slate-300 leading-7">
              {project.description}
            </p>

            <a
              href={project.github}
              className="mt-8 inline-block rounded-full border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}