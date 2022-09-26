import Techno from "./techno.js";

let technos = JSON.parse(localStorage.getItem('technosVsES6')) || [];

export const addTechno=()=> {
   // console.log("avant ajout", technos)
   let techno = new Techno(technoname.value, details.value, category.value)
   console.log("envoyé");
   technos = [...technos, techno]
   // console.log("après ajout", technos)
   save(technos)
   // listTechnos(technos)
   form.reset();
   // redirige vers la liste actualisée
   location.href = './technos-list.html';
}

export const save=(technos)=>{
   localStorage.setItem('technosVsES6', JSON.stringify(technos));
   // j'aime pas mais pas trouvé mieux... pour actualiser  
   document.location.reload()
}

// const addTechno = { addTechno}

// export default addTechno