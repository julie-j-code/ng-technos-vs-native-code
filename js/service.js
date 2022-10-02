export class Service {


    technos

    constructor() {
        this.technos = JSON.parse(localStorage.getItem('technosVsES6')) || [];
    }

    // getTechnos = () => this.technos;

    removeTechno = (result) => {
        this.technos = this.technos.filter(t => t.id !== result[0].id)
        this.save(this.technos)
    }

    save = (technos) => {
        localStorage.setItem('technosVsES6', JSON.stringify(technos));
    }

    tagTechno = (result)=>{
        result[0].category=="front"?document.querySelectorAll("h3")[0].setAttribute("class","bg-danger"):result[0].category=="back"?document.querySelectorAll("h3")[0].setAttribute("class","bg-warning"):result[0].category=="full"?document.querySelectorAll("h3")[0].setAttribute("class","bg-info"):alert("ok")
    }

    // malheureusement, y a vraiment pas moyen de rafraichir sans reload et pas moyen d'utiliser le reload avec ce router actif.... 

    // refreshDiv = () => {
    //     fetch('location.href+"#main-page"')
    //         .then(response => response.text())
    //         .then(fragment => document.getElementById("#whatever").innerHTML = fragment);
    // }

}