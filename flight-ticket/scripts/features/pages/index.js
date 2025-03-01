const { fetchData } = require("../../services/api")
const { airlinesURL } = require("../../services/base-url")

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
        const result = await fetchData(`${airlinesURL}/api/v1/airlines`)
        if (result?.length) {
            this.#ticket = result
            return
        }
    }
}

const flightTicket = new FlightTicket('Iwan')

export { flightTicket }