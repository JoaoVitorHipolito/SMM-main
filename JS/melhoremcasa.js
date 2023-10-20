let btnSolicitacaoMEC = document.querySelector(".btnSolicitacaoMEC")

let dataAtual = new Date()
let solicitacoesMEC = []

btnSolicitacaoMEC.addEventListener("click", () => {
    solicitacoesMEC.push({solicitacao: "Solicitação do Melhor em Casa", data: `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`, status: "Pendente"})
    localStorage.setItem("solicitacoesMEC", JSON.stringify(solicitacoesMEC))
})
