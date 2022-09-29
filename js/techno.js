export default class Techno {

    constructor(technoname, details, category) {
        this.id = Math.random(1,1000);
        this.technoname = technoname
        this.details = details
        this.category = category
    }
}