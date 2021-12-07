// criando um componente que exibe a hora atual
class MeuRelogioElement extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({
            mode: 'open'
        })
        // criação do web component de uma div com o relógio 
        this.divEl = document.createElement('div')
        this.divEl.textContent = getHMS()

        // criação da link de folha de estilo dentro do javascript
        const linkEl = document.createElement('link')
        linkEl.setAttribute('rel', 'stylesheet')
        linkEl.setAttribute('href', 'style.css')


        this.shadowRoot.append(this.divEl, linkEl)
    }

    connectedCallback() {
        setInterval(() => {
            this.divEl.textContent = getHMS()
            console.log('connectedcallback executou')
        }, 1000)
    }

    desconnectedCallback() {
        clearInterval(this.timer)
    }
}

function getHMS() {
    const dataHora = new Date()
    const H = formatNumber(dataHora.getHours())
    const M = formatNumber(dataHora.getMinutes())
    const S = formatNumber(dataHora.getSeconds())
    return `${H}:${M}:${S}`
}

// função auxiliar para transformar números em string no relógio
function formatNumber(n) {
    return String(n).padStart(2, '0')
}

// registro do web component
customElements.define('meu-relogio', MeuRelogioElement)

// criar e formatar data padrão brasileiro
const contentDate = document.getElementById('date')
const date = new Date()

contentDate.textContent = `${String(date.getDate()).padStart(2, '0')}/${date.getMonth() + 1}/${date.getFullYear()}`


