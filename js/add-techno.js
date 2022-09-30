import { Service } from "./service.js";
import Techno from "./techno.js";

let sr=new Service()
let technos = sr.getTechnos()

const addTechno = () => {
   let techno = new Techno(technoname.value, details.value, category.value)
   console.log("envoyé");
   technos = [...technos, techno]
   sr.save(technos)
   form.reset();
   // ne redirige plus vers la liste automatiquement mais affiche un lien 
   confirmation(techno);
}

// const save = (technos) => {
//    localStorage.setItem('technosVsES6', JSON.stringify(technos));
// }

const confirmation = (techno) => {
   alert(`La techno ${techno.technoname} a bien été sauvegardée`)
   const message = document.createElement("a")
   message.textContent = "Retour à la liste"
   message.setAttribute("href", "/technos-list");
   message.setAttribute("onclick", "route()")
   document.getElementById("add-techno").appendChild(message)
}

const technoAdd = { addTechno, confirmation }

export default technoAdd