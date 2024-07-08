
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    })
    input.value = ''
    mostrarTarefas()

}
function mostrarTarefas() {

    let novaLi = ''
    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `

            <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
            </li>
            `



    })

    listCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}
function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()

}
function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()


}
function recarregarTarefas() {
    const tarefasDoLocalStorang = localStorage.getItem('lista')
    
    if (tarefasDoLocalStorang){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorang)
    }
    console.log(tarefasDoLocalStorang)
    mostrarTarefas()
}

button.addEventListener('click', adicionarNovaTarefa)
