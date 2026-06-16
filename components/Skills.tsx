const skills = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "MySQL",
  "Hibernate",
  "JDBC",
  "Spring Security",
  "Git",
  "GitHub",
  "Postman",
  "SQL",
  "Python",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="uppercase tracking-[0.3em] text-cyan-400 mb-3">
        Tech Stack
      </p>

      <h2 className="text-5xl font-black mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-cyan-300 transition hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}