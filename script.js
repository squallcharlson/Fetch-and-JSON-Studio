window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            let astronauts = json;
            astronauts.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
            const container = document.getElementById("container");
            container.innerHTML = `<p>Astronaut Count: ${astronauts.length}</p>`;
            for (let astronaut of astronauts) {
                let skills = astronaut.skills;
                container.innerHTML += `
          <div class="astronaut">
            <div class="bio">
              <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
              <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                <li>Active: <span ${(astronaut.active ? `class="active"` : "")}>${astronaut.active}</span></li>
                <li>Skills: ${skills.map(skill => `${skill}`).join(", ")}</li>
              </ul>
            </div>
            <img class="avatar" src=${astronaut.picture}>
          </div>
        `;
            }
        });
    });
});