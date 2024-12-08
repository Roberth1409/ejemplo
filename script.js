
import { nfkd } from 'normalize-text';
import { paisesUE } from './paisesUE';

function obtenerCodigoPais(nombrePais) {
    const nombreNormalizado = nfkd(nombrePais).toLowerCase();
    return paisesUE[nombreNormalizado];
}

const botonBuscar = document.getElementById('btnBuscar'); 
botonBuscar.addEventListener('click', buscarRequisitos);


function buscarRequisitos() {
    const origen = document.getElementById('origen').value;
    console.log(origen);
    const destino = document.getElementById('destino').value;

    // Obtener el código ISO Alpha-2 del país de origen
    const codigoOrigen = obtenerCodigoPais(origen);

    // Verificar si se encontró el código
    if (!codigoOrigen) {
        alert('País de origen no encontrado en la base de datos.');
        return;
    }

    // Obtener el código ISO Alpha-2 del país de destino
    const codigoDestino = obtenerCodigoPais(destino);

    // Verificar si se encontró el código
    if (!codigoDestino) {
        alert('País de origen no encontrado en la base de datos.');
        return;
    }

    // Construir la cadena con los códigos para la API

    const data = `passport=${codigoOrigen}&destination=${codigoDestino}`;
    console.log(data)
    // Crear la solicitud XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.status === 200) {
            const resultados = JSON.parse(this.responseText);
            console.log(resultados);
            if (resultados.requirements.length > 0) {
                resultadosDiv.innerHTML = `
                <h2>Requisitos de visa para viajar de ${origen} a ${destino}:</h2>
                <ul>
                  ${resultados.requirements.map(requisito => `<li>${requisito.tipo}: ${requisito.descripcion}</li>`).join('')}
                </ul>
              `;
            } else {
                resultadosDiv.innerHTML = "No se encontraron requisitos de visa.";
            }
            
            console.log(resultadosDiv); 
        } else {
            console.error('Error:', this.statusText);
            const resultadosDiv = document.getElementById('resultados');
            resultadosDiv.innerHTML = 'Ocurrió un error al obtener los requisitos de visa.';
        }
    });

xhr.open('POST', 'https://visa-requirement.p.rapidapi.com/');
xhr.setRequestHeader('x-rapidapi-key', '1409d00da2mshe42a0c552294395p135c55jsna2256c092484');
xhr.setRequestHeader('x-rapidapi-host', 'visa-requirement.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send(data);
  }



  
