let form_consulta = document.querySelector("#form-consulta")
let btnSolicitacaoCons = document.querySelector(".btnSolicitacaoCons")

function especialidades() {
    form_consulta.innerHTML = `
              <div class="file-receita">
                <p>Anexar Receita: </p>
                <label class="receita" for="arquivo">Enviar arquivo</label>
                <input type="file" name="arquivo" id="arquivo">
              </div>

              <div>
                  <p>Local de atendimento:</p>
                  <select name="" id="">
                    <option value="" selected>CEME</option>
                  </select>
              </div>

              <div>
                    <p>Informe o CID da sua consulta:</p>
                    <input type="text" placeholder="Encontre o CID na sua receita. Ex: CID Z10">
              </div>

              <div class="aviso">
                <h4>Aviso <span>⚠</span></h4>
                <p>Antes de confirmar é necessário anexar uma receita válida para prosseguirmos com a solicitação da consulta, ao confimar, sua solicitação ficará como "pendente", e após confirmação você recebera uma notificação informando sobre sua consulta ou Anexar a receita novamente.</p>
                <label for=""><input type="checkbox"> Li e concordo com os <span>termos e serviços</span></label>
              </div>
              <button class="btnSolicitacaoCons" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">CONFIRMAR</button>`
              btnSolicitacaoCons = document.querySelector(".btnSolicitacaoCons")
              btnAtt()
}

function primeiraConsulta() {
    form_consulta.innerHTML = `          
           <div class="escolherEspec">
                <label for="clinico">Clínico/Enfermeiro 
                    <input name="especialidade" id="clinico" type="radio">
                </label>
                <label for="odontologico">Odontológico 
                    <input  name="especialidade" id="odontologico" type="radio">
                </label>
           </div>
              <div>
                  <p>Local de atendimento:</p>
                  <select>
                    <option value="">UBS - JOSÉ RAMOS</option>
                    <option value="">UBS - JOÃO DE SOUZA</option>
                    <option value="">UBS - AGRIPINO</option>
                    <option value="">UBS - ZILDA ARNS</option>
                  </select>
              </div>

              <div class="aviso">
                <h4>Aviso <span>⚠</span></h4>
                <p>Antes de confirmar é necessário anexar uma receita válida para prosseguirmos com a solicitação da consulta, ao confimar, sua solicitação ficará como "pendente", e após confirmação você recebera uma notificação informando sobre sua consulta ou Anexar a receita novamente.</p>
                <label for=""><input type="checkbox"> Li e concordo com os <span>termos e serviços</span></label>
              </div>
              <button class="btnSolicitacaoCons" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">CONFIRMAR</button>`
              btnSolicitacaoCons = document.querySelector(".btnSolicitacaoCons")
              btnAtt()
}

let dataAtual = new Date()
let solicitacoesCons = []


function btnAtt(){
  btnSolicitacaoCons.addEventListener("click", () => {
      solicitacoesCons.push({solicitacao: "Solicitação de Consulta", data: `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`, status: "Pendente"})
      localStorage.setItem("solicitacoesCons", JSON.stringify(solicitacoesCons))
      console.log(solicitacoesCons)
  })
}
btnAtt()