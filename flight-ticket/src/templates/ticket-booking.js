const ticketBookingElement = document.createElement('template')
ticketBookingElement.innerHTML = `
    <div><slot/></div>
`
export { ticketBookingElement }