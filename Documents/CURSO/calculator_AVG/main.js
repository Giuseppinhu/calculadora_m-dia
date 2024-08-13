const form = document.getElementById('formulario');
const img_Aprov = `<img src="./images/aprovado.png" alt="emoji_1">` 
const img_Reprov = `<img src="./images/reprovado.png" alt="emoji_1">` 
const atividades = []
const notas = []
const spanAprovado = `<span class="aprovado">Aprovado</span>`;
const spanReprovado = `<span class="reprovado">Reprovado</span>`;

let linhas = '';
    
form.addEventListener('submit', function(e) {
    e.preventDefault();

    add_line()
    atualTable()
    atualMediaFinal()
});

function add_line() {
    const input1 = document.getElementById('nome_atividade');
    const input2 = document.getElementById('nota_atividade');

    if(atividades.includes(input1.value)){
        alert(`Atividade: "${input1.value}" já inserida.`)
    }

    atividades.push(input1.value);
    notas.push(parseFloat(input2.value));

    let linha = '<tr>'
    linha += `<td>${input1.value}</td>`;
    linha += `<td>${input2.value}</td>`;
    linha += `<td>${input2.value >= 6 ? img_Aprov : img_Reprov}</td>`; 
    linha += '</tr>'
    
    linhas += linha
   
    input1.value = ''
    input2.value = ''
}

function  atualTable() {
    const corpTable = document.querySelector('tbody')   
    corpTable.innerHTML = linhas
}

function atualMediaFinal() {
    const mediaFinal = calculMediaFinal();

    document.getElementById('media-final').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 6 ? spanAprovado : spanReprovado;
}

function calculMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    } 

    return somaDasNotas / notas.length;
}

