import { inputElement } from '../templates/input.js'
import { withTwind } from '../utils/with-twind.js'
import { ticketSearch } from './ticket-search.js'

class TextInput extends withTwind(HTMLElement) {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(inputElement.content.cloneNode(true))
        this.shadowRoot.querySelector('input').name = this.getAttribute('name')
        this.shadowRoot.querySelector('input').type = this.getAttribute('type')
        this.shadowRoot.querySelector('input').placeholder = this.getAttribute('placeholder')

        ticketSearch.searchTicket(this.shadowRoot)
    }
}

window.customElements.define('text-input', TextInput)

const textInput = new TextInput()
export { textInput }