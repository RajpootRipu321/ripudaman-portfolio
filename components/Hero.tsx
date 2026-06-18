export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Backend API",
      tech: "Java • Spring Boot • Spring Security • JWT • MySQL",
      description:
        "RESTful backend for an e-commerce platform featuring authentication, product management, cart operations, order processing, and secure APIs.",
      github: "https://github.com/RajpootRipu321",
    },
    {
      title: "Online Banking System",
      tech: "Java • Spring Boot • REST APIs • MySQL",
      description:
        "Backend banking application supporting account creation, fund transfers, balance inquiries, and transaction management with a scalable architecture.",
      github: "https://github.com/RajpootRipu321",
    },
    {
      title: "Payroll Management System",
      tech: "Java • JDBC • MySQL",
      description:
        "Employee payroll solution for salary processing, CRUD operations, and efficient database management using JDBC.",
      github: "https://github.com/RajpootRipu321",
    },
    {
      title: "Utility Billing System",
      tech: "Java • Spring Boot • MySQL",
      description:
        "Billing platform for consumer record management and automated bill generation using a secure backend.",
      github: "https://github.com/RajpootRipu321",
    },
    {
      title: "Personal Portfolio",
      tech: "Next.js • TypeScript • Tailwind CSS",
      description:
        "Responsive developer portfolio with resume download, project showcase, career timeline, and modern UI.",
      github: "https://github.com/RajpootRipu321",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-14 text-cyan-400">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-cyan-500/20 p-8 bg-[#0d1224] hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>

            <p className="mt-2 text-cyan-400">{project.tech}</p>

            <p className="mt-4 text-gray-300 leading-7">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold hover:scale-105 transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}