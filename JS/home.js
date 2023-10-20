const keys = Object.keys(localStorage);
let containerSolicitacoes = document.querySelector(".containerSolicitacoes")
let minhasSolicitacoes = document.querySelector(".background-show-hide")
let solicitacoes = [];

keys.forEach((e, i)=>{
    solicitacoes.push(JSON.parse(localStorage.getItem(keys[i])))
});


solicitacoes.forEach((e)=>{
    e.forEach((e)=>{
        containerSolicitacoes.innerHTML += `<div class="solicitacao d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p>${e.solicitacao}</p>
                                                    <p>Data da Solicitação: ${e.data}</p>
                                                    <p>Status: ${e.status}</p>
                                                </div>
                                                <div class="editarDeletar d-flex flex-column">
                                                    <i class="fa-solid fa-trash" style="color: #ff0000;"></i>
                                                    <i class="fa-regular fa-pen-to-square" style="color: rgb(57, 57, 216);;"></i>
                                                </div>
                                            </div>`
    })

    if(containerSolicitacoes.children.length > 0){
        minhasSolicitacoes.classList.remove("background-show-hide")
    }
})

let container = [...containerSolicitacoes.children]
let btnDeletar = [];

container.forEach((e, i)=>{
    btnDeletar.push(containerSolicitacoes.children[i].children[1].children[0])
})


btnDeletar.forEach((e)=>{
    e.addEventListener("click", ()=>{
        let excluir = confirm("Deseja deletar solicitação?")
        if(excluir === true){
            e.parentNode.parentNode.remove()

            if(e.parentNode.parentNode.children[0].children[0].textContent === "Solicitação de Medicamentos"){
                localStorage.removeItem("solicitacoesMed")
            }
            if(e.parentNode.parentNode.children[0].children[0].textContent === "Solicitação de Exame"){
                localStorage.removeItem("solicitacoesExam")
            }
            if(e.parentNode.parentNode.children[0].children[0].textContent === "Solicitação de Consulta"){
                localStorage.removeItem("solicitacoesCons")
            }
            if(e.parentNode.parentNode.children[0].children[0].textContent === "Solicitação de Transporte"){
                localStorage.removeItem("solicitacoesTrans")
            }
            if(e.parentNode.parentNode.children[0].children[0].textContent === "Solicitação do Agente de Saúde"){
                localStorage.removeItem("solicitacoesAgente")
            }
            if(e.parentNode.parentNode.children[0].children[0].textContent === "Solicitação do Agente de Endemias"){
                localStorage.removeItem("solicitacoesAgenteEnd")
            }
            if(e.parentNode.parentNode.children[0].children[0].textContent === "Solicitação do Melhor em Casa"){
                localStorage.removeItem("solicitacoesMEC")
            }
        }
    })
})


