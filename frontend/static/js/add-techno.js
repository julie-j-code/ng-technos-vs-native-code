import { Service } from "./Service.js";
import Techno from "./Techno.js";

let sr=new Service()
// pas besoin, c'est dans le constructeur de Service
// let technos = sr.getTechnos()

const addTechno = () => {
   let techno = new Techno(technoname.value, details.value, category.value)
   // console.log("envoyé");
   sr.technos = [...sr.technos, techno]
   sr.save(sr.technos)
   form.reset();
   // ne redirige plus vers la liste automatiquement mais affiche un lien 
   confirmation(techno);
}

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