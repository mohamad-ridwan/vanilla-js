import { flightTicket } from "../features/pages"
import { ticketBookingElement } from "../templates/ticket-booking"

class TicketBookingContainer extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(ticketBookingElement.content.cloneNode(true))
    }

    changeInput(shadowRoot, name){
        shadowRoot.querySelector(`input[name=${name}]`)?.addEventListener('input', (event) => {
            const value = event.target.value
            flightTicket.formBookingData(name, value)
        })
    }

    submitBooking(shadowRoot){
        shadowRoot.querySelector('button[name="booking-ticket"]')?.addEventListener('click', ()=>{
            flightTicket.bookingTicket()
        })
    }
}

window.customElements.define('ticket-booking-container', TicketBookingContainer)

export const ticketBookingContainer = new TicketBookingContainer