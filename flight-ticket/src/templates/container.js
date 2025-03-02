const containerElement = document.createElement('template')
containerElement.innerHTML = `
    <link rel="stylesheet" href="../../src/styles/components/container.css">
    <div class="container">
        <div class="center-container">
            <slot/>
        </div>
    </div>
`

export {
    containerElement
}