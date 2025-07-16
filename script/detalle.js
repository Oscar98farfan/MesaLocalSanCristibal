document.addEventListener("DOMContentLoaded", function () {
  // 1. Obtiene el pueblo de la URL
  const params = new URLSearchParams(window.location.search);
  const puebloParam = params.get('pueblo')?.toLowerCase();

  // 2. Base de datos de pueblos con emprendimientos
  const pueblosData = [
    {
      name: "pijao",
      title: "Pijao",
      emprendimientos: [
        {
          nombre: "Tamales Pijao",
          descripcion: "¡PARA TODO MAL UN TAMAL Y PARA TODO BIEN TAMBIEN¡",
          imagen: "../img/20.jpg"
        },
        {
          nombre: "FoGata",
          descripcion: "DESCUBRE EL PODER CURATIVO DE LO NATURAL",
          imagen: "../img/12.jpg"
        },
        {
          nombre: "ARTEMIA",
          descripcion: "SEMILLAS QUE ENAMORAN AMBIKA PIJAO",
          imagen: "../img/3.jpg"
        },
        {
          nombre: "LOS SABORES DE LA ABUELA",
          descripcion: "SABOR QUE NACE DE LA TIERRA, TRADICIÓN QUE SE COMPARTE",
          imagen: "../img/10.jpg"
        }
      ]
    },
    {
      name: "uitoto",
      title: "Uitoto",
      emprendimientos: [
        {
          nombre: "Saberes de la Selva",
          descripcion: "Talleres y productos derivados de plantas medicinales.",
          imagen: "../img/emprendimiento3.jpg"
        }
      ]
    },
    {
      name: "yanacona",
      title: "Yanacona",
      emprendimientos: [
        {
          nombre: "Tejidos del Sol",
          descripcion: "Artesanía tradicional andina hecha con fibras naturales.",
          imagen: "../img/emprendimiento4.jpg"
        },
        {
          nombre: "Ritual Café",
          descripcion: "Café especial cultivado con prácticas ancestrales.",
          imagen: "../img/emprendimiento5.jpg"
        }
      ]
    }
  ];

  // 3. Busca el pueblo solicitado
  const pueblo = pueblosData.find(p => p.name === puebloParam);

  // 4. Referencias de elementos
  const titulo = document.getElementById("pueblo-title");
  const contenedor = document.getElementById("emprendimientos-container");

  if (!pueblo) {
    titulo.textContent = "Pueblo no encontrado";
    contenedor.innerHTML = `<p style="font-size: 1.1rem;">No hay información para este pueblo.</p>`;
    return;
  }

  // 5. Renderiza título y emprendimientos
  titulo.textContent = pueblo.title;

  contenedor.innerHTML = pueblo.emprendimientos.map(emp => `
    <article class="card">
      <img src="${emp.imagen}" alt="${emp.nombre}">
      <div class="card-content">
        <h2>${emp.nombre}</h2>
        <p>${emp.descripcion}</p>
      </div>
    </article>
  `).join('');
});
