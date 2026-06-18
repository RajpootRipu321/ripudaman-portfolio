export default function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Spring Security",
    "Hibernate",
    "JDBC",
    "MySQL",
    "Git",
    "GitHub",
    "Next.js",
    "React",
    "Tailwind CSS"
  ];

  return (
    <section className="py-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
        Technical Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 rounded-full border border-cyan-400 hover:bg-cyan-500 hover:text-black transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}