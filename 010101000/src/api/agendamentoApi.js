import axios from 'axios'
const api = axios.create({
    baseURL: ''
})

export async function cadastrarAgendamento(VEICULO, COR, CPF, TELEFONE, NOME, ATENDIMENTO){
    const resposta = await api.post('/agendarteste', {
  VEICULO: VEICULO,
  COR: COR,
  CPF: CPF,
  TELEFONE: TELEFONE,
  NOME: NOME,
  ATENDIMENTO: ATENDIMENTO,
    })
    return resposta.data;
}