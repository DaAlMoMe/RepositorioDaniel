
window.onload = function() {
    var info = document.getElementById("informacion");
  
    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
        console.log("Número de enlaces = "+enlaces.length)

    
    // Direccion del penultimo enlace
    var mensaje = "El penúltimo enlace es: "+enlaces[enlaces.length-2].href;
        console.log(mensaje)
  
  
    // Numero de enlaces del tercer p�rrafo
    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");
    console.log("Número de enlaces del tercer párrafo = "+enlaces.length)
 
    const parrafo = document.createElement("p");
    const contenido =document.createTextNode("Nuevo contenido");
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
    parrafo.style.color = '#AED6F1';
    
    




}



  

  
 