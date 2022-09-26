// n'est plus nécessaire ici si c'est add-techno qui gère la création
// import Techno from "./techno.js";

let technos = JSON.parse(localStorage.getItem('technosVsES6')) || [];

function listTechnos(technos) {
   for (let tech in technos) {
      console.log("thisTech", technos[tech])
      const techContainer = document.createElement("div")
      techContainer.classList.add("container")
      techContainer.classList.add("mx-auto")
      const techName = document.createElement("h2")
      techName.classList.add("text-primary")
      techName.textContent = technos[tech].technoname
      const techCategory = document.createElement("h3")
      techCategory.textContent = technos[tech].category
      const techLink = document.createElement("a")
      techLink.textContent = "vue des détails"
      techLink.setAttribute("href", "/techno-details.html");
      techLink.href+=`?id=${technos[tech].id}`
      document.body.appendChild(techContainer)
      techContainer.appendChild(techName)
      techContainer.appendChild(techCategory)
      techContainer.appendChild(techLink)
   }
}

// on délègue à add-techno - pas très chaude...
// function addTechno() {
//    let techno = new Techno(technoname.value, details.value, category.value)
//    console.log("envoyé");
//    technos = [...technos, techno]
//    save(technos)
//    form.reset();
//    location.href = './technos-list.html';
// }

// function save(technos) {
//    localStorage.setItem('technosVsES6', JSON.stringify(technos));
//    document.location.reload()
// }

const technosList = { technos,listTechnos }

export default technosList