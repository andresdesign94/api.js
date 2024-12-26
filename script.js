// Función para obtener los datos de la API y crear las cards
function obtenerDatos() {
    // Utiliza la función fetch para obtener los datos de la API
    fetch('https://appweb-tamriel-default-rtdb.firebaseio.com/cursos.json')
      .then(response => response.json())
      .then(data => {
        // Obtener el elemento contenedor para las cards
        const cardDeck = document.getElementById('card-deck');
        cardDeck.innerHTML = ''; // Limpia el contenedor de cards
  
        // Iterar sobre los datos y crear una card para cada objeto
        for (let key in data) {
          const objeto = data[key];
  
          // Crear los elementos HTML para la card
          const card = document.createElement('div');
          card.classList.add('card');
  
          const imagen = document.createElement('img');
          imagen.classList.add('card-img-top');
          imagen.src = objeto.imagen;
  
          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
  
          const titulo = document.createElement('h5');
          titulo.classList.add('card-title');
          titulo.textContent = objeto.nombrecurso;
  
          const duracion = document.createElement('p');
          duracion.classList.add('card-text');
          duracion.textContent = 'Duración: ' + objeto.duracion + ' horas';
  
          const valor = document.createElement('p');
          valor.classList.add('card-text');
          valor.textContent = 'Valor: $' + objeto.valor;
  
          // Agregar los elementos a la card
          cardBody.appendChild(titulo);
          cardBody.appendChild(duracion);
          cardBody.appendChild(valor);
  
          card.appendChild(imagen);
          card.appendChild(cardBody);
  
          // Agregar la card al contenedor
          cardDeck.appendChild(card);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }
  
  // Llamar a la función para obtener los datos al cargar la página
  window.onload = obtenerDatos;
  
  // Ejecutar la función obtenerDatos cada 5 segundos utilizando setInterval
  setInterval(obtenerDatos, 5000);
  