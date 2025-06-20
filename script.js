document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: "Love or Die (2024)",
      url: "https://films.buzzstudios.org/d10conversesauce",
      logline: "A series of coincidences turn deadly when an obsessive stalker, Stacey, meets competition for her precious Jacob's heart. Who knew a water bottle could kill?"
    },
    {
      title: "Alternative Fuel (2025)",
      url: "https://films.buzzstudios.org/alternativefuel",
      logline: "On a lonely night-time drive, a man comes across a liminal gas station that is more sinister than meets the eye.",
      passcode: "cornedbeef"
    },
    {
      title: "Roach (2023)",
      url: "https://youtu.be/tw9jqyfQP-8",
      logline: "A family of roaches travel throughout a post-nuclear landscape."
    }
  ];

  const projectList = document.getElementById('project-list');
  projects.forEach(proj => {
    const div = document.createElement('div');
    div.className = 'project';

    const title = document.createElement('strong');
    title.textContent = proj.title;
    div.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = proj.logline;
    div.appendChild(desc);

    const link = document.createElement('a');
    link.href = proj.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "↗ view film";
    div.appendChild(link);

    if (proj.passcode) {
      const pass = document.createElement('p');
      pass.style.fontStyle = 'italic';
      pass.textContent = `Passcode: ${proj.passcode}`;
      div.appendChild(pass);
    }

    projectList.appendChild(div);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});
