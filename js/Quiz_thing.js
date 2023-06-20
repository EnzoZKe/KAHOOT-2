var questions = JSON.parse(localStorage.getItem('dadosPerguntas')) || bancoPerguntas()

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

function bancoPerguntas(){
    [
        {
           "total_de_perguntas":1,
           "perg":"De que ano é esse mapa",
           "foto":"https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag-map_of_the_world_%281914%29.png",
           "res1":"1800",
           "res2":"2000",
           "res3":"1935",
           "res4":"1914",
           "respCerta1":false,
           "respCerta2":false,
           "respCerta3":false,
           "respCerta4":true
        },
        {
           "total_de_perguntas":1,
           "perg":"De que ano é esse mapa?",
           "foto":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag-map_of_the_world_%281965%29.png/1200px-Flag-map_of_the_world_%281965%29.png",
           "res1":"2010",
           "res2":"1900",
           "res3":"1960",
           "res4":"1930",
           "respCerta1":false,
           "respCerta2":false,
           "respCerta3":true,
           "respCerta4":false
        },
        {
           "total_de_perguntas":1,
           "perg":"Qual continente colonizou a Africa?",
           "foto":"data:image/jpeg;base64,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",
           "res1":"Asia",
           "res2":"America",
           "res3":"Europa",
           "res4":"Oceania",
           "respCerta1":false,
           "respCerta2":false,
           "respCerta3":true,
           "respCerta4":false
        },
        {
           "total_de_perguntas":1,
           "perg":"Qual a capital da Tchéquia?",
           "foto":"https://diariodoturismo.com.br/wp-content/uploads/2016/02/Praga_RepTcheca_02_16.jpg",
           "res1":"Rondonia",
           "res2":"Praga",
           "res3":"Berlim",
           "res4":"Varsóvia",
           "respCerta1":false,
           "respCerta2":true,
           "respCerta3":false,
           "respCerta4":false
        },
        {
           "total_de_perguntas":1,
           "perg":"Qual a batalha mais sangrenta da 2° guerra mundial?",
           "foto":"https://averdade.org.br/wp-content/uploads/2023/02/images-2.jpeg",
           "res1":"Batalha de Berlim",
           "res2":"Batalha de Stalingrado",
           "res3":"Invasão a Grécia",
           "res4":"Batalha de Varsovia",
           "respCerta1":false,
           "respCerta2":true,
           "respCerta3":false,
           "respCerta4":false
        },
        {
           "total_de_perguntas":1,
           "perg":"Qual país iniciou a primeira guerra mundial?",
           "foto":"",
           "res1":"Austira-Hungria e Sérvia",
           "res2":"Polônia e Rússia",
           "res3":"Império Alemão e França",
           "res4":"Reino Unido e Albania",
           "respCerta1":true,
           "respCerta2":false,
           "respCerta3":false,
           "respCerta4":false
        }
     ]

     localStorage.setItem('dadosPerguntas', JSON.stringify(questions))
     return questions
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

