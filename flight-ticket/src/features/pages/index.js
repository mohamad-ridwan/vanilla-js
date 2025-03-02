import { fetchData } from "../../services/api"
import { airlinesURL } from "../../services/base-url"

class FlightTicket {
    // private field
    #ticket = []
    #userId = new Date().getTime()
    #isVerification = true
    #userName

    constructor({
        userName
    }) {
        this.#userName = userName
    }

    async getTicket() {
        const result = await fetchData(`${airlinesURL}/products`)
        if (result?.products?.length) {
            this.#ticket = result.products
            return result.products
        }
        return []
    }

    ticketData() {
        return this.#ticket
    }
}

const flightTicket = new FlightTicket('Iwan')

export { flightTicket }