import Techno from "./techno.js";

let technos = []

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
      const techDetails = document.createElement("p")
      techDetails.textContent = technos[tech].details
      document.body.appendChild(techContainer)
      techContainer.appendChild(techName)
      techContainer.appendChild(techCategory)
      techContainer.appendChild(techDetails)
   }
}

function addTechno() {
   // console.log("avant ajout", technos)
   let techno = new Techno(technoname.value, details.value, category.value)
   console.log("envoyé");
   technos = [...technos, techno]
   // console.log("après ajout", technos)
   listTechnos(technos)
   form.reset();
}

const technosList = { technos, addTechno, listTechnos }

export default technosList