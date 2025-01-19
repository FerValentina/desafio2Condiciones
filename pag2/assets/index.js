
const inputSticker1 = document.querySelector("#sticker1");
const inputSticker2 = document.querySelector("#sticker2");
const inputSticker3 = document.querySelector("#sticker3");
const inputSticker4 = document.querySelector("#sticker4");
const botonVerificar = document.querySelector("#verificar");
const resultado = document.querySelector("#resultado");

botonVerificar.onclick = function(){
    const cantidad1 = Number(inputSticker1.value) || 0;
    const cantidad2 = Number(inputSticker2.value) || 0;
    const cantidad3 = Number(inputSticker3.value) || 0;
    const cantidad4 = Number(inputSticker4.value) || 0;
    
    const totalStickers = cantidad1 + cantidad2 + cantidad3;

    if (totalStickers <= 10) {
        resultado.textContent = `Llevas ${totalStickers} stickers`;
        resultado.style.color = "green";
      } else {
        resultado.textContent = "Llevas demasiados stickers, el límite es 10";
        resultado.style.color = "red";
      }
    
}


