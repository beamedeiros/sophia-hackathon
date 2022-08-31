import axios from 'axios'
import resolveStatus from './resolveStatus'

const baseURL = 'http://portal.sophia.com.br/sophiawebapi'

export default class SophiaAPI {
  sophia = null


  constructor(sophia) {
    this.sophia = sophia
  }
  static async createToken(tenant, usuario, senha) {
    const { data: token } = await axios.post(`${baseURL}/${tenant}/api/v1/Autenticacao`, {
      usuario,
      senha
    })

    return token
  }

  static async init(tenant, usuario, senha) {
    const sophia = axios.create({
      baseURL: `${baseURL}/${tenant}/api/v1`,
      headers: {
        token: await this.createToken(tenant, usuario, senha)
      }
    })

    return new SophiaAPI(sophia)
  }

  async getAttendanceLists(unidade, professor, periodo, data) {
    const { data: result } = await this.sophia.get('/listaChamada', {
      params: {
        codigounidade: unidade,
        codigoprofessor: professor,
        codigoperiodo: periodo,
        data
      }
    })

    return result.map(listaChamada => {
      return {
        id: listaChamada.codigo,
        course: listaChamada.nomeTurma,
        discipline: listaChamada.nomeDisciplina,
        classNum: listaChamada.numeroPrimeiraAula,
        status: resolveStatus(listaChamada, data),
        type: listaChamada.porData ? 'check' : 'text'
      }
    })
  }

  async getStudentsFromAttendanceListCode(attendanceListCode) {
    try {
      const { data: result } = await this.sophia.get('/ListaChamadaAluno', {
        params: { codigolistachamada: attendanceListCode }
      })

      return result.map(student => {
        return {
          name: student.nome,
          id: student.codigo,
          present: !student.falta,
          picture: '',
        }

      })
    } catch (error) {
      console.log(error)
    }
  }

  //todo: implement put
  async updateAttendanceList() {
    return 'TODO'
  }

  // lookup attendancelist 12030 classes 14673 and 14674

}