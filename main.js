let tarefasAseFazer = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulTarefas = document.getElementById("lista-de-itens")

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItem()
    mostrarTarefa()
})


function salvarItem() {
    const addItem = itensInput.value
    const checarTarefa = tarefasAseFazer.some((elemento) => elemento.valor.toUpperCase() === addItem.toUpperCase())

    if (checarTarefa) {
        alert("Essa tarefa já existe")
    } else {


        tarefasAseFazer.push({
            valor: addItem
        })

    }
    console.log(tarefasAseFazer)
}

function mostrarTarefa() {
    ulTarefas.innerHTML = ''
    tarefasAseFazer.forEach((elemento, index) => {
        ulTarefas.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox"  class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `
    })
}
