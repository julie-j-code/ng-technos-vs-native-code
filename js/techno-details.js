
// import deleteTechno from "./delete-techno.js";
import { Service } from "./Service.js";
// import technosList from "./technos-list.js";



let parameterValue
let result
let sr = new Service()
// pas besoin c'est dans le constructuer de Service
// const technos = sr.getTechnos()

const renderDetails = () => {
    // on décode le paramètre passé dans l'url
    parameterValue = new URL(location.href).searchParams.get("id")
    result = sr.technos.filter(
        (tech) => tech.id == parameterValue)
    const techContainer = document.createElement("div")
    techContainer.classList.add("container")
    techContainer.classList.add("mx-auto")
    const techName = document.createElement("h2")
    techName.classList.add("text-primary")
    techName.textContent = result[0].technoname
    const techCategory = document.createElement("h3")
    techCategory.textContent = result[0].category
    const techDetails = document.createElement("p")
    techDetails.textContent = result[0].details
    document.body.appendChild(techContainer)
    techContainer.appendChild(techName)
    techContainer.appendChild(techCategory)
    techContainer.appendChild(techDetails)
    document.getElementById("techno-details").appendChild(techContainer
    )
    // pour l'ajout d'un lien de suppression
    const removeButton = document.createElement("button")
    removeButton.textContent = "supprimer"
    removeButton.setAttribute("id", "removeButton")
    removeButton.classList.add("btn")
    removeButton.classList.add("btn-warning")
    techContainer.appendChild(removeButton)
    // pour le buton de suppression
    document.querySelector("#removeButton").addEventListener("click", () => sr.removeTechno(result))

    // pour accéder à la page de modification
    const updateButton = document.createElement("button")
    // updateButton.textContent = "modifier"
    updateButton.setAttribute("id", "updateButton")
    updateButton.classList.add("btn")
    updateButton.classList.add("btn-warning")
    updateButton.classList.add("ms-2")
    techContainer.appendChild(updateButton)
    // pour le buton de suppression
    const updateLink = document.createElement("a")
    updateLink.textContent = "modifier"
    updateLink.setAttribute("href", "/update-techno")
    updateLink.href += `?id=${result[0].id}`
    updateLink.setAttribute("onclick", "route()")
    updateButton.appendChild(updateLink)
    techContainer.appendChild(updateButton)

    sr.tagTechno(result)
}


const technoDetails = {
    renderDetails, result
}

export default technoDetails