const ramos = {
  // --- PRIMER AÑO ---
  "Razonamiento lógico matemático": [],
  "Química": [],
  "Biología Celular": [],
  "Bases disciplinares para el cuidado de enfermería": [],
  "Taller de competencias comunicativas": [],
  "Taller de competencias para el aprendizaje": [],
  "Taller de desarrollo personal 1": [],

  "Crecimiento y desarrollo": [],
  "Bioquímica": ["Química", "Biología Celular"],
  "Fundamentos anatómicos para el cuidado": [],
  "Bases de Enfermería en APS": ["Bases disciplinares para el cuidado de enfermería"],
  "Taller de primeros auxilios": [],
  "Taller de desarrollo personal 2": [],
  "Cultura y valores": [],

  // --- SEGUNDO AÑO ---
  "Estadísticas para ciencias de la salud": [],
  "Fisiología": ["Fundamentos anatómicos para el cuidado"],
  "Microbiología y parasitología clínica": ["Biología Celular"],
  "Farmacología": ["Bioquímica"],
  "Fundamentos del proceso de enfermería": ["Bases disciplinares para el cuidado de enfermería", "Fundamentos anatómicos para el cuidado"],
  "Persona y sentido": [],

  "Fundamentos en salud pública": ["Estadísticas para ciencias de la salud"],
  "Bases fisiopatológicas para el cuidado": ["Fisiología"],
  "Intervenciones educativas en salud": [],
  "Gestión del cuidado en salud mental": ["Fundamentos del proceso de enfermería"],
  "Proceso de enfermería": ["Fundamentos del proceso de enfermería"],
  "Inglés básico 1": [],

  // --- TERCER AÑO ---
  "Gestión en salud": [],
  "Gestión del cuidado en adulto mayor": ["Bases fisiopatológicas para el cuidado", "Gestión del cuidado en salud mental", "Proceso de enfermería"],
  "Gestión del cuidado en la familia en APS": ["Bases fisiopatológicas para el cuidado", "Gestión del cuidado en salud mental", "Proceso de enfermería"],
  "GDC en adulto y adulto mayor hospitalizado médico": [],
  "Inglés básico 2": ["Inglés básico 1"],

  "Gestión del cuidado": ["Gestión en salud"],
  "GDC en adulto y adulto mayor en APS": ["Gestión del cuidado en adulto mayor", "Gestión del cuidado en la familia en APS"],
  "Ética en salud": [],
  "GDC en adulto y adulto mayor hospitalizado quirúrgico": [],
  "Electivo 1": [],

  // --- CUARTO AÑO ---
  "Metodología de la investigación": ["Fundamentos en salud pública"],
  "Fundamentos del cuidado en niño y adolescente hospitalizado": [],
  "Gestión del cuidado en niño y adolescente en APS": [],
  "Fundamentos del cuidado en urgencias y desastres": [],
  "Electivo 2": [],

  "Seminario de investigación": ["Metodología de la investigación"],
  "Gestión de calidad y seguridad": ["Gestión del cuidado"],
  "Gestión del cuidado en niño y adolescente hospitalizado": ["Fundamentos del cuidado en niño y adolescente hospitalizado"],
  "Promoción de la salud en organizaciones comunitarias": [],
  "Electivo 3": [],

  // --- QUINTO AÑO ---
  "Internado": [] // Requiere todos los ramos del 1° al 8° semestre aprobados
};

