let btnSolicitacaoTrans = document.querySelectorAll(".btnSolicitacaoTrans")

let dataAtual = new Date()
let solicitacoesTrans = []

btnSolicitacaoTrans.forEach((e)=>{
    e.addEventListener("click", () => {
        solicitacoesTrans.push({solicitacao: "Solicitação de Transporte", data: `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`, status: "Pendente"})
        localStorage.setItem("solicitacoesTrans", JSON.stringify(solicitacoesTrans))
        console.log(solicitacoesTrans)
    })
})
