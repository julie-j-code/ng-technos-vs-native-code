import technosList from "./technos-list.js";


const renderDetails = () => {
    // on décode le paramètre passé dans l'url
    const parameterValue = new URL(location.href).searchParams.get("id")
    const result = technosList.technos.filter(
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
}



const technoDetails = { renderDetails }

export default technoDetails