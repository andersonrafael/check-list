let tarefasAseFazer = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulTarefas = document.getElementById("lista-de-itens")

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItem()
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
    tarefasAseFazer.forEach((elemento, index) => {
        ulTarefas.innerHTML = +`<main class="column is-7 hero-body is-offset-one-fifth is-unselectable">

        <form id="form-itens" class="has-text-centered">
            <input type="text" class="input has-text-centered" required
                placeholder="Digite o que precisa ser feito hoje?" id="receber-item">
            <button for="salvar" type="submit" class="mt-2 has-text-weight-bold button is-small is-primary">Salvar
                item</button>
        </form> `
    })
}
