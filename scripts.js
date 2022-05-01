//classe candidato
class Candidato{
    //construtor da classe candidatos
    constructor(nome, sobrenome, cpf, dataN, vaga, idade){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._cpf = cpf;
        this._dataN = dataN;
        this._vaga = vaga;
        this._idade = idade;
    }

    //fazendo os metodos get e set, 
    get nome(){
        return this._nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    get cpf(){
        return this._cpf;
    }

    get dataN(){      
        return this._dataN;
    }
    set dataN(valorDataN){
        this._dataN = valorDataN;
    }

    get vaga(){
        return this._vaga;
    }

    get idade(){
        return this._idade;
    }
}

//var validções
var cpfs = [];
var vaga1 = ["", 0, false];
var vaga2 = ["", 0, false];
var vaga3 = ["", 0, false];
var vaga4 = ["", 0, false];
var vaga5 = ["", 0, false];
var cpfD

// funcão main, para chamar as demais funções
function main(){ 

    getDados();
  //  formtCpf(d._cpf)
    formtData(d._dataN);
    exibirDados();
    impedirRefresh();  
}

function salvar(){
    alert("Pronto! os seus candidatos foram salvos!!")
    location.reload();
}

//função para pegar os dados dos inputs e criar uma classe 
function getDados(){
    let listaDados = [];
    //criando uma candidato em "d"
    d = new Candidato(listaDados[0], listaDados[1], listaDados[2], listaDados[3], listaDados[4], "");
    //fazendo um loop para pegar os dados
	for (var i = 0; i <= 4	; i++) {
		const input = document.getElementsByTagName("input");
		var dadoinput = input[i].value; 
		listaDados[i] = dadoinput;    
	}
    //setando a idade atráves da função fIdade
    var idade = fIdade(listaDados[3]);
    //setando os valores de candidato
    d._nome = listaDados[0];
    d._sobrenome = listaDados[1];
    d._cpf = listaDados[2];
    d._dataN = listaDados[3];
    d._vaga = listaDados[4];
    d._idade = idade;
}

//verifica a idade
function fIdade(dataN){
    var dia = new Date;

    ano_atual = dia.getFullYear();
    mes_atual = dia.getMonth();
    dia_atual = dia.getDate();
    
    dataN = dataN.split("-");
    var idade = ano_atual - dataN[0];

    if (mes_atual < dataN[1] || mes_atual == dataN[1] && dia_atual < dataN[2]) {
        idade--;
    }
    return idade
}

//formata a data para o padrão brasileiro
function formtData(data){
    /*separando a data onde tem o "-", criando um array com 3 itens,
    invertendo os valores com .reverse(para ficar no padrão brasileiro) e juntando novamente com um "/" entre eles.*/
	let dataF = data.split("-").reverse().join("/");
    d._dataN = dataF;
	return d._dataN;
}

//validando e atribuindo informações para o array referente à vaga
function validaVagas(){
    /*validando se o campo [0](vaga) está vazio, se não adicionando a vaga nele e 
    adicionando uma unidade ao campo [1](quantidade de candidatos na vaga)*/
    if (vaga1[0] == "") {
        vaga1[0] = d._vaga;
        vaga1[1] = 1;
    //verificando se a vaga atual é do mesmo array, após isso adicionando um candidato até que chegue em 3
    }else if (vaga1[0] == d._vaga && vaga1[1] < 3 && cpfD == false){
        let valor = vaga1[1];
        valor = valor + 1;     
        vaga1[1] = valor;
    /*verificando se a vaga atual é do mesmo array e caso positivo, 
    mudando o campo [2] para "true", informando assim que a quantidade atingiu 3.*/
    }else if (vaga1[0] == d._vaga && vaga1[1] == 3){
        vaga1[2] = true;
    } else

    //a partir daqui, repetirei o mesmo para todas as 5 vagas, apenas mudando os valores e adicionando condições no if inicial.
    if (!(vaga1[0] == "") && vaga2[0] == "") {
        vaga2[0] = d._vaga;
        vaga2[1] = 1;
    }else if (vaga2[0] == d._vaga && vaga2[1] < 3  && cpfD == false){
        let valor = vaga2[1];
        valor = valor + 1;     
        vaga2[1] = valor;
    }else if (vaga2[0] == d._vaga && vaga2[1] == 3){
        vaga2[2] = true;
    }else

    if (!( (vaga1[0] == "") && (vaga2[0] == "") ) && vaga3[0] == "" ) {
        vaga3[0] = d._vaga;
        vaga3[1] = 1;
    }else if (vaga3[0] == d._vaga && vaga3[1] < 3 && cpfD == false){
        let valor = vaga3[1];
        valor = valor + 1;     
        vaga3[1] = valor;  
    }else if (vaga3[0] == d._vaga && vaga3[1] == 3){
        vaga3[2] = true;
    }else

    if (!( (vaga1[0] == "") && (vaga2[0] == "") && (vaga3[0] == "") ) && vaga4[0] == "") {
        vaga4[0] = d._vaga;
        vaga4[1] = 1;
    }else if (vaga4[0] == d._vaga && vaga4[1] < 3 && cpfD == false){
        let valor = vaga4[1];
        valor = valor + 1;     
        vaga4[1] = valor;  
    }else if (vaga4[0] == d._vaga && vaga4[1] == 3){
        vaga4[2] = true;
    }else

    if (!( (vaga1[0] == "") && (vaga2[0] == "") && (vaga3[0] == "") && (vaga4[0] == "") ) && vaga5[0] == "") {
        vaga5[0] = d._vaga;
        vaga5[1] = 1;
    }else if (vaga5[0] == d._vaga && vaga5[1] < 3 && cpfD == false){
        let valor = vaga5[1];
        valor = valor + 1;     
        vaga5[1] = valor;  
    }else if (vaga5[0] == d._vaga && vaga5[1] == 3){
        vaga5[2] = true;
    }
}

//validando se a vaga está lotada
function fVagaLotada(){
    //criando um array para as situações das vagas
    var vagaLotada = [false, false, false, false, false]

    //validando qual é a vaga e se ela está cheia
    if( (vaga1[0] == d._vaga && vaga1[2] == true)){
        vagaLotada[0] = true;
    }else{
        vagaLotada [0]= false;
    }

    if( (vaga2[0] == d._vaga && vaga2[2] == true)){
        vagaLotada[1] = true;
    }else{
        vagaLotada[1]= false;
    }

    if( (vaga3[0] == d._vaga && vaga3[2] == true)){
        vagaLotada[2] = true;
    }else{
        vagaLotada[2] = false;
    }

    if( (vaga4[0] == d._vaga && vaga4[2] == true)){
        vagaLotada[3] = true;
    }else{
        vagaLotada[3] = false;
    }

    if( (vaga5[0] == d._vaga && vaga5[2] == true)){
        vagaLotada[4] = true;
    }else{
        vagaLotada[4] = false;
    }
    
    return vagaLotada;
}
//exibe os dados na tabela e faz validações
function exibirDados(){
    const tbody = document.getElementById("tbody");
    const qtdLinha = document.getElementsByTagName("tr").length;
    validaVagas();
    let vagaLotada = fVagaLotada();
    
    //validando se os campos estão vazios
    if(!(d._nome == "" || d._sobrenome == "" || d._cpf.length < 14 || d._dataN == "" || d._idade == "" || d._vaga == "") ){

        //validação se o cpf já existe
        if (!cpfs.includes(d._cpf)){
            cpfD = false;
            
            //validação para ver se a vaga está livre permitir a atribuição
            if ((vagaLotada[0] == false) && (vagaLotada[1] == false) && (vagaLotada[2] == false) && (vagaLotada[3] == false) && (vagaLotada[4] == false)){

                //validação se já tem 15 candidatos
                if (qtdLinha < 16){
                    //inserindo uma linha na tabela
                    let tr = tbody.insertRow();

                    //inserindo celulas na tabela
                    let td_nome = tr.insertCell();
                    let td_sobrenome = tr.insertCell();
                    let td_cpf = tr.insertCell();
                    let td_dataN = tr.insertCell();
                    let td_idade = tr.insertCell();
                    let td_emi = tr.insertCell();
                    let td_vaga = tr.insertCell();

                    //inserindo valores nas celulas
                    td_nome.innerText = d._nome;
                    td_sobrenome.innerText = d._sobrenome;
                    td_cpf.innerText = d._cpf;
                    td_dataN.innerText = d._dataN;
                    td_idade.innerText = d._idade;
                    td_vaga.innerText = d._vaga;
                    //validação se a pessoa é mair de idade
                    if (d._idade >= 18){
                        td_emi.innerText = "Sim"; 
                    }else{
                        td_emi.innerText = "Não";
                    }
                    //incrementação do cpf no array cpfs
                    cpfs.push(d._cpf);
                
                    //enviando avisos ao usuário
                }else{
                    alert("Valor máximo de usuários atingido!")
                }

            }else{
                alert("Quantidade de candidatos por esta vaga atingida! Por favor use outra vaga!")
            }
            
        }else{
            cpfD = true;
            alert("Candidato Já cadastrado!!")
        }
   }
}

//impede o refresh do submit
function impedirRefresh(){
    const form = document.getElementById("candidato")
    form.addEventListener("submit", e => {e.preventDefault()})
}
