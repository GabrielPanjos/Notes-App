class Nota {
    constructor(nota, data, idNota = id, concluido = false) {
        this.nota = nota;
        this.data = data;
        this.id = idNota;
        this.concluido = concluido;
    }
}

/* 
localStorage.removeItem('ids')
localStorage.removeItem('notas')
*/

let id = localStorage.getItem('ids') || 1

let notas = JSON.parse(localStorage.getItem('notas')) || []

console.log(notas)

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

    const novaNota = new Nota(bodyNota.innerHTML, dataSpan.innerHTML, id)

    bodyNota.addEventListener('input', function () {

        salvarNota(novaNota)

    })

    trash.addEventListener('click', function () {

        if (confirm('Tem certeza que deseja remover essa nota?')) {
            divNota.remove()

            notas = notas.filter(n => n.id !== nota.id)

            localStorage.setItem('notas', JSON.stringify(notas))

        }
    })

    id++
    localStorage.setItem('ids', id)

})

const salvarNota = function (nota) {

    const index = notas.findIndex(n => n.id === nota.id)

    if (index !== -1) {
        notas[index] = nota
    } else {
        notas.push(nota)
    }

    // Salva no localStorage
    localStorage.setItem('notas', JSON.stringify(notas))
}

const atualizarPagina = function () {

    notas.forEach((nota) => {

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


        document.getElementById('section-nota').appendChild(divNota)
        divNota.appendChild(headerNota)
        divNota.appendChild(bodyNota)
        headerNota.appendChild(dataSpan)
        headerNota.appendChild(iconsSpan)
        iconsSpan.appendChild(buttonCheck)
        iconsSpan.appendChild(buttonTrash)
        buttonCheck.appendChild(check)
        buttonTrash.appendChild(trash)

        dataSpan.innerHTML = nota.data
        bodyNota.innerHTML = nota.nota

        bodyNota.addEventListener('input', function () {

            salvarNota(nota)

        })

        trash.addEventListener('click', function () {
            if (confirm('Tem certeza que deseja remover essa nota?')) {
                divNota.remove()

                notas = notas.filter(n => n.id !== nota.id)

                localStorage.setItem('notas', JSON.stringify(notas))

            }
        })
    })
}

atualizarPagina()
