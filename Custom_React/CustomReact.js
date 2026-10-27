function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

const reactElement = { 
    type : 'a',
    props: {
        href : 'https://www.google.com/',
        traget : '_blank'
    },
    childern : 'Click me to visit googal'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)