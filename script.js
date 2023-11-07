/*

Escreva um programa em javascript que funcione como um cadastro de imovel, e atenda os seguintes requisitos

-Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair
- o menu interativo deve mostrar no topo a quantidade de iamgens cadastrados.
- o menu deve ter a opção de salvar um imovél
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - se possui garagem.
- O menu também deve ter a opção de mostrar todos os imovéis salvos.


*/

const imoveis = []
let opcao = ""

do{

    opcao = prompt(
        "Bem-vindo(a) ao cadastro de imóveis!\n" +
        "TOtal de imóveis: " + imoveis.length.length + 
        "\n\nEscolha uma opção: \n1. Novo imovel\n2. Listar imoveis\n3. Sair"
    )

    switch(opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informa o nome do proprietário do imóvel: ")
            imovel.quartos = prompt("quantos quartos possui o imovél? ")
            imovel.banheiros = prompt("Quantos banheiros possui o imovél ")
            imovel.garagem = prompt("O imovél possui garagem? (Sim/Não) ")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" + 
                "\nProprietário " + imovel.proprietario + 
                "\nQuartos: " + imovel.quartos + 
                "\nBanheiros: " + imovel.banheiros + 
                "\nPossui garagem? " + imovel.garagem
            )

            if(confirmacao){
                imoveis.push(imovel)
            }else{
                alert("Voltando ao menu")
            }
            break
        case "2":
            for (let i = 0; i< imoveis.length; i++){
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario + 
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros + 
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }

}while(opcao !== "3"){

}