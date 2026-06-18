export default function Timeline() {
  const timeline = [
    {
      year: "10th Standard",
      desc: "Built a strong academic foundation and developed an interest in computers and technology."
    },
    {
      year: "12th Standard",
      desc: "Focused on science and mathematics while preparing for engineering studies."
    },
    {
      year: "B.Tech Year 1",
      desc: "Learned C programming, basic Java, HTML, CSS and problem solving fundamentals."
    },
    {
      year: "B.Tech Year 2",
      desc: "Studied Data Structures, DBMS, OOP and SQL while building academic projects."
    },
    {
      year: "B.Tech Year 3",
      desc: "Developed Spring Boot applications, REST APIs and MySQL database projects."
    },
    {
      year: "Java Backend Developer",
      desc: "Created Banking System, Payroll Management, Utility Billing and AI-integrated backend applications."
    },
    {
      year: "NCC Air Wing",
      desc: "Completed NCC Air Wing training and earned the C Certificate while developing discipline and leadership."
    },
    {
      year: "State Volleyball",
      desc: "Represented at state level as a volleyball player and strengthened teamwork and resilience."
    }
  ];

  return (
    <section id="journey" className="py-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
        My Journey
      </h2>

      <div className="space-y-8">
        {timeline.map((item) => (
          <div
            key={item.year}
            className="border border-cyan-500/30 rounded-xl p-6 hover:scale-[1.02] transition"
          >
            <h3 className="text-2xl font-bold">{item.year}</h3>
            <p className="text-gray-300 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}