import Techno from "./techno.js";

let technos = JSON.parse(localStorage.getItem('technosVsES6')) || [];

const addTechno = () => {
   let techno = new Techno(technoname.value, details.value, category.value)
   console.log("envoyé");
   technos = [...technos, techno]
   save(technos)
   form.reset();
   // ne redirige plus vers la liste automatiquement mais affiche un lien 
   confirmation(techno);
}

const save = (technos) => {
   localStorage.setItem('technosVsES6', JSON.stringify(technos));
}

const confirmation = (techno) => {
   alert(`La techno ${techno.technoname} a bien été sauvegardée`)
   const message = document.createElement("a")
   message.textContent = "Retour à la liste"
   message.setAttribute("href", "/technos-list");
   message.setAttribute("onclick", "route()")
   document.getElementById("add-techno").appendChild(message)
}

const technoAdd = { addTechno, save, confirmation }

export default technoAdd