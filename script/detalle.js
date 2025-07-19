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
          subtitulo: "¡PARA TODO MAL UN TAMAL Y PARA TODO BIEN TAMBIEN!",
          descripcion: "El pueblo pijao proviene del departamento del Tolima comprendiendo aproximadamente diferentes 11 municipios, donde la danza, medicina, arte propio y gastronomía son un pilar fundamental para nuestra identidad, alimentando nuestros saberes y sentido de pertenencia, así las circunstancias nos llevasen a cualquier parte del mundo. Siempre un pijao será reconocido.",
          imagen: "../img/20.jpg",
          instagram: "https://instagram.com/tamales.pijao",
          // facebook: "https://instagram.com/tamales.pijao"
        },
        {
          nombre: "FoGata",
          subtitulo: "DESCUBRE EL PODER CURATIVO DE LO NATURAL",
          descripcion: "Hechos por indigenas, nuestros aceites esenciales son el resultado de tradiciones ancestrales. Cada gota ayuda a sanar y revitalizar, conectándote con la naturaleza y la sabiduría de la tierra.",
          imagen: "../img/12.jpg",
          instagram: "https://instagram.com/fogata.col",
          facebook: "https://www.facebook.com/share/1AxtszGhzZ/"
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
          imagen: "../img/6.jpg",
          instagram: "https://instagram.com/kunui0121",
          // facebook: "https://instagram.com/tamales.pijao"
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
          descripcion: "Arte que nace del corazón de los pueblos:\n" +
            "• Accesorios con identidad\n" +
            "• Bisutería con alma ancestral\n" +
            "• Joyería en acero y materiales únicos\n" +
            "• Tejidos en chaquira y Miyuki\n" +
            "• Tejidos en hilo y lana (telar vertical y de cintura)\n" +
            "• Arreglos artesanales con sentido cultural",
          imagen: "../img/21.jpg",
          instagram: "https://instagram.com/tejidos_curi_urpigu",
          // facebook: "https://instagram.com/tamales.pijao"
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
          descripcion: "Desde la memoria de nuestros ancestros, el pueblo Eperara Siapidara ha tejido la vida con fibra natural. La paja tetera y el chocolatillo se entrelazan en nuestras manos para crear cestería que cuenta historias de resistencia.",
          imagen: "../img/1.jpg",
          instagram: "https://instagram.com/artemaes2025",
          // facebook: "https://instagram.com/tamales.pijao"
        },
        {
          nombre: "MITES",
          subtitulo: "TEJIDO ANCESTRAL EPERARA SIAPIDARA",
          descripcion: "Quince artesanas del pueblo Eperara Siapidara creamos Mites, un grupo artesanal en el que tejemos canastos con Paja Tetera y Chocolatillo: fibras naturales del pacífico colombiano. Cada uno de nuestros productos plasma historias de seres de la naturaleza, de los cuales hemos aprendido valores como la inteligencia, la protección de nuestra familia y la fuerza. En nuestros tejidos están plasmados conocimientos ancestrales de nuestro pueblo y nuevos elementos con los que vivimos en la ciudad. Los símbolos y sus colores reflejan nuestro territorio y nuestra historia.",
          imagen: "../img/2.jpg",
          instagram: "https://instagram.com/mites_artesania",
          // facebook: "https://instagram.com/tamales.pijao"
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
          descripcion: "De la noble hoja de fique, nacen nuestros jabones. El pueblo de Los Pastos revive la tradición de sus campesinos, quienes usaban esta planta para una limpieza poderosa y natural. Siente la historia en cada burbuja",
          imagen: "../img/8.jpg"
        },
        {
          nombre: "CREACIONES CON ENCANTO",
          subtitulo: "CREACIONES CON ENCANTO",
          descripcion: "Creaciones con encanto transforma materiales simples en detalles únicos que alegran tu día a día. Cada producto, cada artesanía están hechas a mano, cuidando cada color y forma para que lleves contigo un accesorio con identidad, creatividad y mucho encanto. Desde el pueblo de los Pastos.",
          imagen: "../img/22.png",
          instagram: "https://instagram.com/ayalacarmen25",
          // facebook: "https://instagram.com/tamales.pijao"
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
          descripcion: "Emprendimiento indígena que honra la tierra con bebidas ancestrales y medicina natural de coca.",
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
          descripcion: "Descubre el sabor inconfundible de nuestras Empanadas de Pipián, elaboradas con la sabiduría y el legado del Pueblo Yanacona. Cada empanada es un pedazo de nuestra historia, una receta ancestral que ha pasado de generación en generación, conservando la esencia de nuestros sabores y la riqueza de nuestra cultura.",
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
          descripcion: "En Yaja celebramos la herencia viva del pueblo Nasa a través de creaciones tejidas con alma, historia y resistencia.",
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
          descripcion: "Nos dedicamos a curar y armonizar el cuerpo, la mente y el espíritu, ofreciendo una medicina tradicional que se entrelaza con cada uno de nuestros tejidos. A través de nuestras creaciones, no solo buscamos visibilizar la sabiduría de nuestra medicina ancestral, sino también compartir y mostrar al mundo nuestra cosmovisión, plasmada con amor y tradición en cada hilo y diseño. ",
          imagen: "../img/13.jpg"
        },
        {
          nombre: "ARTESANIAS DEL PUEBLO MISAK",
          subtitulo: "ARTESANIAS CON ENFOQUE CULTURAL Y TRADICIONAL",
          descripcion: "Nuestras manos Misak tejen con el propósito de mantener viva la memoria, de expresar nuestra identidad cultural y de compartir un legado de resistencia y profunda conexión espiritual. Al adquirir una de nuestras piezas, llevas contigo un fragmento auténtico de nuestra cultura, un eco de nuestra historia y la fuerza de un pueblo que se expresa a través de su arte.",
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
        <p>${emp.descripcion.replace(/\n/g, "<br>")}</p>
          <div class="social-links">
            ${emp.instagram ? `<a href="${emp.instagram}" target="_blank">Instagram</a>` : ''}
            ${emp.facebook ? `<a href="${emp.facebook}" target="_blank">Facebook</a>` : ''}
      </div>
      </div>
    </article>
  `).join('');
});
