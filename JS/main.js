let farmaciaBasica = [
    {
        img: './IMG/remedios/img.webp',
        nome: 'Aciclovir'
    },
    {
        img: './IMG/remedios/img1.webp',
        nome: 'Acebrofilina'
    },
    {
        img: './IMG/remedios/img2.jpg',
        nome: 'Contracep'
    },
    {
        img: './IMG/remedios/img3.webp',
        nome: 'Ácido Acetilsacílico'
    },
    {
        img: './IMG/remedios/img4.jpg',
        nome: 'Benzoderm'
    },
    {
        img: './IMG/remedios/img5.jpg',
        nome: 'Bromazepam'
    },
    {
        img: './IMG/remedios/img6.webp',
        nome: 'promoprida'
    },
    {
        img: './IMG/remedios/img7.jpg',
        nome: 'carbamazenina'
    },
    {
        img: './IMG/remedios/img8.webp',
        nome: 'Dipirona'
    },
    {
        img: './IMG/remedios/img9.jfif',
        nome: 'carvedilol'
    },
    {
        img: './IMG/remedios/img10.webp',
        nome: 'cefalexina'
    },
    {
        img: './IMG/remedios/img11.png',
        nome: 'cetoconazol'
    },
    {
        img: './IMG/remedios/img13.jpg',
        nome: 'bromidrado de citalopram'
    },
    {
        img: './IMG/remedios/img14.webp',
        nome: 'Acetato de dexametasona'
    },
]

let farmaciaCase = [
    {
        img: './IMG/remedios/img15.png',
        nome: 'Diazepam'
    },
    {
        img: './IMG/remedios/img16.webp',
        nome: 'Digoxina'
    },
    {
        img: './IMG/remedios/img17.jpg',
        nome: 'Maleato de enalapril'
    },
    {
        img: './IMG/remedios/img20.jpg',
        nome: 'Gardenal'
    },
    {
        img: './IMG/remedios/img21.jpg',
        nome: 'Ginkgo'
    },
    {
        img: './IMG/remedios/img21.jpg',
        nome: 'Ginkgo'
    },
    {
        img: './IMG/remedios/img22.jpg',
        nome: 'Glimepirida'
    },
    {
        img: './IMG/remedios/img24.webp',
        nome: 'Hemofiss'
    },
    {
        img: './IMG/remedios/img25.jpg',
        nome: 'Ibuprofenno'
    },
    {
        img: './IMG/remedios/img26.jpg',
        nome: 'Itraconazol'
    },
    {
        img: './IMG/remedios/img27.jpg',
        nome: 'Monidrato de isossorbida'
    },
    {
        img: './IMG/remedios/img28.webp',
        nome: 'Lactuluse'
    }
]



let buttonsFarm = [...document.querySelectorAll(".buttonsFarm > div")]
let container_remedios = document.querySelector(".container-remedios");
let ol_medicamentos = document.querySelector(".ol-medicamentos");
let emptyList = document.querySelector(".emptyList")

function medicamentosPadrao() {
    farmaciaBasica.forEach((e) => {
        container_remedios.innerHTML += `<div class="card-remedio">
                                            <img src=".${e.img}" alt="">
                                            <p>${e.nome}</p>
                                            <button>SOLICITAR</button>
                                         </div>`
    })
}
medicamentosPadrao()

let cardsRemedios = [...container_remedios.children];
inserirMed();


buttonsFarm.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.children[0].textContent === 'FARMÁCIA BÁSICA') {
            container_remedios.innerHTML = "";
            farmaciaBasica.forEach((e) => {
                container_remedios.innerHTML += `<div class="card-remedio">
                                                    <img src=".${e.img}" alt="">
                                                    <p>${e.nome}</p>
                                                    <button>SOLICITAR</button>
                                                 </div>`
            })
            cardsRemedios = [...container_remedios.children];
            inserirMed();
        }
        if (btn.children[0].textContent === 'CASE') {
            container_remedios.innerHTML = "";
            farmaciaCase.forEach((e) => {
                container_remedios.innerHTML += `<div class="card-remedio">
                                                    <img src=".${e.img}" alt="">
                                                    <p>${e.nome}</p>
                                                    <button>SOLICITAR</button>
                                                 </div>`
            })
            cardsRemedios = [...container_remedios.children];
            inserirMed();
        }
    })
})

function inserirMed() {
    cardsRemedios.forEach((e) => {
        e.children[2].addEventListener("click", () => {
            emptyList.style.display = "none"
            ol_medicamentos.innerHTML += `<li>${e.children[1].textContent}<i class="fa-solid fa-square-minus" style="color: #e10e0e; margin-left: .5rem; font-size: 1.2rem;"></i></li>`
            deletarMed()
        })
    })
}

function deletarMed() {
    let nomesMed = [...ol_medicamentos.children]
    nomesMed.forEach((nome) => {
        if (nome.tagName === "P") {
            return
        } else {
            nome.children[0].addEventListener("click", () => {
                nome.remove()
            })
        }
    })
}

let btnConfirmarMed = document.querySelector(".btnConfirmarMed")
let dataAtual = new Date()
let solicitacoesMed = []

btnConfirmarMed.addEventListener("click", () => {
    solicitacoesMed.push({solicitacao: "Solicitação de Medicamentos", data: `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`, status: "Pendente"})
    localStorage.setItem("solicitacoesMed", JSON.stringify(solicitacoesMed))
})
