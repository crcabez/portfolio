// JavaScript para el desplazamiento suave al hacer clic en los enlaces de las áreas/zonas
document.addEventListener("DOMContentLoaded", function() {
    const areaLinks = document.querySelectorAll(".area a");
    
    areaLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });
});

// Contenido en español
const content_es = {
    welcome: "Bienvenido a mi mundo profesional & académico",
    changeLanguage: "Cambiar Idioma"
};

// Contenido en otro idioma (puedes agregar más idiomas si es necesario)
const content_en = {
    welcome: "Welcome to my profesional & academic world",
    changeLanguage: "Change Language"
};

// Variable que rastrea el idioma actual (inicialmente en español)
let currentLanguage = "es";

// Función para cambiar el idioma
function changeLanguage() {
    const languageToggle = document.getElementById("language-toggle");
    const welcomeToggle = document.getElementById("welcome")
    const titleToggle = document.getElementById("Title")
    
    if (currentLanguage === "es") {
        currentLanguage = "en";
        languageToggle.textContent = content_en.changeLanguage;
        welcomeToggle.textContent = content_en.welcome;
        document.getElementById("Title").textContent = "My Portfolio"
        document.getElementById("area1").textContent = "Academic Background";
        document.getElementById("area2").textContent = "Residential Projects";
        document.getElementById("area3").textContent = "Industrial Projects";
        document.getElementById("area4").textContent = "Infrastructure Projects";
        document.getElementById("area5").textContent = "Parametric Design";
        document.getElementById("area6").textContent = "Research & Development";
        
        // Aquí, puedes actualizar otros elementos de la página al idioma deseado
    } else {
        currentLanguage = "es";
        languageToggle.textContent = content_es.changeLanguage;
        welcomeToggle.textContent = content_es.welcome;
        document.getElementById("Title").textContent = "Mi Portafolio"
        document.getElementById("area1").textContent = "Formación Académica"
        document.getElementById("area2").textContent = "Proyectos Residenciales"
        document.getElementById("area3").textContent = "Proyectos Industriales"
        document.getElementById("area4").textContent = "Proyectos Infraestructura"
        document.getElementById("area5").textContent = "Diseño Paramétrico"
        document.getElementById("area6").textContent = "Investigación & Desarrollo"
        // Aquí, puedes actualizar otros elementos de la página al idioma deseado
    }
}

// Agregar un controlador de eventos al botón de cambio de idioma
document.getElementById("language-toggle").addEventListener("click", changeLanguage);


