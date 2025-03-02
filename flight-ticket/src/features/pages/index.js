import { fetchData } from "../../services/api"
import { airlinesURL } from "../../services/base-url"

class FlightTicket {
    // private field
    #ticket = []
    #searchTicket = []
    #userId = new Date().getTime()
    #isVerification = true
    #userName
    #bookingData = {
        firstname: '',
        lastname: '',
        title: ''
    }

    constructor({
        userName
    }) {
        this.#userName = userName
    }

    async getTicket() {
        const result = await fetchData(`${airlinesURL}/products`)
        if (result?.products?.length) {
            this.ticket = result.products
            this.searchTicket = result.products
        }
    }

    // SEARCH TICKET
    updateSearchTicket(newTicket) {
        this.searchTicket = newTicket
    }

    ticketSearchData() {
        return this.#searchTicket
    }

    triggerChangeSearchTicket(newTicketData) {
        this.setTicketCard(newTicketData)
    }

    get searchTicket() {
        return this.#searchTicket
    }
    set searchTicket(newSearchTicket) {
        this.#searchTicket = newSearchTicket
        this.triggerChangeSearchTicket(newSearchTicket)
    }

    // TICKET CARD
    setTicketCard(newTicketData) {
        const ticket_lists = document.querySelector('#ticket-lists')
        ticket_lists.style.display = 'flex'
        ticket_lists.innerHTML = ''
        newTicketData.forEach((item) => {
            ticket_lists.innerHTML += `
            <div style="position: relative; margin: 20px 0; display: flex;">
                <ticket-card title="${item.title}"></ticket-card>
            </div>`
        })
        if (newTicketData.length === 0) {
            ticket_lists.innerHTML = `
            <div style="position: relative; margin: 20px 0; display: flex;">
                <p>Ticket not found</p>
            </div>`
        }
    }

    // TICKET DATA
    ticketData() {
        return this.#ticket
    }

    get ticket() {
        return this.#ticket;
    }

    set ticket(newTicketData) {
        this.#ticket = newTicketData;
        this.triggerChangeTicket(newTicketData)
    }

    triggerChangeTicket(newTicketData) {
        this.setTicketCard(newTicketData)
    }

    formBookingData(name, value) {
        this.#bookingData = {
            ...this.#bookingData,
            [name]: value
        }
    }

    bookingTicket() {
        this.ticket = [this.#bookingData, ...this.#ticket]
    }
}

const flightTicket = new FlightTicket('Iwan')

export { flightTicket }