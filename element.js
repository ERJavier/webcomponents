class myElement extends HTMLElement {
    constructor(){
        super();

        this.p = document.createElement('p');
    }
    connectedCallback(){
        this.p.textContent = "Hola Mundo";
        this.appendChild(this.p);
    }
}

customElements.define('my-element', myElement);