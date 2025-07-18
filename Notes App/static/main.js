class Nota {
    constructor(nota, concluido = false) {
        this.nota = nota;
        this.concluido = concluido;
    }
}

const data = new Date()
const diaMes = data.getDate()
const pegarDiaSemana = data.getDay()
const pegarMes = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const pegarMinutos = data.getMinutes()

let diaSemana
let mes

const minutos = function () {

    if (pegarMinutos < 10) {
        return `0${pegarMinutos}`
    } else {
        return pegarMinutos
    }

}

const horario = function () {

    if (hora < 12) {
        return `${hora}:${minutos()}AM`
    } else if (hora >= 12) {
        return `${hora}:${minutos()}PM`
    }

}



switch (pegarDiaSemana) {
    case 0:
        diaSemana = "Dom"
        break;
    case 1:
        diaSemana = "Seg"
        break;
    case 2:
        diaSemana = "Ter"
        break;
    case 3:
        diaSemana = "Qua"
        break;
    case 4:
        diaSemana = "Qui"
        break;
    case 5:
        diaSemana = "Sex"
        break;
    case 6:
        diaSemana = "Sáb"
        break;
}

switch (pegarMes) {
    case 0:
        mes = "Janeiro"
        break;
    case 1:
        mes = "Fevereiro"
        break;
    case 2:
        mes = "Março"
        break;
    case 3:
        mes = "Abril"
        break;
    case 4:
        mes = "Maio"
        break;
    case 5:
        mes = "Junho"
        break;
    case 6:
        mes = "Julho"
        break;
    case 7:
        mes = "Agosto"
        break;
    case 8:
        mes = "Setembro"
        break;
    case 9:
        mes = "Outubro"
        break;
    case 10:
        mes = "Novembro"
        break;
    case 11:
        mes = "Dezembro"
        break;
}



document.getElementById('adicionarNota').addEventListener('click', function () {

    const divNota = document.createElement('div')
    divNota.classList.add('nota')

    const headerNota = document.createElement('div')
    headerNota.classList.add('header-nota')

    const bodyNota = document.createElement('div')
    bodyNota.classList.add('bodyNota')
    bodyNota.contentEditable = true

    const dataSpan = document.createElement('span')
    const iconsSpan = document.createElement('span')

    const buttonCheck = document.createElement('button')
    const buttonTrash = document.createElement('button')

    const check = document.createElement('i')
    check.classList.add('fa-solid', 'fa-check', 'cursor-pointer')

    const trash = document.createElement('i')
    trash.classList.add('fa-solid', 'fa-trash', 'cursor-pointer')
    trash.addEventListener('click', function () {

        if (confirm('Tem certeza que deseja remover essa nota?')) {
            divNota.remove()
        }
    })

    document.getElementById('section-nota').appendChild(divNota)
    divNota.appendChild(headerNota)
    divNota.appendChild(bodyNota)
    headerNota.appendChild(dataSpan)
    headerNota.appendChild(iconsSpan)
    iconsSpan.appendChild(buttonCheck)
    iconsSpan.appendChild(buttonTrash)
    buttonCheck.appendChild(check)
    buttonTrash.appendChild(trash)

    dataSpan.innerHTML = `${diaSemana} ${diaMes} ${mes}, ${ano} as ${horario()}`

})



const salvarNota = function () {

}