class Nota {
    constructor(nota, data, idNota = id, cor = 'branco', concluido = false) {
        this.nota = nota;
        this.data = data;
        this.id = idNota;
        this.cor = cor
        this.concluido = concluido;
    }
}

let id = localStorage.getItem('ids') || 1

let notas = JSON.parse(localStorage.getItem('notas')) || []

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

    const div_nota = document.createElement('div')
    div_nota.classList.add('div-nota')

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
    const buttonColor = document.createElement('button')

    const changeColor = document.createElement('div')
    changeColor.classList.add('colorButton', 'cursor-pointer')
    changeColor.style.backgroundColor = "#f8f7f7"


    const check = document.createElement('i')
    check.classList.add('fa-solid', 'fa-check', 'cursor-pointer')

    const trash = document.createElement('i')
    trash.classList.add('fa-solid', 'fa-trash', 'cursor-pointer')


    document.getElementById('section-nota').appendChild(div_nota)
    div_nota.appendChild(divNota)
    divNota.appendChild(headerNota)
    divNota.appendChild(bodyNota)
    headerNota.appendChild(dataSpan)
    headerNota.appendChild(iconsSpan)
    iconsSpan.appendChild(buttonColor)
    iconsSpan.appendChild(buttonCheck)
    iconsSpan.appendChild(buttonTrash)
    buttonColor.appendChild(changeColor)
    buttonCheck.appendChild(check)
    buttonTrash.appendChild(trash)

    const divChangeColor = document.createElement('div')
    divChangeColor.classList.add('div-change-color')
    divChangeColor.style.display = 'none'

    const esquerda = document.createElement('div')
    esquerda.classList.add('esquerda')

    const direita = document.createElement('div')
    direita.classList.add('direita')


    div_nota.appendChild(divChangeColor)
    divChangeColor.appendChild(esquerda)
    divChangeColor.appendChild(direita)


    const verde = document.createElement('div')
    verde.classList.add('trocarCor', 'cursor-pointer', 'verde')
    verde.addEventListener('click', () => trocarCor('verde'))

    const azul = document.createElement('div')
    azul.classList.add('trocarCor', 'cursor-pointer', 'azul')
    azul.addEventListener('click', () => trocarCor('azul'))

    const amarelo = document.createElement('div')
    amarelo.classList.add('trocarCor', 'cursor-pointer', 'amarelo')
    amarelo.addEventListener('click', () => trocarCor('amarelo'))

    const vermelho = document.createElement('div')
    vermelho.classList.add('trocarCor', 'cursor-pointer', 'vermelho')
    vermelho.addEventListener('click', () => trocarCor('vermelho'))


    const roxo = document.createElement('div')
    roxo.classList.add('trocarCor', 'cursor-pointer', 'roxo')
    roxo.addEventListener('click', () => trocarCor('roxo'))

    const rosa = document.createElement('div')
    rosa.classList.add('trocarCor', 'cursor-pointer', 'rosa')
    rosa.addEventListener('click', () => trocarCor('rosa'))

    const laranja = document.createElement('div')
    laranja.classList.add('trocarCor', 'cursor-pointer', 'laranja')
    laranja.addEventListener('click', () => trocarCor('laranja'))

    const branco = document.createElement('div')
    branco.classList.add('trocarCor', 'cursor-pointer', 'branco')
    branco.addEventListener('click', () => trocarCor('branco'))


    esquerda.appendChild(verde)
    esquerda.appendChild(azul)
    esquerda.appendChild(amarelo)
    esquerda.appendChild(vermelho)

    direita.appendChild(roxo)
    direita.appendChild(rosa)
    direita.appendChild(laranja)
    direita.appendChild(branco)

    changeColor.addEventListener('click', () => {

        if (divChangeColor.style.display == 'none') {
            divChangeColor.style.display = ''
        } else if (divChangeColor.style.display == '') {
            divChangeColor.style.display = 'none'
        }

    })

    const trocarCor = function (cor) {

        switch (cor) {
            case 'verde':
                divNota.style.backgroundColor = '#d4f4dd';
                headerNota.style.backgroundColor = '#aad4b5ff';

                novaNota.cor = cor
                salvarNota(novaNota)
                break;
            case 'azul':
                divNota.style.backgroundColor = '#d4e9f4';
                headerNota.style.backgroundColor = '#a4c9dcff';

                novaNota.cor = cor
                salvarNota(novaNota)
                break;
            case 'amarelo':
                divNota.style.backgroundColor = '#fff9cc';
                headerNota.style.backgroundColor = '#e6da8bff';

                novaNota.cor = cor
                salvarNota(novaNota)
                break;
            case 'vermelho':
                divNota.style.backgroundColor = '#f8d7da';
                headerNota.style.backgroundColor = '#dc9fa5ff';

                novaNota.cor = cor
                salvarNota(novaNota)
                break;
            case 'roxo':
                divNota.style.backgroundColor = '#e8ddf8';
                headerNota.style.backgroundColor = '#c5aceaff';

                novaNota.cor = cor
                salvarNota(novaNota)
                break;
            case 'rosa':
                divNota.style.backgroundColor = '#fcd5ce';
                headerNota.style.backgroundColor = '#e4a398ff';

                novaNota.cor = cor
                salvarNota(novaNota)
                break;
            case 'laranja':
                divNota.style.backgroundColor = '#ffe5b4';
                headerNota.style.backgroundColor = '#f5bc70ff';

                novaNota.cor = cor
                salvarNota(novaNota)
                break;
            case 'branco':
                divNota.style.backgroundColor = '#f8f7f7';
                headerNota.style.backgroundColor = '#e6e6e6';

                novaNota.cor = cor
                salvarNota(novaNota)
                break;
            default:
                console.warn('Cor não reconhecida:', cor);
                break;

        }


    }

    dataSpan.innerHTML = `${diaSemana} ${diaMes} ${mes}, ${ano} as ${horario()}`

    const novaNota = new Nota(bodyNota.innerHTML, dataSpan.innerHTML, id)

    bodyNota.addEventListener('input', function () {

        novaNota.nota = bodyNota.innerHTML

        salvarNota(novaNota)

    })

    trash.addEventListener('click', function () {

        if (confirm('Tem certeza que deseja remover essa nota?')) {
            divNota.remove()
            divChangeColor.remove()

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

        const div_nota = document.createElement('div')
        div_nota.classList.add('div-nota')

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
        const buttonColor = document.createElement('button')

        const changeColor = document.createElement('div')
        changeColor.classList.add('colorButton', 'cursor-pointer')



        const check = document.createElement('i')
        check.classList.add('fa-solid', 'fa-check', 'cursor-pointer')

        const trash = document.createElement('i')
        trash.classList.add('fa-solid', 'fa-trash', 'cursor-pointer')


        document.getElementById('section-nota').appendChild(div_nota)
        div_nota.appendChild(divNota)
        divNota.appendChild(headerNota)
        divNota.appendChild(bodyNota)
        headerNota.appendChild(dataSpan)
        headerNota.appendChild(iconsSpan)
        iconsSpan.appendChild(buttonColor)
        iconsSpan.appendChild(buttonCheck)
        iconsSpan.appendChild(buttonTrash)
        buttonColor.appendChild(changeColor)
        buttonCheck.appendChild(check)
        buttonTrash.appendChild(trash)

        const divChangeColor = document.createElement('div')
        divChangeColor.classList.add('div-change-color')
        divChangeColor.style.display = 'none'

        const esquerda = document.createElement('div')
        esquerda.classList.add('esquerda')

        const direita = document.createElement('div')
        direita.classList.add('direita')


        div_nota.appendChild(divChangeColor)
        divChangeColor.appendChild(esquerda)
        divChangeColor.appendChild(direita)


        const verde = document.createElement('div')
        verde.classList.add('trocarCor', 'cursor-pointer', 'verde')
        verde.addEventListener('click', () => trocarCor('verde'))

        const azul = document.createElement('div')
        azul.classList.add('trocarCor', 'cursor-pointer', 'azul')
        azul.addEventListener('click', () => trocarCor('azul'))

        const amarelo = document.createElement('div')
        amarelo.classList.add('trocarCor', 'cursor-pointer', 'amarelo')
        amarelo.addEventListener('click', () => trocarCor('amarelo'))

        const vermelho = document.createElement('div')
        vermelho.classList.add('trocarCor', 'cursor-pointer', 'vermelho')
        vermelho.addEventListener('click', () => trocarCor('vermelho'))


        const roxo = document.createElement('div')
        roxo.classList.add('trocarCor', 'cursor-pointer', 'roxo')
        roxo.addEventListener('click', () => trocarCor('roxo'))

        const rosa = document.createElement('div')
        rosa.classList.add('trocarCor', 'cursor-pointer', 'rosa')
        rosa.addEventListener('click', () => trocarCor('rosa'))

        const laranja = document.createElement('div')
        laranja.classList.add('trocarCor', 'cursor-pointer', 'laranja')
        laranja.addEventListener('click', () => trocarCor('laranja'))

        const branco = document.createElement('div')
        branco.classList.add('trocarCor', 'cursor-pointer', 'branco')
        branco.addEventListener('click', () => trocarCor('branco'))


        esquerda.appendChild(verde)
        esquerda.appendChild(azul)
        esquerda.appendChild(amarelo)
        esquerda.appendChild(vermelho)

        direita.appendChild(roxo)
        direita.appendChild(rosa)
        direita.appendChild(laranja)
        direita.appendChild(branco)

        changeColor.addEventListener('click', () => {

            if (divChangeColor.style.display == 'none') {
                divChangeColor.style.display = ''
            } else if (divChangeColor.style.display == '') {
                divChangeColor.style.display = 'none'
            }

        })



        const trocarCor = function (cor) {

            switch (cor) {
                case 'verde':
                    divNota.style.backgroundColor = '#d4f4dd';
                    headerNota.style.backgroundColor = '#aad4b5ff';

                    nota.cor = cor
                    salvarNota(nota)
                    break;
                case 'azul':
                    divNota.style.backgroundColor = '#d4e9f4';
                    headerNota.style.backgroundColor = '#a4c9dcff';

                    nota.cor = cor
                    salvarNota(nota)
                    break;
                case 'amarelo':
                    divNota.style.backgroundColor = '#fff9cc';
                    headerNota.style.backgroundColor = '#e6da8bff';

                    nota.cor = cor
                    salvarNota(nota)
                    break;
                case 'vermelho':
                    divNota.style.backgroundColor = '#f8d7da';
                    headerNota.style.backgroundColor = '#dc9fa5ff';

                    nota.cor = cor
                    salvarNota(nota)
                    break;
                case 'roxo':
                    divNota.style.backgroundColor = '#e8ddf8';
                    headerNota.style.backgroundColor = '#c5aceaff';

                    nota.cor = cor
                    salvarNota(nota)
                    break;
                case 'rosa':
                    divNota.style.backgroundColor = '#fcd5ce';
                    headerNota.style.backgroundColor = '#e4a398ff';

                    nota.cor = cor
                    salvarNota(nota)
                    break;
                case 'laranja':
                    divNota.style.backgroundColor = '#ffe5b4';
                    headerNota.style.backgroundColor = '#f5bc70ff';

                    nota.cor = cor
                    salvarNota(nota)
                    break;
                case 'branco':
                    divNota.style.backgroundColor = '#f8f7f7';
                    headerNota.style.backgroundColor = '#e6e6e6';

                    nota.cor = cor
                    salvarNota(nota)
                    break;
                default:
                    console.warn('Cor não reconhecida:', cor);
                    break;

            }
        }

        changeColor.style.backgroundColor = trocarCor(nota.cor)

        bodyNota.innerHTML = nota.nota
        dataSpan.innerHTML = nota.data

        changeColor.style.backgroundColor = trocarCor(nota.cor)

        bodyNota.addEventListener('input', function () {

            nota.nota = bodyNota.innerHTML

            salvarNota(nota)

        })

        trash.addEventListener('click', function () {

            if (confirm('Tem certeza que deseja remover essa nota?')) {
                divNota.remove()
                divChangeColor.remove()

                notas = notas.filter(n => n.id !== nota.id)

                localStorage.setItem('notas', JSON.stringify(notas))

            }
        })
    })
}



atualizarPagina()
