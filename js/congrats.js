var pontos = []
pontos = JSON.parse(localStorage.getItem('total_de_pontos'))
console.log(pontos);

if (pontos == null) {
    pontos = []
}
//console.log(pontos);

var dados = []
dados = JSON.parse(localStorage.getItem('dadosPerguntas'))
if (dados == null) {
    dados = []
}

var nomes = []
nomes = JSON.parse(localStorage.getItem('rank'))
if (nomes == null) {
    nomes = []
}


mostrarPontos()
rank()

function mostrarPontos() {
    console.log(nomes);
    console.log(dados);

    //console.log(dados);
    for (i in nomes) {
        if (nomes[i].pontuação > 0) {
            document.getElementById("winner").innerHTML = `<p> Parabéns ${nomes[i].nome}, você fez ${nomes[i].pontuação} pontos </p>`
        
    } else {
        //console.log(dados);
            document.getElementById("winner").innerHTML = `<p> Mais sorte na proxima vez ${nomes[i].nome}, você fez ${nomes[i].pontuação} pontos </p>`
        }
    }
}

function rank() {
    nomes.sort(function (x, y) { return y.pontuação - x.pontuação })
    for (i in nomes) {
        document.getElementById("showRank").innerHTML +=
            `<div class="concerta">
            <img src="${nomes[i].foto}">
            <p>${nomes[i].nome}: ${nomes[i].pontuação} <br></p>
        </div>
        `
    }
}
