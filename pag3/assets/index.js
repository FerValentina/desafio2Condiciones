
const cuadro1 = document.querySelector("#cuadro1");
const cuadro2 = document.querySelector("#cuadro2");
const cuadro3 = document.querySelector("#cuadro3");
const boton = document.querySelector("#ingresar");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", () => {
  
  const valor1 = cuadro1.value;
  const valor2 = cuadro2.value;
  const valor3 = cuadro3.value;

  
  const password = valor1 + valor2 + valor3;


  if (password === "911") {
      alert('Password 1 Correcto')
      resultado.innerHTML = "Password 1 Correcto";
      resultado.style.color = "green"; // O
      resultado.style.backgroundColor= "pink";
      resultado.style.margin= "100px";
      resultado.style.padding= "20px";
      resultado.style.fontSize= "x-large";
      resultado.style.textAlign= "center";
            
  } else if (password === "714") {
    alert('Password 2 Correcto')
      resultado.innerHTML = "Password 2 Correcto";
      resultado.style.color = "green";
      resultado.style.backgroundColor= "pink";
      resultado.style.margin= "100px";
      resultado.style.padding= "20px";
      resultado.style.fontSize= "x-large";
      resultado.style.textAlign= "center";
  } else {
    alert('Password Incorrecto')
      resultado.innerHTML = "Password Incorrecto";
      resultado.style.color = "red"; 
      resultado.style.backgroundColor= "pink";
      resultado.style.margin= "100px";
      resultado.style.padding= "20px";
      resultado.style.fontSize= "x-large";
      resultado.style.textAlign= "center";// Opcional: texto rojo para el error
  }
});

