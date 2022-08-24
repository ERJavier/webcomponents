class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2 class="title">Hello World</h2>
                <div>
                    <p>more text</p>
                </div>
            </section>
            ${this.getStyles()}
        
        `;
        return template;
    };
    getStyles(){
        return `
            <style>
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-size: 20px;
                    background: gray;
            }
            </style>
        `;

    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);

