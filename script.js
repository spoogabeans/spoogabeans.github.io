const config = {
  name: "RACHEL",
  projects: [
    {
      title: "Love or Die (2024)",
      description: "A series of coincidences turn deadly when an obsessive stalker, Stacey, meets competition for her precious Jacob's heart. Who knew a water bottle could kill?",
      link: "https://films.buzzstudios.org/d10conversesauce"
    },
    {
      title: "Alternative Fuel (2025)",
      description: "On a lonely night-time drive, a man comes across a liminal gas station that is more sinister than meets the eye. (Passcode: cornedbeef)",
      link: "https://films.buzzstudios.org/alternativefuel"
    },
    {
      title: "Roach (2023)",
      description: "A family of roaches travel throughout a post-nuclear landscape.",
      link: "https://youtu.be/tw9jqyfQP-8"
    }
  ]
};

document.getElementById("name").textContent = config.name;
document.getElementById("year").textContent = new Date().getFullYear();

const projectList = document.getElementById("project-list");
projectList.innerHTML = "";
config.projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `<strong>${p.title}</strong><br><em>${p.description}</em><br><a href="${p.link}" target="_blank">↗ view film</a>`;
  projectList.appendChild(div);
});
