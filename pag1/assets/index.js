
const imagen = document.querySelector(".imagen");
let tieneBorde = false;

imagen.onclick= function(){
    if (tieneBorde){
        imagen.style.border = "none";
        tieneBorde = false;
    }
    else{
        imagen.style.border = "20px solid pink";
        tieneBorde = true;
    }
}

