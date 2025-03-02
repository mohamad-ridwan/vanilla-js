const inputElement = document.createElement('template')
inputElement.innerHTML = `
    <input 
        x-model="input3"
        class="min-w-[250px] h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none">
`

export {
    inputElement
}