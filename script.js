let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function AtualizaValores(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

AtualizaValores()


//variavel
const valorOriginal = subtotalInfo.valor
const inpQtd = document.getElementById("quantidade-produto-01")
const btnAdd = document.getElementById("btn-adicionar-produto-01")
const btnRm = document.getElementById("btn-subtrair-produto-01")

//criar funcao soma
function adicionarUm() {
  inpQtd.value = Number(inpQtd.value) + 1
  subtotalInfo.quantidade = inpQtd.value
  subtotalInfo.valor = valorOriginal * inpQtd.value
  AtualizaValores()
}
//funcao remover
function removerUm() {

  inpQtd.value = Number(inpQtd.value) - 1
  subtotalInfo.quantidade = inpQtd.value
  subtotalInfo.valor = valorOriginal * inpQtd.value
  AtualizaValores()
}
 
//add evento
btnAdd.addEventListener("click", adicionarUm)
btnRm.addEventListener("click", removerUm)
