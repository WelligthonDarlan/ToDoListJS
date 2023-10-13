const input = document.querySelector(".input-task")
const btnAddTask = document.querySelector(".button-add-task")
const listTask = document.querySelector(".list-task")

let minhaLista = []

btnAddTask.addEventListener('click', () => {
  minhaLista.push(input.value)

  input.value = ''

  mostrarTarefas()
})

function mostrarTarefas() {

  let liNova = ''

  minhaLista.forEach((item, i) => {

    liNova = liNova + `
      <li class="task">
        <img src="./img/checked.png" alt="checked.png" />
        <p>
          ${item}
        </p>
        <img src="./img/trash.png" alt="trash.png" onclick="deletarItem(${i}) "/>
      </li>
    `;
  })
  listTask.innerHTML = liNova
}

function deletarItem(i) {
 minhaLista.splice(i, 1)
 mostrarTarefas()
}
