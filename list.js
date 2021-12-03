// sem web component

const checkbox = document.getElementsByClassName('.checkbox') //selecionando todos os inputs com a classe (.checkbox)
let result = document.getElementById('result') // pegando a tag p para imprimir o valor do contador
let counter = 1

checkbox.addEventListener('click', upDateList)

function upDateList() { //criando a função que a cada click no checkbox,incrementa o contador
    if(checkbox) {
        result.textContent = counter++
    }
}

upDateList() //chamando a função



