// Datos de las entradas del diario
const diaryEntries = [
  {
    id: "entrada-1",
    date: "2025-06-30",
    title: "Un nuevo comienzo",
    preview:
      "Hoy decidí crear este espacio especial para ti. Cada palabra que escriba aquí será un pedacito de mi corazón que quiero compartir contigo...",
    mood: "hopeful",
    slug: "un-nuevo-comienzo",
  },
  {
    id: "entrada-2",
    date: "2025-06-31",
    title: "Pensamientos de medianoche",
    preview:
      "Son las 12:12 AM y no puedo dormir. No porque esté preocupado o ansioso, sino porque mi mente está llena de ti....",
    mood: "romantic",
    slug: "pensamientos-de-medianoche",
  },
  {
    id: "entrada-3",
    date: "2025-07-1",
    title: "Feliz cumpleaños mi niña bella",
    preview:
      "Hace relatvamente poco estabamos hablando mi vida y me siento feliz de ser la primera persona que te felicitara en tu cumpleaños...",
    mood: "nostalgic",
    slug: "pequenos-momentos",
  },
  {
    id: "entrada-4",
    date: "2025-07-2",
    title: "Amar sin limites",
    preview:
      "Me siento agradecido con Dios primeramente de que este dia despertaras sana y pudiera ver tu carita hermosa literalmente al despertar con una llamada...",
    mood: "romantic",
    slug: "Amar-sin-limites",
  },
    {
    id: "entrada-5",
    date: "2025-07-3",
    title: "Tu cuerpo y tu dulzura",
    preview:
      "Tenme Paciencia, Estoy aprendiendo,cómo cuidarte...",
    mood: "romantic",
    slug: "tu-cuerpo-y-dulzura",
  },
  {
    id: "entrada-6",
    date: "2025-07-4",
    title: "Hoy mañana y siempre",
    preview:
      "Mi vida hermosa cada dia me siento mas contento de saber que el amor...",
    mood: "hopeful",
    slug: "hoy-mañana-y-siempre",
  },
  {
    id: "entrada-7",
    date: "2025-07-5",
    title: "Verte me llena de amor",
    preview:
      "Hola mi vida hermosa... Podemos tener nuestros altos y bajos corazón y es normal...",
    mood: "thoughtful",
    slug: "verte-llena-de-amor",
  },
  {
    id: "entrada-8",
    date: "2025-07-6",
    title: "Mini reflexion",
    preview:
      "Mi vida hermosa, se que queremos todo ya y hay muchas cosas que aun no hemos...",
    mood: "hopeful",
    slug: "mini-reflexion",
  },
  {
    id: "entrada-9",
    date: "2025-07-7",
    title: "Tú, yo y mini Kat",
    preview:
      "Mi vida antes me aterraba la idea de tener un mini de nosotros...",
    mood: "romantic",
    slug: "tu-yo-minikat",
  },
  {
    id: "entrada-10",
    date: "2025-07-8",
    title: "El mundo cruel y nosotros",
    preview:
      "Durante el tiempo que estuvimos separados mi amor, llore mucho y tenia tantas ganas...",
    mood: "romantic",
    slug: "el-mundo-cruel-y-nosotros",
  },

  {
    id: "entrada-11",
    date: "2025-07-9",
    title: "Nuestros dias malos",
    preview:
      "Mi vida hermosa, Te quiero lo suficiente como para estar en tus dias malos...",
    mood: "romantic",
    slug: "nuestros-dias-malos",
  },
]

// Iconos SVG
const icons = {
  calendar:
    '<path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>',
  heart:
    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
  sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
  star: '<polygon points="12,2 15,9 22,9 17,14 19,22 12,18 5,22 7,14 2,9 9,9"></polygon>',
  arrowRight: '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12,5 19,12 12,19"></polyline>',
}

// Función para formatear fechas
function formatDate(dateString) {
  const date = new Date(dateString)
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return date.toLocaleDateString("es-ES", options)
}

// Función para obtener el icono según el mood
function getMoodIcon(mood) {
  const moodIcons = {
    hopeful: icons.sun,
    romantic: icons.heart,
    nostalgic: icons.star,
    happy: icons.sun,
    thoughtful: icons.star,
  }
  return moodIcons[mood] || icons.star
}

// Función para crear una tarjeta de entrada
function createDiaryCard(entry, index) {
  const card = document.createElement("div")
  card.className = "diary-card"
  card.style.animationDelay = `${index * 150}ms`

  card.innerHTML = `
        <div class="card-header">
            <div class="card-date">
                <svg class="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${icons.calendar}
                </svg>
                <span>${formatDate(entry.date)}</span>
            </div>
            <svg class="mood-icon mood-${entry.mood}" viewBox="0 0 24 24" fill="currentColor">
                ${getMoodIcon(entry.mood)}
            </svg>
        </div>

        <h3 class="card-title">${entry.title}</h3>

        <p class="card-preview">${entry.preview}</p>

        <div class="card-footer">
            <div class="card-signature">
                <svg class="heart-small" viewBox="0 0 24 24" fill="currentColor">
                    ${icons.heart}
                </svg>
                <span class="signature-text">Para ti</span>
            </div>
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${icons.arrowRight}
            </svg>
        </div>
    `

  // Agregar evento de click con animación
  card.addEventListener("click", () => {
    card.classList.add("clicked")
    showPageTransition(() => {
      window.location.href = `entries/${entry.slug}.html`
    })
  })

  return card
}

// Función para mostrar la animación de transición
function showPageTransition(callback) {
  const overlay = document.getElementById("pageOverlay")
  overlay.classList.add("active")

  setTimeout(() => {
    if (callback) callback()
  }, 300)
}

// Función para cargar las entradas en la página principal
function loadDiaryEntries() {
  const grid = document.getElementById("entriesGrid")
  if (!grid) return

  diaryEntries.forEach((entry, index) => {
    const card = createDiaryCard(entry, index)
    grid.appendChild(card)
  })
}

// Inicializar la página cuando se carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  loadDiaryEntries()

  // Agregar efecto de parallax suave al scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallax = document.querySelector(".diary-header")
    if (parallax) {
      const speed = scrolled * 0.5
      parallax.style.transform = `translateY(${speed}px)`
    }
  })
})

// Función para páginas individuales
function initEntryPage() {
  // Animación de entrada para páginas individuales
  const overlay = document.querySelector(".page-transition-overlay")
  if (overlay) {
    setTimeout(() => {
      overlay.style.transform = "translateY(100%)"
    }, 100)
  }
}

// Exportar funciones para uso en páginas individuales
window.initEntryPage = initEntryPage
window.showPageTransition = showPageTransition
