const paisesUE = {
    "alemania": "DE",
    "austria": "AT",
    "belgica": "BE",
    "bulgaria": "BG",
    "chipre": "CY",
    "croacia": "HR",
    "dinamarca": "DK",
    "eslovaquia": "SK",
    "eslovenia": "SI",
    "españa": "ES",
    "estonia": "EE",
    "finlandia": "FI",
    "francia": "FR",
    "grecia": "GR",
    "hungria": "HU",
    "irlanda": "IE",
    "italia": "IT",
    "letonia": "LV",
    "lituania": "LT",
    "luxemburgo": "LU",
    "malta": "MT",
    "paises bajos": "NL",
    "polonia": "PL",
    "portugal": "PT",
    "republica checa": "CZ",
    "rumania": "RO",
    "suecia": "SE"
};


const ciudadesPorPais = {
    "España": ["Madrid", "Barcelona", "Valencia"],
    "Francia": ["París", "Marsella", "Lyon"],
    "Alemania": ["Berlín", "Hamburgo", "Múnich"],
    "Austria": ["Viena", "Salzburgo", "Graz"],
    "Bélgica": ["Bruselas", "Amberes", "Gante"],
    "Bulgaria": ["Sofía", "Plovdiv", "Varna"],
    "Chipre": ["Nicosia", "Limassol", "Larnaca"],
    "Croacia": ["Zagreb", "Dubrovnik", "Split"],
    "Dinamarca": ["Copenhague", "Aarhus", "Odense"],
    "Eslovaquia": ["Bratislava", "Košice", "Prešov"],
    "Eslovenia": ["Liubliana", "Maribor", "Celje"],
    "Estonia": ["Tallin", "Tartu", "Parnu"],
    "Finlandia": ["Helsinki", "Tampere", "Turku"],
    "Grecia": ["Atenas", "Salónica", "Patras"],
    "Hungría": ["Budapest", "Debrecen", "Szeged"],
    "Irlanda": ["Dublín", "Cork", "Galway"],
    "Italia": ["Roma", "Milán", "Venecia"],
    "Letonia": ["Riga", "Daugavpils", "Liepāja"],
    "Lituania": ["Vilna", "Kaunas", "Klaipėda"],
    "Luxemburgo": ["Luxemburgo"],
    "Malta": ["La Valeta"],
    "Países Bajos": ["Ámsterdam", "Rotterdam", "La Haya"],
    "Polonia": ["Varsovia", "Cracovia", "Gdansk"],
    "Portugal": ["Lisboa", "Oporto", "Faro"],
    "República Checa": ["Praga", "Brno", "Pilsen"],
    "Rumania": ["Bucarest", "Iași", "Cluj-Napoca"],
    "Suecia": ["Estocolmo", "Gotemburgo", "Malmö"]
};


const diccionarioCiudades = {
    "Madrid": "Madrid",
    "Barcelona": "Barcelona",
    "Valencia": "Valencia",
    "París": "Paris",
    "Marsella": "Marseille",
    "Lyon": "Lyon",
    "Berlín": "Berlin",
    "Hamburgo": "Hamburg",
    "Múnich": "Munich",
    "Viena": "Vienna",
    "Salzburgo": "Salzburg",
    "Graz": "Graz",
    "Bruselas": "Brussels",
    "Amberes": "Antwerp",
    "Gante": "Ghent",
    "Sofía": "Sofia",
    "Plovdiv": "Plovdiv",
    "Varna": "Varna",
    "Nicosia": "Nicosia",
    "Limassol": "Limassol",
    "Larnaca": "Larnaca",
    "Zagreb": "Zagreb",
    "Dubrovnik": "Dubrovnik",
    "Split": "Split",
    "Copenhague": "Copenhagen",
    "Aarhus": "Aarhus",
    "Odense": "Odense",
    "Bratislava": "Bratislava",
    "Košice": "Kosice",
    "Prešov": "Presov",
    "Liubliana": "Ljubljana",
    "Maribor": "Maribor",
    "Celje": "Celje",
    "Tallin": "Tallinn",
    "Tartu": "Tartu",
    "Parnu": "Parnu",
    "Helsinki": "Helsinki",
    "Tampere": "Tampere",
    "Turku": "Turku",
    "Atenas": "Athens",
    "Salónica": "Thessaloniki",
    "Patras": "Patras",
    "Budapest": "Budapest",
    "Debrecen": "Debrecen",
    "Szeged": "Szeged",
    "Dublín": "Dublin",
    "Cork": "Cork",
    "Galway": "Galway",
    "Roma": "Rome",
    "Milán": "Milan",
    "Venecia": "Venice",
    "Riga": "Riga",
    "Daugavpils": "Daugavpils",
    "Liepāja": "Liepaja",
    "Vilna": "Vilnius",
    "Kaunas": "Kaunas",
    "Klaipėda": "Klaipeda",
    "Luxemburgo": "Luxembourg",
    "La Valeta": "Valletta",
    "Ámsterdam": "Amsterdam",
    "Rotterdam": "Rotterdam",
    "La Haya": "The Hague",
    "Varsovia": "Warsaw",
    "Cracovia": "Krakow",
    "Gdansk": "Gdansk",
    "Lisboa": "Lisbon",
    "Oporto": "Porto",
    "Faro": "Faro",
    "Praga": "Prague",
    "Brno": "Brno",
    "Pilsen": "Pilsen",
    "Bucarest": "Bucharest",
    "Iași": "Iasi",
    "Cluj-Napoca": "Cluj-Napoca",
    "Estocolmo": "Stockholm",
    "Gotemburgo": "Gothenburg",
    "Malmö": "Malmo"
};




const archivoJSON = {};


