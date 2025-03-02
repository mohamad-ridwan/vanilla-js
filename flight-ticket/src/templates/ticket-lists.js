const ticketListsElement = document.createElement('template')
ticketListsElement.innerHTML = `
    <div>
        <slot/>
    </div>
`

export { ticketListsElement }