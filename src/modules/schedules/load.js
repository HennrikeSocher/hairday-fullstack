import { hoursLoad } from "../form/hours-load"
//seleciona o input de data
const selectedDate = document.getElementById("date")
export function schedulesDay() {
  //obtem a data do input
  const date = selectedDate.value

  // Busca na api os agendamentos para carregar no lado direito
  // Os horarios disponiveis (horario futuro + não agendado) no lado esquerdo (form)
  //Renderiza as horas disponiveis
  hoursLoad({ date })
}
