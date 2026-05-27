class heroi{
    constructor(nome,classe){
        this.nome = nome;
        this.classe = classe;
    }
}
function criarHeroi(){
    //  capturando o que o usuario digitou/ selecionou na tela

    const nomeDigitado = document.getElementById('nomeInput').value;
    const classeSelecionada = document.getElementById('classeSelect').value;
    // criando  o objeto dinamicamente  com os valores dos campos 

    const novoHeroi = new heroi(nomeDigitado, classeSelecionada);

    //exibindo na tela atraves das propriedadws do objeto
    document.getElementById('resultado').style.display = "block";
    document.getElementById('dadosHeroi').innerHTML = `nome: <strong>${novoHeroi.nome} </strong> <br>
    classe: <strong>${novoHeroi.classe} </strong> <br>`

}