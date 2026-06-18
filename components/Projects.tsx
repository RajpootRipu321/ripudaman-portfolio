export default function Projects() {
  const projects = [
    {
      name: "Online Banking System",
      tech: "Java • Spring Boot • REST API • MySQL",
      desc: "Secure banking backend with account management, transactions and authentication."
    },
    {
      name: "Payroll Management System",
      tech: "Java • JDBC • MySQL",
      desc: "Automated employee payroll calculation and salary management."
    },
    {
      name: "Utility Billing System",
      tech: "Java • Spring Boot • MySQL",
      desc: "Generated bills and managed consumer records with REST APIs."
    },
    {
      name: "AI Portfolio Website",
      tech: "Next.js • Tailwind CSS",
      desc: "Interactive portfolio showcasing projects, skills and achievements."
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-cyan-500/30 p-8 hover:-translate-y-2 transition"
          >
            <h3 className="text-3xl font-bold">{p.name}</h3>
            <p className="text-cyan-400 mt-2">{p.tech}</p>
            <p className="text-gray-300 mt-4">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}