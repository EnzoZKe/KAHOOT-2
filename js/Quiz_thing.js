var questions = JSON.parse(localStorage.getItem('dadosPerguntas')) || []
var rank = JSON.parse(localStorage.getItem('rank')) || []

var atual = 0
var points = 0

console.log(questions);

mostrarPerguntas()

function mostrarPerguntas() {
    //for (atual in questions) {
    if (atual >= questions.length) {
        alert("Acabou o QUIZ")

        var jogador = {
            'nome': localStorage.getItem('dadosNome'),
            'pontuação': points,
            'foto': localStorage.getItem('dadosPFP')
        }

        rank.push(jogador)
        localStorage.setItem('rank', JSON.stringify(rank))
        location.href = "congrats.html"
        return
    }

    //coloca a pergunta
    document.getElementById("title").innerHTML = `${questions[atual].perg}`

    //coloca uma imagem
    document.getElementById("image").innerHTML = `<img src="${questions[atual].foto}" class="foto">`

    //coloca as respostas
    document.getElementById("resp1").innerHTML = `${questions[atual].res1}`
    document.getElementById("resp2").innerHTML = `${questions[atual].res2}`
    document.getElementById("resp3").innerHTML = `${questions[atual].res3}`
    document.getElementById("resp4").innerHTML = `${questions[atual].res4}`

    //pontos
    document.getElementById("pontos").innerHTML = points



    //}

}


//Respostas!!
function checkResp1() {
    if (questions[atual].respCerta1) {
        alert("acertou")
        points++
    } else {
        points--
        alert("errastes")
    }
    atual++
    mostrarPerguntas()
}

function checkResp2() {
    if (questions[atual].respCerta2) {
        alert("acertou")
        points++
    } else {
        points--
        alert("errastes")
    }
    atual++
    mostrarPerguntas()
}

function checkResp3() {
    if (questions[atual].respCerta3) {
        points++
        alert("acertou")
    } else {
        points--
        alert("errastes")
    }
    atual++
    mostrarPerguntas()
}

function checkResp4() {
    if (questions[atual].respCerta4) {
        points++
        alert("acertou")
    } else {
        points--
        alert("errastes")
    }
    atual++
    mostrarPerguntas()
}

