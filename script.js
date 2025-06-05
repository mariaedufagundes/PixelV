//Busca um elemento no HTML e salva em uma variavel//

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {

    //Se o menu estia fechado
    if (menu.classList.contains("menu-fechado")){
        //abrir o menu
        menu.classList.remove("menu-fechado")

        //mostrar icone x
        iconeX.style.dispaly = "inline"

        // esconder o icone barras
        iconeBarras.style.display = "none"

    }
    //Senão
    else {
        //fechar o menu
        menu.classList.add("menu-fechado")

        //esconder icone x
        iconeX.style.display = "none"

        //mostrar icone barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    iconeX.style.display = "inline"

    iconeBarras.style.display = "none"
}

