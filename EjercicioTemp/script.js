function calcularTemp() {
    
    const temp1 = document.getElementById('temp').value;

    const temp2 = parseInt((temp1-32)*(5/9));
    
    alert("La temp calculada es " + temp2 + " °C")
}
   