//esta funcion es para llamar las otras vistas dentro del body el index
function loadContent(url) {
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById('contenido').innerHTML = html;
    })
    .catch(error => console.error('Error cargando el contenido:', error));
}

document.addEventListener("DOMContentLoad", function() {
    let fechaActual = new Date();
    let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    let dia = fechaActual.getDate().toString().padStart(2, '0');
    let fechaFormateada = fechaActual.getFullYear() + '-' + mes + '-' + dia;
    document.getElementById('fecha').value = fechaFormateada;
});

// esta funcion permite solo numeros
function validarNumerico(event) {
    let charCode = event.which ? event.which : event.keyCode;
    // Permite solo dígitos numéricos y teclas especiales de control
    if (charCode < 48 || charCode > 57) {
      // Deshabilita la entrada de caracteres no numéricos
      event.preventDefault();
      return false;
    }
    return true;
}

// Para poder cargar las firmas desde
function cargarFirma(select) {
    const imagenes = document.querySelectorAll('.firmaImagen');
    const opcionSeleccionada = select.options[select.selectedIndex].value;
    
    for (let i = 0; i < imagenes.length; i++) {
        if (imagenes[i].src.endsWith(opcionSeleccionada)) {
            imagenes[i].style.display = 'inline-block';
        } else {
            imagenes[i].style.display = 'none';
        }
    }
}

function cargarFirma1(select) {
    const imagenes = document.querySelectorAll('.firmaImagen1');
    const opcionSeleccionada = select.options[select.selectedIndex].value;
    
    for (let i = 0; i < imagenes.length; i++) {
        if (imagenes[i].src.endsWith(opcionSeleccionada)) {
            imagenes[i].style.display = 'inline-block';
        } else {
            imagenes[i].style.display = 'none';
        }
    }
}

function cargarFirma2(select) {
    const imagenes = document.querySelectorAll('.firmaImagen2');
    const opcionSeleccionada = select.options[select.selectedIndex].value;
    
    for (let i = 0; i < imagenes.length; i++) {
        if (imagenes[i].src.endsWith(opcionSeleccionada)) {
            imagenes[i].style.display = 'inline-block';
        } else {
            imagenes[i].style.display = 'none';
        }
    }
}

function cargarFirma3(select) {
    const imagenes = document.querySelectorAll('.firmaImagen3');
    const opcionSeleccionada = select.options[select.selectedIndex].value;
    
    for (let i = 0; i < imagenes.length; i++) {
        if (imagenes[i].src.endsWith(opcionSeleccionada)) {
            imagenes[i].style.display = 'inline-block';
        } else {
            imagenes[i].style.display = 'none';
        }
    }
}

function cargarFirma4(select) {
    const imagenes = document.querySelectorAll('.firmaImagen4');
    const opcionSeleccionada = select.options[select.selectedIndex].value;
    
    for (let i = 0; i < imagenes.length; i++) {
        if (imagenes[i].src.endsWith(opcionSeleccionada)) {
            imagenes[i].style.display = 'inline-block';
        } else {
            imagenes[i].style.display = 'none';
        }
    }
}

function cargarFirma5(select) {
    const imagenes = document.querySelectorAll('.firmaImagen5');
    const opcionSeleccionada = select.options[select.selectedIndex].value;
    
    for (let i = 0; i < imagenes.length; i++) {
        if (imagenes[i].src.endsWith(opcionSeleccionada)) {
            imagenes[i].style.display = 'inline-block';
        } else {
            imagenes[i].style.display = 'none';
        }
    }
}

// Funcion para poder imprimir
function imprimir() {
    // Ocultar el encabezado
    document.getElementById('mainHeader').style.display = 'none';
    // Ocultar el boton
    document.getElementById('guardar').style.display = 'none';
    // Llamar a la función window.print() para imprimir la página actual
    window.print();
    // Mostrar nuevamente el encabezado después de imprimir
    document.getElementById('mainHeader').style.display = 'block';
    // Mostrar nuevamente el boton después de imprimir
    document.getElementById('guardar').style.display = 'block';
}
