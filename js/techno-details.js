
// import deleteTechno from "./delete-techno.js";
import { Service } from "./service.js";
import technosList from "./technos-list.js";

let parameterValue
let result
let sr=new Service()

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
            // pour le buton de suppression
            document.querySelector("#techButton").addEventListener("click", ()=>sr.removeTechno(result))
}


const technoDetails = { renderDetails, result
 }

export default technoDetails