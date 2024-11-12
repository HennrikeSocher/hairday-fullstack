import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Date atual para utilizar em inputs
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual.
selectedDate.value = inputToday
// Define a data minima como sendo a data atual.
selectedDate.min = inputToday

form.onsubmit = (e) => {
  // Previne o formulario de recarregar a pagina ao enviar
  e.preventDefault()

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim()

    if (!name) {
      return alert("Informe o nome do cliente!")
    }

    //Recupera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("selecione a hora")
    }

    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = new Date().getTime()
  } catch (err) {
    alert("Não foi possivel realizar o agendamento")
    console.log(err)
  }
}
