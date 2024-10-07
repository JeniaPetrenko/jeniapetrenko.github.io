function loadGitHubProjects() {
  const username = "JeniaPetrenko"; // Замініть на ваше ім'я користувача GitHub
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const projectsContainer = document.getElementById("projects-container");
      data.forEach((repo) => {
        const projectElement = document.createElement("div");
        projectElement.className = "project";
        projectElement.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "Опис відсутній"}</p>
                    <a href="${
                      repo.html_url
                    }" target="_blank">Переглянути на GitHub</a>
                `;
        projectsContainer.appendChild(projectElement);
      });
    })
    .catch((error) =>
      console.error("Помилка при завантаженні проектів:", error)
    );
}

document.addEventListener("DOMContentLoaded", loadGitHubProjects);
