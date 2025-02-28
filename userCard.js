const templates = document.createElement('template')
templates.innerHTML = `
<style>
    h3 {
        color: coral;
    }
</style>
<div class="user-card">
    <img/>
    <div>
        <h3></h3>
        <div class="info">
            <p><slot name="email"/></p> 
            <p><slot name="phone"/></p>
        </div>
        <button id="toggle-info">Hide Info</button>
    </div>
</div>
`

class UserCard extends HTMLElement {
    constructor() {
        super()

        this.showInfo = true

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(templates.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
    }

    toggleInfo() {
        this.showInfo = !this.showInfo

        const info = this.shadowRoot.querySelector('.info')
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info')

        info.style.display = this.showInfo ? 'block' : 'none'
        toggleBtn.innerText = this.showInfo ? 'Hide Info' : 'Show Info'
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo())
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener()
    }
}

window.customElements.define('user-card', UserCard)