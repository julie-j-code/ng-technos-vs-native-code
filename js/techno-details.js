
// import deleteTechno from "./delete-techno.js";
import technosList from "./technos-list.js";

let parameterValue
let result

const renderDetails = () => {
    // on décode le paramètre passé dans l'url
    parameterValue = new URL(location.href).searchParams.get("id")
    result = technosList.technos.filter(
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
    const techButton = document.createElement("button")
    techButton.textContent = "supprimer"
    techButton.setAttribute("id", "techButton")
    techContainer.appendChild(techButton)

}

// removeTechno addTechno et save sont regroupées dans un sesvice injecté dans les différents components vs angular. faudrait donc, à défaut de créer l'équivalent regrouper ces fonctions dans un service.js. mais je m'en tiens à ça qui me permet de revoir comment mettre à jour le tableau d'objets et sauvegarder la mise à jour dans localStorage

const removeTechno = () => {
    let clearedTechnos = technosList.technos.filter(t => t != result[0])
    save(clearedTechnos)
}

const save = (clearedTechnos) => {
    localStorage.setItem('technosVsES6', JSON.stringify(clearedTechnos));
}

const technoDetails = { renderDetails, removeTechno }

export default technoDetails