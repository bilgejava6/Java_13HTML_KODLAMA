class MuhammetHoca extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML += '<p style="color:red; border: 1px solid blue">Muhammet Hoca...:'+this.getAttribute('name')+'</p>';
    }
}
customElements.define('muhammet-hoca',MuhammetHoca);