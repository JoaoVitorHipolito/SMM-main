let btnAgtSaude = document.querySelector(".btnSolicitacaoAgenteSaude")
let btnAgtEnd = document.querySelector(".btnSolicitacaoAgenteEnd")
let dataAtual = new Date()
let solicitacoesAgente = []
let solicitacoesAgenteEnd = []

if(btnAgtSaude){
    btnAgtSaude.addEventListener("click", ()=>{
            solicitacoesAgente.push({solicitacao: "Solicitação do Agente de Saúde", data: `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`, status: "Pendente"})
            localStorage.setItem("solicitacoesAgente", JSON.stringify(solicitacoesAgente))
    })
}

if(btnAgtEnd){
    btnAgtEnd.addEventListener("click", ()=>{
            solicitacoesAgenteEnd.push({solicitacao: "Solicitação do Agente de Endemias", data: `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`, status: "Pendente"})
            localStorage.setItem("solicitacoesAgenteEnd", JSON.stringify(solicitacoesAgenteEnd))
    })
}


