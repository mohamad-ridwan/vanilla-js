import { buttonElement } from "../templates/button";
import { withTwind } from "../utils/with-twind";
import { ticketBookingContainer } from "./ticket-booking";

class Button extends withTwind(HTMLElement) {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(buttonElement.content.cloneNode(true))
        this.shadowRoot.querySelector('button').textContent = this.getAttribute('value')
        this.shadowRoot.querySelector('button').name = this.getAttribute('name')

        ticketBookingContainer.submitBooking(this.shadowRoot)
    }
}

window.customElements.define('button-card', Button)