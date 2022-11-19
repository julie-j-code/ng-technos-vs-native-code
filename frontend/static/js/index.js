import technosList from "./technos-list.js";
import technoAdd from "./add-techno.js";
import technoDetails from "./techno-details.js";
import technoUp from "./update-techno.js";




const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/static/pages/404.html",
    "/": "/static/pages/index.html",
    "/technos-list": "/static/pages/technos-list.html",
    "/add-techno": "/static/pages/add-techno.html",
    "/techno-details": "/static/pages/techno-details.html",
    "/update-techno": "/static/pages/update-techno.html",
    "/manifest":"/static/manifest.json"
};


console.log(route)

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then(
        (response) => response.text()
    );
    document.getElementById("main-page").innerHTML = html;

    console.log(route)


    if (route == "/static/pages/techno-details.html") {
        alert("techno details")
        technoDetails.renderDetails()
// console.log(location.href)
    }

    if (route == "/static/pages/technos-list.html") {
        technosList.listTechnos(technosList.technos)
    }

    if (route == "/static/pages/add-techno.html") {
        console.log(window.document.querySelector("#submit"));
        document.querySelector("#submit").addEventListener("click", () => technoAdd.addTechno())
    }

    if (route == "/static/pages/update-techno.html") {
        technoUp.renderInputs()

        document.querySelector("#submit").addEventListener("click", () => technoUp.updateTechno())
    }


};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

