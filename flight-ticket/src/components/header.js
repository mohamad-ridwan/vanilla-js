import { headerElement } from "../templates/header";
import { withTwind } from "../utils/with-twind";

class HeaderCard extends withTwind(HTMLElement) {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(headerElement.content.cloneNode(true))
        this.shadowRoot.querySelector('h1').textContent = this.getAttribute('value')
    }
}

window.customElements.define('header-card', HeaderCard)