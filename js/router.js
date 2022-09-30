import technosList from "./technos-list.js";
import technoAdd from "./add-techno.js";
import technoDetails from "./techno-details.js";
import { Service } from "./service.js";

let sr=new Service()


const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/technos-list": "/pages/technos-list.html",
    "/add-techno": "/pages/add-techno.html",
    "/techno-details": "/pages/techno-details.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((response) => response.text());
    document.getElementById("main-page").innerHTML = html;

    // console.log(route) bingo !!!!! qui fait qu'on peut faire joujou façon contrôleur

    if (route=="/pages/techno-details.html") {
        alert("techno details")
        technoDetails.renderDetails() 
    }

    if(route=="/pages/technos-list.html"){
        technosList.listTechnos(technosList.technos)  
    }

    if (route=="/pages/add-techno.html") {
        document.querySelector("#submit").addEventListener("click", ()=>technoAdd.addTechno())        
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

