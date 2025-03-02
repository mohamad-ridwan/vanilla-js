import { ticketElement } from "../templates/ticket";
import { withTwind } from "../utils/with-twind";

class Ticket extends withTwind(HTMLElement){
    constructor(){
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(ticketElement.content.cloneNode(true))
        const title = this.getAttribute('title')
        this.shadowRoot.querySelector('#title').textContent = title.length > 20 ? `${title.substring(0, 20)}...` : title
    }
}

window.customElements.define('ticket-card', Ticket)