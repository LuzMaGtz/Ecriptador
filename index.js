//Llamar las funciones HTML
const buttonCopiar = document.querySelector(".copiar");
const notificacion = document.querySelector(".notificacion");

//Eliminar visualización imagen/h2
const imagenLupa = document.querySelector(".niño__lupa");
const textoPrincipal = document.querySelector(".titulo__inicial");
const gap = document.querySelector(".resultado__encriptador");

//Boton encriptar
const introducirTexto = document.querySelector(".introducir__texto");
const buttonEncriptar = document.querySelector(".encriptar");
const textoResultado = document.querySelector(".texto__resultado");

buttonEncriptar.addEventListener("click", function () {
    //Eliminar visualización imagen/h2
    imagenLupa.style.display = "none";
    textoPrincipal.style.display = "none";

    //Abrir visualización
    buttonCopiar.style.display = "block";

    //Cambios en el estilo
    textoResultado.style.textAlign = "left";
    gap.style.gap = "0";

    // Obtén el valor del texto introducido por el usuario en el contenedor 1
    const textoIntroducido = introducirTexto.value;

    //Cambiar las letras
    let textoModificado = textoIntroducido;

    if (textoIntroducido.includes("a")) {
        textoModificado = textoModificado.replace(/a/g, "ai");
    }

    if (textoIntroducido.includes("e")) {
        textoModificado = textoModificado.replace(/e/g, "enter");
    }

    if (textoIntroducido.includes("i")) {
        textoModificado = textoModificado.replace(/i/g, "imes");
    }

    if (textoIntroducido.includes("o")) {
        textoModificado = textoModificado.replace(/o/g, "ober");
    }

    if (textoIntroducido.includes("u")) {
        textoModificado = textoModificado.replace(/u/g, "ufat");
    }

    textoResultado.textContent = textoModificado;
});

//Funcionalidad de copiar al buttonCopiar
//Funcionalidad de copiar al buttonCopiar
buttonCopiar.addEventListener("click", () => {
    const mensajeCopy = document.querySelector(".mensaje-copy");
    mensajeCopy.classList.add('show');
    copyToClipBoard(textoResultado);

    setTimeout(()=>{
        mensajeCopy.classList.remove('show');
    }, 1300);
});


function copyToClipBoard(elemento) {
    const inputOculta = document.createElement("input");
    inputOculta.setAttribute("value", elemento.textContent);
    document.body.appendChild(inputOculta);
    inputOculta.select();
    document.execCommand("copy");
    document.body.removeChild(inputOculta);
}

// ...

//Boton Desencriptar
const buttonDesencriptar = document.querySelector(".desencriptar");

buttonDesencriptar.addEventListener("click", function () {
    //Eliminar visualización imagen/h2
    imagenLupa.style.display = "none";
    textoPrincipal.style.display = "none";

    //Abrir visualización
    buttonCopiar.style.display = "block";

    //Cambios en el estilo
    textoResultado.style.textAlign = "left";
    gap.style.gap = "0";

    // Obtén el valor del texto introducido por el usuario en el contenedor 1
    const textoIntroducido = introducirTexto.value;

    // //Cambiar las letras
    let textoFinal = textoIntroducido;

    if (textoIntroducido.includes("ai")) {
        textoFinal = textoFinal.replace(/ai/g, "a");
    }

    if (textoIntroducido.includes("enter")) {
        textoFinal = textoFinal.replace(/enter/g, "e");
    }

    if (textoIntroducido.includes("imes")) {
        textoFinal = textoFinal.replace(/imes/g, "i");
    }

    if (textoIntroducido.includes("ober")) {
        textoFinal = textoFinal.replace(/ober/g, "o");
    }

    if (textoIntroducido.includes("ufat")) {
        textoFinal = textoFinal.replace(/ufat/g, "u");
    }

    textoResultado.textContent = textoFinal;
});
