const contenedorcajatexto = document.querySelector("#cajatexto");
const textoresultado = document.querySelector("#resultado");
const frame5 = document.querySelector("#frame5");
const frame6 = document.querySelector("#frame6");

const matriz_code = [
    ["e", "enter"], // indice 0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "over"], // indice 3
    ["u", "ufat"], // indice 4
];

function btnEncriptar() {
    const texto = encriptar(contenedorcajatexto.value);
    textoresultado.textContent = texto;
    ocultarImagenes();
}

function btnDesencriptar() {
    const texto = desencriptar(contenedorcajatexto.value);
    textoresultado.textContent = texto;
    ocultarImagenes();
}

function copiarTexto() {
    const resultado = textoresultado.textContent;
    navigator.clipboard.writeText(resultado)
        .then(() => {
            alert("Texto copiado");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1],
            );
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseDesencriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0],
            );
        }
    }
    return fraseDesencriptada;
}

function ocultarImagenes() {
    frame5.style.display = 'none';
    frame6.style.display = 'none';
}
