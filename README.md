# biblioteca_virtual
# Proyecto de Certificación Laboral: Biblioteca Horizonte

Este repositorio contiene la implementación de la plataforma web **Biblioteca Horizonte**, desarrollada como proyecto práctico para la simulación y evaluación de competencias en el marco de la certificación de trabajo en desarrollo web Frontend.

El sitio representa la interfaz principal de una biblioteca virtual moderna, orientada a ofrecer una experiencia intuitiva de navegación, exploración de catálogos y gestión de lecturas seleccionadas.

---

## Descripción General

El proyecto tiene como objetivo demostrar el dominio en la construcción de interfaces web funcionales utilizando tecnologías estandarizadas del lado del cliente sin dependencias externas. Se enfoca en la estructuración semántica de contenidos, el diseño maquetado mediante CSS flexible y la interacción dinámica con el usuario a través de JavaScript vanilla.

---

## Funcionalidades Principales

* **Control de Acceso de Usuarios:** Módulo de autenticación simplificado en el encabezado que valida la entrada del usuario mediante su dirección de correo electrónico.
* **Gestión de Carrito de Selección:** Contador interactivo en tiempo real que registra e incrementa la cantidad de libros añadidos por el usuario.
* **Navegación por Categorías:** Menú de acceso rápido estructurado para la clasificación temática del catálogo (Novelas, Ciencia, Historia, Tecnología, Arte e Infantil).
* **Banner Promocional e Interactivo:** Componente central que incorpora una simulación de reproductor de video con cambios de estado dinámicos mediante eventos del cursor (*hover*).
* **Catálogo de Lecturas Recomendadas:** Sección lateral con tarjetas de presentación de obras literarias destacadas, incluyendo título, autor y acceso directo para añadir a la selección personal.

---

## Estructura del Proyecto

El código está organizado bajo una arquitectura estándar de separación de responsabilidades:

```text
biblioteca-horizonte/
│
├── index.html              # Estructura y contenido semántico HTML5
└── static/
    ├── css/
    │   └── style.css       # Hojas de estilo y maquetación visual
    └── js/
        └── script.js       # Lógica de interacción y manipulación del DOM
```

---

## Tecnologías Utilizadas

* **HTML5:** Utilización de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<aside>`) para garantizar una estructura clara y accesible.
* **CSS3:** Maquetación con **Flexbox** para la distribución responsiva de los elementos, uso de degradados CSS para la simulación de maquetas (*wireframes*) y pseudo-clases de interacción.
* **JavaScript (ES6):** Manejo nativo de eventos (`DOMContentLoaded`, `click`), manipulación e inyección directa en el DOM para contadores y alertas de usuario.

---

## Requisitos e Instalación

Para ejecutar y probar esta aplicación no se requiere la instalación de gestores de paquetes ni servidores de desarrollo complejos.

1. Clonar o descargar este repositorio en su equipo local.
2. Mantener la estructura de carpetas indicada (`static/css/` y `static/js/`).
3. Abrir el archivo `index.html` directamente en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge o Safari). 


este es mi trabajo, soy un estudiante de 3 medio C mi nombre es Diego Velásquez Ignacio Santana y tengo 17 años