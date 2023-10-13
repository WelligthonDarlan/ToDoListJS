const input = document.querySelector(".input-task");
const btnAddTask = document.querySelector(".button-add-task");
const listTask = document.querySelector(".list-task");

let minhaLista = [];

btnAddTask.addEventListener("click", adicionarTarefa);
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  if (input.value === "") {
    alert("Digite a tarefa a ser adicionada.");
  } else {
    const primeiraLetraMaiuscula =
      input.value.charAt(0).toUpperCase() + input.value.slice(1);

    minhaLista.push({
      tarefa: primeiraLetraMaiuscula,
      concluida: false,
    });

    input.value = "";

    mostrarTarefas();
  }
}

function mostrarTarefas() {

  let liNova = ''

  minhaLista.forEach((item, i) => {

    liNova = liNova + `
      <li class="task ${item.concluida && 'done'}">
        <img src="./img/checked.png" alt="checked.png" onclick="concluirTarefa(${i}) "/>
        <p>
          ${item.tarefa}
        </p>
        <img src="./img/trash.png" alt="trash.png" onclick="deletarTarefa(${i})"/>
      </li>
    `;
  })
  listTask.innerHTML = liNova

  localStorage.setItem("Lista de tarefas", JSON.stringify(minhaLista))
}

function concluirTarefa(i) {
  minhaLista[i].concluida = !minhaLista[i].concluida
  mostrarTarefas()
}

function deletarTarefa(i) {
  minhaLista.splice(i, 1)
  mostrarTarefas()
}

function recarregarLS() {
  const lista = localStorage.getItem('Lista de tarefas')

  if (lista) {

    minhaLista = JSON.parse(lista)
  }
  mostrarTarefas()
}

recarregarLS()
