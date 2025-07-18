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
          subtitulo: "¡PARA TODO MAL UN TAMAL Y PARA TODO BIEN TAMBIEN¡",
          descripcion: "El pueblo pijao proviene del departamento del Tolima comprendiendo aproximadamente diferentes 11 municipios, donde la danza, medicina, arte propio y gastronomía son un pilar fundamental para nuestra identidad, alimentando nuestros saberes y sentido de pertenencia, así las circunstancias nos llevasen a cualquier parte del mundo. Siempre un pijao será reconocido.",
          imagen: "../img/20.jpg"
        },
        {
          nombre: "FoGata",
          subtitulo: "DESCUBRE EL PODER CURATIVO DE LO NATURAL",
          descripcion: "Hechos por indigenas, nuestros aceites esenciales son el resultado de tradiciones ancestrales. Cada gota ayuda a sanar y revitalizar, conectándote con la naturaleza y la sabiduría de la tierra.",
          imagen: "../img/12.jpg"
        },
        {
          nombre: "ARTEMIA",
          subtitulo: "SEMILLAS QUE ENAMORAN AMBIKA PIJAO",
          descripcion: "Con amor transformamos semillas en hermosas piezas de bisuteria, como aretes, pulseras y collares llenas de vida llevando contigo un pedacito de nuestra tierra y cultura pijao.",
          imagen: "../img/3.jpg"
        },
        {
          nombre: "LOS SABORES DE LA ABUELA",
          subtitulo: "SABOR QUE NACE DE LA TIERRA, TRADICIÓN QUE SE COMPARTE",
          descripcion: "Con los fogones de antaño y las historias que se contaban al calor del campo, mas que unos sabores es un homenaje al tolima, a su gente y a su sabor unico que perdura en el tiempo. Cada bocado es una fiesta de identidad, cultura y cariño.",
          imagen: "../img/10.jpg"
        }
      ]
    },
    {
      name: "uitoto",
      title: "Uitoto",
      emprendimientos: [
        {
          nombre: "DE LA HOJA A TU MESA",
          subtitulo: "CONSERVACIÓN DE ESPIRITUALIDAD PARA MEJORAR EL ENTORNO ESPIRITUAL",
          descripcion: "Mambe es producto de la pulverización de la hoja de coca, combinado con cenizas de Yarumo o de piedra caliza. Ancestralmente se ha creído que el mambe tiene propiedades curativas, energizantes y que mejoran la concentración, por ello muchos indígenas consumen este alimento sagrado, pues ayuda a la mente y al cuerpo.",
          imagen: "../img/14.5.jpg"
        },
        {
          nombre: "ALIMENTOS DE LA CHAGRA",
          subtitulo: "!CON EL SABOR DE LA SELVA¡",
          descripcion: "Embárcate en un viaje de sabores únicos con los Alimentos Artesanales del Pueblo Uitoto. Desde el corazón de la Amazonía, nuestros ancestros han cultivado y transformado los frutos de la selva en delicias que nutren el cuerpo y el espíritu.",
          imagen: "../img/4.jpg"
        },
        {
          nombre: "DERIVADOS DE LA YUCA",
          subtitulo: "SABOR UITOTO: RAICES AMAZONICAS EN CADA BOCADO",
          descripcion: "Desde el corazón del territorio Uitoto, este emprendimiento rescata los saberes tradicionales alrededor de la yuca. Ofrece productos como casabe, fariña, arepa, tamal, ají negro, además de comidas típicas y jugos naturales de la región amazónica. Cada preparación es una muestra viva de la cultura, el sabor y la resistencia ancestral del pueblo Uitoto. ¡Conéctate con nuestras raíces a través del alimento!",
          imagen: "../img/19.jpg"
        }
      ]
    },
    {
      name: "inga",
      title: "Inga",
      emprendimientos: [
        {
          nombre: "KUNUI",
          subtitulo: "CHAQUIRAS QUE PRESERVAN TRADICIÓN Y CULTURA",
          descripcion: "Rescatamos, preservamos y compartimos el arte ancestral del tejido en chaquira del pueblo Inga.",
          imagen: "../img/6.jpg"
        },
        {
          nombre: "MANOS QUE TEJEN SABERES",
          subtitulo: "MANOS CREADORAS, MUJERES TEJEDORAS",
          descripcion: "Cada pieza que creamos lleva el pensamiento de nuestros abuelos los simbolos sagrados de la naturaleza, los colores de nuestro Taita Kuichi y la historia de nuestro pueblo. Teljes es sanar, compartir y resistir.Productos elaborados a mano con paciencia, respeto y conexión espiritual.",
          imagen: "../img/17.jpg"
        },
        {
          nombre: "TEJIDOS UAIRA KILLA",
          subtitulo: "HISTORIA Y TRADICIÓN DE NUESTRAS RAÍCES INGA A TU ESTILO",
          descripcion: "Accesorios en mostacilla, miyuki, semillas nativas y telar vertical, elaborados por mujeres del Pueblo Indigena Inga . Cada pieza que creamos lleva el pensamiento de nuestros abuelos los simbolos sagrados de la naturaleza y la historia de nuestro pueblo.",
          imagen: "../img/16.jpg"
        },
        {
          nombre: "CURI URPIGU",
          subtitulo: "DISEÑO ANCESTRAL QUE CAMINA CONTIGO",
          descripcion: `Arte que nace del corazón de los pueblos:
            ♦️ Accesorios con identidad 
            ♦️ Bisutería con alma ancestral  
            ♦️ Joyería en acero y materiales únicos  
            ♦️ Tejidos en chaquira y Miyuki  
            ♦️ Tejidos en hilo y lana (telar vertical y de cintura)  
            ♦️ Arreglos artesanales con sentido cultural`,
          imagen: "../img/21.jpg"
        }
      ]
    },
    {
      name: "eperara",
      title: "Eperara Siapidara",
      emprendimientos: [
        {
          nombre: "ARTEMAES",
          subtitulo: "CESTERIA DE FIBRA NATURAL PAJA TETERA Y CHOCOLATILLO",
          descripcion: "CESTERIA DE FIBRA NATURAL PAJA TETERA Y CHOCOLATILLO",
          imagen: "../img/1.jpg"
        },
        {
          nombre: "MITES",
          subtitulo: "TEJIDO ANCESTRAL EPERARA SIAPIDARA",
          descripcion: "TEJIDO ANCESTRAL EPERARA SIAPIDARA",
          imagen: "../img/2.jpg"
        }
      ]
    },
    {
      name: "pastos",
      title: "Los Pastos",
      emprendimientos: [
        {
          nombre: "LAVAFELIX",
          subtitulo: "JABÓN DE FIQUE ARTESANAL",
          descripcion: "JABÓN DE FIQUE ARTESANAL",
          imagen: "../img/8.jpg"
        },
        {
          nombre: "CREACIONES CON ENCANTO",
          subtitulo: "CREACIONES CON ENCANTO",
          descripcion: "¡ARTICULOS ELABORADOS CON AMOR Y MAGIA!",
          imagen: "../img/22.png"
        }
      ]
    },
    {
      name: "tubu",
      title: "Tubu",
      emprendimientos: [
        {
          nombre: "COCA PURE",
          subtitulo: "LA FUERZA DE LA COCA Y LA BEBIDA ANCESTRAL",
          descripcion: "LA FUERZA DE LA COCA Y LA BEBIDA ANCESTRAL",
          imagen: "../img/23.jpeg"
        }
      ]
    },
    {
      name: "yanacona",
      title: "Yanacona",
      emprendimientos: [
        {
          nombre: "EMPANADAS DE PIPIAN",
          subtitulo: "EL LEGADO DEL PUEBLO YANAKUNA EN TU MESA",
          descripcion: "EL LEGADO DEL PUEBLO YANAKUNA EN TU MESA",
          imagen: "../img/11.png"
        }
      ]
    },
    {
      name: "nasa",
      title: "Nasa",
      emprendimientos: [
        {
          nombre: "YAJA ARTESANIAS",
          subtitulo: "HISTORIA Y TRADICIÓN DE NUESTRAS MUJERES NASA",
          descripcion: "HISTORIA Y TRADICIÓN DE NUESTRAS MUJERES NASA",
          imagen: "../img/15.jpg"
        }
      ]
    },
    {
      name: "misak",
      title: "Misak",
      emprendimientos: [
        {
          nombre: "ARTESANIAS Y MEDICINA ANCESTRAL JM MISAK",
          subtitulo: "SANANDO DESDE LA CULTURA Y SABERES ANCESTRALES",
          descripcion: "SANANDO DESDE LA CULTURA Y SABERES ANCESTRALES",
          imagen: "../img/13.jpg"
        },
        {
          nombre: "ARTESANIAS DEL PUEBLO MISAK",
          subtitulo: "ARTESANIAS CON ENFOQUE CULTURAL Y TRADICIONAL",
          descripcion: "ARTESANIAS CON ENFOQUE CULTURAL Y TRADICIONAL",
          imagen: "../img/18.jpg"
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
        <h5>${emp.subtitulo}</h5><br>
        <p>${emp.descripcion}</p>
      </div>
    </article>
  `).join('');
});
