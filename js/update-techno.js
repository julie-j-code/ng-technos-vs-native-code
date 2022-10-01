import { Service } from "./Service.js";
// import technoDetails from "./techno-details.js";
// import Techno from "./Techno.js";

let parameterValue
let result

let sr = new Service()
const technos = sr.getTechnos()


const renderInputs = () => {
   parameterValue = new URL(location.href).searchParams.get("id")
   result = sr.technos.filter(
      (tech) => tech.id == parameterValue)
   // alert(result[0].id)
   document.querySelector("#technoname").value = result[0].technoname
   document.querySelector("#details").value = result[0].details
}

const updateTechno = () => {
   result[0].technoname = technoname.value
   result[0].details = details.value
   console.log(result[0])

   // alert(result[0]);

      sr.save(technos)
      form.reset()
      confirmation(result[0])
}


const confirmation = (techno) => {
   alert(`La techno ${techno.technoname} a bien été modifiée`)
   const message = document.createElement("a")
   message.textContent = "Retour à la liste"
   message.setAttribute("href", "/technos-list");
   message.setAttribute("onclick", "route()")
   document.getElementById("update-techno").appendChild(message)
}

const technoUp = { renderInputs, updateTechno, confirmation }

export default technoUp