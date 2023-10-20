let btnSolicitacaoExam = document.querySelector(".btnSolicitacaoExam")

let dataAtual = new Date()
let solicitacoesExam = []

btnSolicitacaoExam.addEventListener("click", () => {
    solicitacoesExam.push({solicitacao: "Solicitação de Exame", data: `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`, status: "Pendente"})
    localStorage.setItem("solicitacoesExam", JSON.stringify(solicitacoesExam))
    console.log(solicitacoesExam)
})
