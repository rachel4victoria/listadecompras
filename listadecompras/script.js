const inputItem = document.getElementById("input-item")
const listadeCompras = document.getElementById("lista-de-compras")

const botaoadd = document.getElementById("adicionar-item") /*adicionar o evento ao botão*/
let contador = 0;
botaoadd.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputItem.value === "") {
        alert("Insira um item!");
        return
    }

    const itemDaLista = document.createElement("li"); /*criação da lista de itens adicionados*/
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";

    inputCheckbox.id = "checkbox-" + contador++;/* contador para adicionar itens a lista*/
    const nometexto = document.createElement("p");
    nometexto.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nometexto.style.textDecoration = "line-through";
        } else {
            nometexto.style.textDecoration = "none"
        }
    })

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nometexto);

    itemDaLista.appendChild(containerItemDaLista);


    const semana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    const data = new Date().toLocaleDateString("pt-BR")
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const dataCompleta = `${semana} (${data}) às ${hora}`;
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")

    itemDaLista.appendChild(itemData);
    listadeCompras.appendChild(itemDaLista);

    verificarListaVazia();


})



const mensagemvazia = document.querySelector(".mensagemdalista");

function verificarListaVazia() {
    const listacomItens = listadeCompras.querySelectorAll("li");
    if(listacomItens.length === 0){
        mensagemvazia.style.display = "block"
    } else {
        mensagemvazia.style.display = "none"
    }
}