async function buscarRequisitos() {
    const origen = document.getElementById('origen').value;
    console.log(origen);
    const destino = document.getElementById('destino').value;
    console.log(destino);
    function obtenerCodigoPais(nombrePais) {
        const nombreNormalizado = nombrePais.toLowerCase();
        //console.log(nombreNormalizado)
        return paisesUE[nombreNormalizado];
    }

    // Obtener el código ISO Alpha-2 del país de origen
    const codigoOrigen = obtenerCodigoPais(origen);
    //console.log(codigoOrigen)
    // Verificar si se encontró el código
    if (!codigoOrigen) {
        alert('País de origen no encontrado en la base de datos.');
        return;
    }

    // Obtener el código ISO Alpha-2 del país de destino
    const codigoDestino = obtenerCodigoPais(destino);
    //console.log(codigoDestino)
    // Verificar si se encontró el código
    if (!codigoDestino) {
        alert('País de destino no encontrado en la base de datos.');
        return;
    }

    // Construir la cadena con los códigos para la API

    //visa requirement

    const url = 'https://visa-requirement.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '1409d00da2mshe42a0c552294395p135c55jsna2256c092484',
            'x-rapidapi-host': 'visa-requirement.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            passport: codigoOrigen,
            destination: codigoDestino
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        //console.log(result);
        const monedaElement = document.getElementById('moneda');
        monedaElement.textContent = result.currency;
        const stayElement = document.getElementById('stay_of');
        stayElement.textContent = result.stay_of;
        const passValidElement = document.getElementById('pass_valid');
        passValidElement.textContent = result.pass_valid;
        const visaElement = document.getElementById('visa');
        visaElement.textContent = result.visa;

    } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error al usuario
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.textContent = 'Ocurrió un error al obtener los datos. Por favor, intenta más tarde.';
    }


    //trip advisor

    const ciudades = ciudadesPorPais[destino];
    const selectCiudad = document.getElementById('ciudad');
    console.log('selectciudad: ', selectCiudad);
    ciudades.forEach(ciudad => {
        const option = document.createElement('option');
        option.value = ciudad;
        option.textContent = ciudad;
        selectCiudad.appendChild(option);
    });




    /*const resultadosBusquedaDiv = document.getElementById('resultadosBusqueda');
    resultadosBusquedaDiv.style.display = 'block';*/


    //resolver pequeño bug
    selectCiudad.addEventListener('change', () => {
        const ciudadSeleccionada = selectCiudad.value;
        console.log('En español: ', ciudadSeleccionada);
        //consultar diccionario
        const ciudadEnIngles = diccionarioCiudades[ciudadSeleccionada];
        console.log('En Ingles: ', ciudadEnIngles);
        buscarActividades(ciudadEnIngles);
    });

}

let categoriaSeleccionada = 'all';


async function buscarActividades(ciudad) {




    const url2 = `https://real-time-tripadvisor-scraper-api.p.rapidapi.com/tripadvisor_tours_search_v2?location=${ciudad}`;
    console.log(url2);
    // ... resto de la lógica de la solicitud a la API

    // Realizar la solicitud a la API y mostrar los resultados
    // ...
    const options2 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c239f0c280msh305d890f9031fe7p1f3d2cjsnb6ce3823636d',
            'x-rapidapi-host': 'real-time-tripadvisor-scraper-api.p.rapidapi.com'
        }
    };

    try {
        const response2 = await fetch(url2, options2);
        const result2 = await response2.json();
        //parametrizacion de variables y datos del JSON:
        result2.data.sort((a, b) => a.title.localeCompare(b.title));

        console.log(result2);
        //result2.data
        if (result2.data && Array.isArray(result2.data)) {
            console.log('es array');
            const categorias = [...new Set(result2.data.map(actividad => actividad.category))];
            const select = document.getElementById('filtroCategoria');

            categorias.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria;
                option.textContent = categoria;
                select.appendChild(option);
            });

            // Obtener la sección donde se mostrarán las recomendaciones
            const recomendacionesDiv = document.getElementById('recomendaciones'); // Asegúrate de tener un elemento con este id en tu HTML

            // Crear una lista no ordenada
            const listaRecomendaciones = document.createElement('ul');

            // Iterar sobre los resultados y crear elementos de lista
            result2.data.forEach(actividad => {
                const li = document.createElement('li');
                //li.classList.add('recomendacion'); // Asigna la clase para aplicar los estilos CSS
                li.innerHTML = `


    <div class="w3-third w3-margin-bottom">
        <img src="${actividad.image}" alt="${actividad.description}" style="width:100%">
        <div class="w3-container w3-white">
          <h3>${actividad.title}</h3>
          <h6 class="w3-opacity">${actividad.description}</h6>
          <p>${actividad.category}</p>
          <p>${actividad.duration}</p>
          <button href="${actividad.url}" target="${actividad.url}" class="w3-button w3-block w3-black w3-margin-bottom">Más Información</button>
        </div>
    </div>
`;
                if (categoriaSeleccionada === 'all' || actividad.category === categoriaSeleccionada) {
                    listaRecomendaciones.appendChild(li);
                }
            });

            // Agregar la lista a la sección de recomendaciones
            recomendacionesDiv.appendChild(listaRecomendaciones);





        } else {
            console.error("La API no devolvió datos válidos:", result2);
            // Mostrar un mensaje de error al usuario
            const recomendacionesDiv = document.getElementById('recomendaciones');
            recomendacionesDiv.textContent = "No se encontraron actividades para esta ciudad.";
        }






    } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error al usuario
        const recomendacionesDiv = document.getElementById('recomendaciones');
        recomendacionesDiv.textContent = "Ocurrió un error al buscar actividades. Por favor, intenta más tarde.";




    }




}






