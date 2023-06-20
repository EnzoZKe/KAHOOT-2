var totalPerg = []

var questions = JSON.parse(localStorage.getItem('dadosPerguntas')) || []
console.log(questions);

function criar(){
    //console.log("asdwaf");
    document.getElementById("perguntas").innerHTML =
    `<div class="questions">
        <h3>Questão<h3>
        <div class="pergs">
            <input type="text" class="inpu" placeholder="Coloque sua pergunta" id="Quest"><br>
            <input type="text" class="inpu" placeholder="Coloque o link para por uma imagem (opicional)" id="img"><br>
            <input type="text" class="inpu" placeholder="Coloque a resposta 1" id="res1"><input type="radio" id="respCorreta1" name="resp" class="rasdio">
            <input type="text" class="inpu" placeholder="Coloque a resposta 2" id="res2"><input type="radio" id="respCorreta2" name="resp" class="rasdio">
            <input type="text" class="inpu" placeholder="Coloque a resposta 3" id="res3"><input type="radio" id="respCorreta3" name="resp" class="rasdio">
            <input type="text" class="inpu" placeholder="Coloque a resposta 4" id="res4"><input type="radio" id="respCorreta4" name="resp" class="rasdio">
        <div>
    </div>`
    //console.log(totalPerg);
}

function registrar(){
    var perguntaMain = document.getElementById("Quest").value
    var imagem = document.getElementById("img").value
    var perg1 = document.getElementById("res1").value
    var perg2 = document.getElementById("res2").value
    var perg3 = document.getElementById("res3").value
    var perg4 = document.getElementById("res4").value
    var respCerta1 = document.getElementById("respCorreta1").checked
    var respCerta2 = document.getElementById("respCorreta2").checked
    var respCerta3 = document.getElementById("respCorreta3").checked
    var respCerta4 = document.getElementById("respCorreta4").checked
    var Pergs = Number(totalPerg + 1)

    var Awns = {
        'total_de_perguntas': Pergs,
        'perg': perguntaMain,
        'foto': imagem,
        'res1': perg1,
        'res2': perg2,
        'res3': perg3,
        'res4': perg4,
        'respCerta1': respCerta1,
        'respCerta2': respCerta2,
        'respCerta3': respCerta3,
        'respCerta4': respCerta4
    }
    console.log(Awns);

    questions.push(Awns)
    localStorage.setItem('dadosPerguntas',JSON.stringify(questions))
    criar()
    console.log(questions);

    alert("Caso você queira, pode colocar mais perguntas")
}

function colocaNome(){
    localStorage.setItem('dadosNome', document.getElementById("Nomem").value)
    localStorage.setItem('dadosPFP', document.getElementById("pfp").value)
    alert("Nome Cadastrado com sucesso!")
}