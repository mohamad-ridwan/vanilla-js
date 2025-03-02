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

    async getTicketLists(ticket) {
        const ticketData = ticket ?? await flightTicket.getTicket()
        const ticket_lists = document.querySelector('#ticket-lists')
        ticket_lists.style.display = 'flex'
        ticket_lists.innerHTML = ''
        ticketData.forEach((item) => {
            ticket_lists.innerHTML += `
            <div style="position: relative; margin: 20px 0; display: flex;">
                <ticket-card title="${item.title}"></ticket-card>
            </div>`
        })
        if(ticketData.length === 0){
            ticket_lists.innerHTML = `
            <div style="position: relative; margin: 20px 0; display: flex;">
                <p>Ticket not found</p>
            </div>`
        }
    }

    connectedCallback() {
        this.getTicketLists()
    }
}

window.customElements.define('ticket-lists', TicketLists)

const ticketLists = new TicketLists
export { ticketLists }