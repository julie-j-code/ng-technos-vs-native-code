export class Service {

    technos = JSON.parse(localStorage.getItem('technosVsES6')) || [];

    constructor() {
    }

    getTechnos = () => this.technos;

    removeTechno = (result) => {
        this.technos = this.technos.filter(t => t.id !== result[0].id)
        this.save(this.technos)
    }

    save = (technos) => {
        localStorage.setItem('technosVsES6', JSON.stringify(technos));
    }

}