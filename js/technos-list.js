import { Service } from "./Service.js"

let sr=new Service()
// pas besoin c'est dans le constructeur de Service
// let technos = sr.getTechnos()


function listTechnos() {
   for (let tech in sr.technos) {
      const techContainer = document.createElement("div")
      techContainer.classList.add("p-3")
      techContainer.classList.add("col-sm-6")
      const cardContainer = document.createElement("div")
      cardContainer.classList.add("p-2")
      cardContainer.classList.add("card")
      const techName = document.createElement("h2")
      techName.classList.add("text-primary")
      techName.textContent = sr.technos[tech].technoname
      const techCategory = document.createElement("h3")
      techCategory.textContent = sr.technos[tech].category
      const techLink = document.createElement("a")
      techLink.textContent = "vue des détails"
      techLink.setAttribute("href", "/techno-details")
      techLink.href += `?id=${sr.technos[tech].id}`
      techLink.setAttribute("onclick", "route()")
      document.body.appendChild(techContainer)
      techContainer.appendChild(cardContainer)
      cardContainer.appendChild(techName)
      cardContainer.appendChild(techCategory)
      cardContainer.appendChild(techLink)
      document.getElementById("technos-list").appendChild(techContainer
      )
   }
}

const technosList = {listTechnos }

export default technosList