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

}