
import {renderTechno, result, parameterValue  } from "./modules/techno-details.js";
import technosList from "./modules/technos-list.js";

console.log(window.location.pathname);

// if (parameterValue) {
//     renderTechno()
// }else if(window.location.pathname=="/technos-list.html"){
//     technosList.listTechnos(technosList.technos)
// }
parameterValue?renderTechno():window.location.pathname=="/technos-list.html"?technosList.listTechnos(technosList.technos):document.querySelector("#submit")?submit.addEventListener("click", ()=>technosList.addTechno()):""






