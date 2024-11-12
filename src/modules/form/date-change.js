import { schedulesDay } from "../schedules/load"

//seleciona input de data
const selectedDate = document.getElementById("date")

// refresh na lista de horarios quando o input mudar

selectedDate.onchange = () => schedulesDay()
