const projects = [
  {
    title: "Bird Detection Campus Map",
    team: "Team A",
    category: "technology",
    description: "Using camera detection and a web map to record bird species, time, and location around campus.",
    tags: ["AI", "Map", "Campus"],
    link: "#"
  },
  {
    title: "Student Fitness Habit Plan",
    team: "Team B",
    category: "management",
    description: "A project about building a weekly gym routine, tracking heart rate, sleep, and lifestyle changes.",
    tags: ["Health", "Routine", "Data"],
    link: "#"
  },
  {
    title: "Consumer Behavior Case Study",
    team: "Team C",
    category: "business",
    description: "Analyzing how students make purchasing decisions based on price, brand, and online reviews.",
    tags: ["Marketing", "Survey", "Case Study"],
    link: "#"
  },
  {
    title: "Smart Classroom Service Design",
    team: "Team D",
    category: "technology",
    description: "Designing a simple digital system to improve classroom communication and resource sharing.",
    tags: ["UX", "Education", "Service"],
    link: "#"
  },
  {
    title: "Leadership in Group Projects",
    team: "Team E",
    category: "management",
    description: "Exploring how leadership style affects teamwork, communication, and project outcomes.",
    tags: ["Leadership", "Teamwork", "Strategy"],
    link: "#"
  },
  {
    title: "Local Brand Strategy",
    team: "Team F",
    category: "business",
    description: "A case study on how a local brand can use social media and storytelling to reach young customers.",
    tags: ["Branding", "Social Media", "Strategy"],
    link: "#"
  }
];

const grid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll(".filter");

function renderProjects(category = "all") {
  const filtered = category === "all"
    ? projects
    : projects.filter(project => project.category === category);

  grid.innerHTML = filtered.map(project => `
    <article class="project-card">
      <h3>${project.title}</h3>
      <p class="team">${project.team}</p>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <a class="card-link" href="${project.link}">View project →</a>
    </article>
  `).join("");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
