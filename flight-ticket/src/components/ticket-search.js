import { flightTicket } from "../features/pages"
import { ticketSearchElement } from "../templates/ticket-search"
import { ticketLists } from "./ticket-lists"

class TicketSearch extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(ticketSearchElement.content.cloneNode(true))
    }

    searchTicket(shadowRoot) {
        shadowRoot.querySelector('input[name="search-ticket"]')?.addEventListener('input', (event) => {
            const value = event.target.value
            const tickets = flightTicket.ticketData().filter(item =>
                item.title.toLowerCase().includes(value.toLowerCase())
            )
            ticketLists.getTicketLists(tickets)
        })
    }
}

window.customElements.define('ticket-search-container', TicketSearch)

export const ticketSearch = new TicketSearch