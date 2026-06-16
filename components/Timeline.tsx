const timeline = [
  {
    year: "2019",
    title: "Class 10",
    description:
      "Completed secondary education with a strong academic foundation and developed interest in technology.",
  },
  {
    year: "2021",
    title: "Class 12",
    description:
      "Completed higher secondary education and decided to pursue Computer Science Engineering.",
  },
  {
    year: "2022",
    title: "Started B.Tech",
    description:
      "Began Computer Science Engineering journey and learned programming fundamentals.",
  },
  {
    year: "2023",
    title: "Java Development",
    description:
      "Focused on Java, OOP, DBMS, SQL, JDBC, Git, and software engineering concepts.",
  },
  {
    year: "2024",
    title: "Spring Boot & APIs",
    description:
      "Built REST APIs, learned Spring Boot, Hibernate, authentication, and backend architecture.",
  },
  {
    year: "2025",
    title: "Real Projects",
    description:
      "Developed Banking System, Payroll Management, Utility Billing Backend, Wallet Transaction System, Finance Dashboard, and E-commerce Backend.",
  },
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <p className="uppercase tracking-[0.3em] text-cyan-400 mb-3">
        My Journey
      </p>

      <h2 className="mb-14 text-5xl font-black">
        Learning Timeline
      </h2>

      <div className="border-l-2 border-cyan-500 pl-8">
        {timeline.map((item) => (
          <div key={item.year} className="relative mb-12">
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-cyan-400"></div>

            <p className="text-cyan-400 font-bold">
              {item.year}
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-400 leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}