const ordenSemestres = {
  "🟩 Primer Año": [
    ["📘 1° Semestre", [
      "Razonamiento lógico matemático",
      "Química",
      "Biología Celular",
      "Bases disciplinares para el cuidado de enfermería",
      "Taller de competencias comunicativas",
      "Taller de competencias para el aprendizaje",
      "Taller de desarrollo personal 1"
    ]],
    ["📗 2° Semestre", [
      "Crecimiento y desarrollo",
      "Bioquímica",
      "Fundamentos anatómicos para el cuidado",
      "Bases de Enfermería en APS",
      "Taller de primeros auxilios",
      "Taller de desarrollo personal 2",
      "Cultura y valores"
    ]]
  ],

  "🟨 Segundo Año": [
    ["📘 3° Semestre", [
      "Estadísticas para ciencias de la salud",
      "Fisiología",
      "Microbiología y parasitología clínica",
      "Farmacología",
      "Fundamentos del proceso de enfermería",
      "Persona y sentido"
    ]],
    ["📗 4° Semestre", [
      "Fundamentos en salud pública",
      "Bases fisiopatológicas para el cuidado",
      "Intervenciones educativas en salud",
      "Gestión del cuidado en salud mental",
      "Proceso de enfermería",
      "Inglés básico 1"
    ]]
  ],

  "🟧 Tercer Año": [
    ["📘 5° Semestre", [
      "Gestión en salud",
      "Gestión del cuidado en adulto mayor",
      "Gestión del cuidado en la familia en APS",
      "GDC en adulto y adulto mayor hospitalizado médico",
      "Inglés básico 2"
    ]],
    ["📗 6° Semestre", [
      "Gestión del cuidado",
      "GDC en adulto y adulto mayor en APS",
      "Ética en salud",
      "GDC en adulto y adulto mayor hospitalizado quirúrgico",
      "Electivo 1"
    ]]
  ],

  "🟦 Cuarto Año": [
    ["📘 7° Semestre", [
      "Metodología de la investigación",
      "Fundamentos del cuidado en niño y adolescente hospitalizado",
      "Gestión del cuidado en niño y adolescente en APS",
      "Fundamentos del cuidado en urgencias y desastres",
      "Electivo 2"
    ]],
    ["📗 8° Semestre", [
      "Seminario de investigación",
      "Gestión de calidad y seguridad",
      "Gestión del cuidado en niño y adolescente hospitalizado",
      "Promoción de la salud en organizaciones comunitarias",
      "Electivo 3"
    ]]
  ],

  "🟥 Quinto Año": [
    ["📘 9° y 10° Semestre", [
      "Internado"
    ]]
  ]
};

const LS_KEY = "ramosAprobados";

function cargarAprobados() {
  const data = localStorage.getItem(LS_KEY);
  if (data) {
    try {
      return new Set(JSON.parse(data));
    } catch {
      return new Set();
    }
  }
  return new Set();
}

function guardarAprobados() {
  localStorage.setItem(LS_KEY, JSON.stringify([...aprobados]));
}

const aprobados = cargarAprobados();

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  for (const [año, semestres] of Object.entries(ordenSemestres)) {
    const añoDiv = document.createElement("div");
    añoDiv.className = "semestre";

    if (año.includes("Primer Año")) añoDiv.classList.add("primer-ano");
    else if (año.includes("Segundo Año")) añoDiv.classList.add("segundo-ano");
    else if (año.includes("Tercer Año")) añoDiv.classList.add("tercer-ano");
    else if (año.includes("Cuarto Año")) añoDiv.classList.add("cuarto-ano");
    else if (año.includes("Quinto Año")) añoDiv.classList.add("quinto-ano");

    const añoTitulo = document.createElement("h2");
    añoTitulo.textContent = año;
    añoDiv.appendChild(añoTitulo);

    for (const [nombreSemestre, ramosLista] of semestres) {
      const semestreTitulo = document.createElement("h3");
      semestreTitulo.textContent = nombreSemestre;
      añoDiv.appendChild(semestreTitulo);

      ramosLista.forEach(nombre => {
        const ramoDiv = document.createElement("div");
        ramoDiv.className = "ramo";
        ramoDiv.textContent = nombre;

        if (nombre === "Internado") {
          const todosAntesAprobados = Object.keys(ramos).every(ramo => aprobados.has(ramo));
          if (!todosAntesAprobados) {
            ramoDiv.classList.add("bloqueado");
            ramoDiv.title = "Requiere aprobar todos los ramos anteriores";
          }
        }

        if (aprobados.has(nombre)) {
          ramoDiv.classList.add("aprobado");
        } else if (!ramos[nombre].every(r => aprobados.has(r))) {
          ramoDiv.classList.add("bloqueado");
        }

        ramoDiv.addEventListener("click", () => {
          if (ramos[nombre].every(r => aprobados.has(r))) {
            if (aprobados.has(nombre)) {
              aprobados.delete(nombre);
            } else {
              aprobados.add(nombre);
            }
            guardarAprobados();
            renderMalla();
          }
        });

        añoDiv.appendChild(ramoDiv);
      });
    }

    container.appendChild(añoDiv);
  }
}

renderMalla();

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  if (confirm("¿Seguro que quieres resetear los ramos aprobados?")) {
    aprobados.clear();
    guardarAprobados();
    renderMalla();
  }
});
