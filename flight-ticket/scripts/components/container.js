import { containerElement } from "../templates/container.js"

class Container extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(containerElement.content.cloneNode(true))
    }
}

window.customElements.define('container-page', Container)