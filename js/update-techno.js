import { Service } from "./Service.js";
// import Techno from "./Techno.js";

let sr=new Service()
let technos = sr.getTechnos()

function updateTechno(result){   
   alert("En cours..."); 
//    technos = [...technos, ...techToUpdate]
//    sr.save(technos)
//    form.reset()
}


const confirmation = (techno) => {
   alert(`La techno ${techno.technoname} a bien été modifiée`)
   const message = document.createElement("a")
   message.textContent = "Retour à la liste"
   message.setAttribute("href", "/technos-list");
   message.setAttribute("onclick", "route()")
   document.getElementById("add-techno").appendChild(message)
}

const technoUp = { updateTechno, confirmation }

export default technoUp