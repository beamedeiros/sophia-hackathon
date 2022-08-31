import dayjs from 'dayjs'

export default function resolveStatus(listaChamada, data) {
  const parsedDate = dayjs(data)
  const today = dayjs().startOf('day').format()
  switch(listaChamada.situacao) {
    case "Aguardando lançamento":
      if(parsedDate.isBefore(today)) {
        return 'late'
      } else {
        return 'not-started'
      }
    case "Em lançamento":
      if(parsedDate.isBefore(today)) {
        return 'late'
      } else {
        return 'pending'
      }
    case "Finalizado":
      return 'done'
      
  }
}