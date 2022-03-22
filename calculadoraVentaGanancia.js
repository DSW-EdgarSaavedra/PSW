let valorCompra, valorUtilidad, impuesto, ganancia;

function obtenerValores() {
  //se resetean los valores del validación
  document.getElementById("errorCompra").innerHTML = "";
  document.getElementById("errorUtilidad").innerHTML = "";
  document.getElementById("errorIVA").innerHTML = "";

  //traemos los datos del formulario
  valorCompra = parseFloat(document.getElementById("compra").value);
  valorUtilidad = parseFloat(document.getElementById("utilidad").value);
  impuesto = parseFloat(document.getElementById("IVA").value);
  // hacemos una validación inicial de la información, si el formulario es correcto
  // ejecutamos el cálculo de la venta y la ganancia
  if (valorCompra > 0 && valorUtilidad > 0 && impuesto >= 0) {
    //Calculamos el valor de la ganancia y mostramos el valor
    ganancia = valorCompra * (valorUtilidad / 100);
    document.getElementById("ganancia").value = ganancia;
    //Calculamos el valor de venta y mostramos el valor
    venta = ganancia + valorCompra + valorCompra * (impuesto / 100);
    document.getElementById("venta").value = venta;
  }
  //si la valudación inicial no es correcta, validar campo por campo
  else {
    if (isNaN(valorCompra) || valorCompra <= 0) {
      document.getElementById("errorCompra").innerHTML =
        "<i>El valor de compra puede estar vacio o ser menor a 0</i>";
    }
    if (isNaN(valorUtilidad) || valorUtilidad <= 0) {
      document.getElementById("errorUtilidad").innerHTML =
        "<i>El valor de utilidad puede estar vacio o ser menor a 0</i>";
    }
    if (isNaN(impuesto) || impuesto < 0) {
      document.getElementById("errorIVA").innerHTML =
        "<i>El valor de impuesto no puede estar vacio o ser menor a 0</i>";
    }
  }
}
