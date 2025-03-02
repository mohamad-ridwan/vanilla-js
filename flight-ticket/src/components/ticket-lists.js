import { flightTicket } from "../features/pages";
import { ticketListsElement } from "../templates/ticket-lists";
import { withTwind } from "../utils/with-twind";

class TicketLists extends withTwind(HTMLElement) {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(ticketListsElement.content.cloneNode(true))
        this.shadowRoot.querySelector('div').id = this.getAttribute('id')
    }

    connectedCallback() {
        flightTicket.getTicket()
    }
}

window.customElements.define('ticket-lists', TicketLists)

const ticketLists = new TicketLists
export { ticketLists }