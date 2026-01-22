# 🛠️ GUÍA TÉCNICA DE IMPLEMENTACIÓN

## 📌 REQUISITOS TÉCNICOS

### Para Visualizar Localmente:
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Sin necesidad de servidor
- Sin dependencias externas

### Para Producción:
- Hosting web (recomendado: Netlify, Vercel, o hosting tradicional)
- Dominio propio
- Certificado SSL (Let's Encrypt gratis)
- Backend para formularios (Formspree, Netlify Forms, o custom)

---

## 🚀 INSTALACIÓN RÁPIDA

### Opción 1: Visualizar en Local (30 segundos)
```bash
# Windows - Abre PowerShell en la carpeta del proyecto
python -m http.server 8000

# Luego abre navegador:
http://localhost:8000
```

### Opción 2: Lanzar en Netlify (5 minutos)
```bash
# 1. Crear cuenta en netlify.com
# 2. Arrastrar carpeta a Netlify
# 3. Esperar 30 segundos
# ¡Listo! Tendrás URL como:
https://macan-proyecto.netlify.app
```

### Opción 3: Lanzar en hosting tradicional (15 minutos)
```bash
# 1. Contratar hosting (HostGator, Bluehost, etc)
# 2. Conectar vía FTP con FileZilla
# 3. Subir archivos a carpeta public_html
# 4. Apuntar DNS del dominio
# ¡Listo!
```

---

## 📁 ESTRUCTURA DEL PROYECTO

```
macan-proyecto/
├── index.html              # Página principal (1,144 líneas)
│   ├── Contiene: HTML + CSS + JavaScript todo en uno
│   ├── No requiere archivos externos
│   ├── Incluye: Font, colores, animaciones
│   └── Ready to deploy
│
├── mejoras-css.css        # Estilos opcionales para futuro
│   ├── Contiene 50+ clases CSS avanzadas
│   ├── Se puede integrar después
│   └── Para funcionalidades del roadmap
│
└── Documentación/
    ├── RESUMEN_EJECUTIVO.md          # Este es el que leer PRIMERO
    ├── ANALISIS_Y_MEJORAS.md         # Análisis profundo
    ├── ROADMAP.md                    # Plan 6 meses
    ├── GUIA_COPYWRITING.md           # Copy mejorado
    ├── MOCKUPS_FUTURAS_MEJORAS.md    # Visualización de mejoras
    └── GUIA_TECNICA.md               # Este documento
```

---

## 🔧 CÓMO PERSONALIZAR LA PÁGINA

### 1. Cambiar Logo
```html
<!-- ANTES (línea ~770) -->
<img src="logo-macan.png" alt="Macan Transitarios" class="hero-logo">

<!-- DESPUÉS - reemplaza con tu logo -->
<img src="tu-logo-real.png" alt="Macan Transitarios" class="hero-logo">
```

**Requisitos del logo:**
- Formato: PNG o SVG (transparencia)
- Tamaño: 200-300px ancho
- Guardar en mismo directorio que index.html

---

### 2. Cambiar Textos

#### Título y Meta
```html
<!-- Línea 4 -->
<title>Macan - Logística y Transporte para Producciones Cinematográficas</title>

<!-- Línea 5 -->
<meta name="description" content="Descripción corta para Google">
```

#### Hero Section
```html
<!-- Línea ~770 -->
<h1>De la Idea a la Pantalla: Tu Logística Cinematográfica en Canarias</h1>
<p>Más de 150 producciones internacionales confían en nosotros</p>
```

#### Información de Contacto
```html
<!-- Línea ~30 (header) -->
<a href="tel:+34610655811">📞 (+34) 610 655 811</a>
<a href="mailto:charo@macan.es">✉️ charo@macan.es</a>

<!-- Línea ~1050 (contacto) -->
<strong>Teléfono</strong>
<a href="tel:+34610655811">(+34) 610 655 811</a>
```

---

### 3. Cambiar Colores

Todos los colores están definidos al inicio del CSS (líneas 20-31):

```css
:root {
    --primary-magenta: #E91E8C;      /* Color principal */
    --secondary-magenta: #DC1C6F;    /* Color secundario */
    --cyan: #00BCD4;                 /* Acento */
    --light-magenta: #FFF0F7;        /* Fondo alternado */
    --dark-gray: #2C2C2C;            /* Texto oscuro */
    --light-gray: #F5F5F5;           /* Fondo gris */
    --border-gray: #DCDCDC;          /* Bordes */
    --text-dark: #333333;            /* Texto normal */
    --text-light: #666666;           /* Texto ligero */
    --white: #FFFFFF;                /* Blanco */
}
```

Para cambiar colores:
1. Edita los valores HEX
2. Todos los elementos se actualizarán automáticamente
3. Propuesta: Mantén magenta, pero puedes cambiar cyan

---

### 4. Añadir Más Servicios

Busca la sección "SERVICIOS" (línea ~850):

```html
<!-- Copiar este bloque y duplicar -->
<div class="service-card">
    <div class="service-icon">🚚</div>
    <h3>Transporte Terrestre</h3>
    <p>Descripción aquí</p>
    <a href="#" class="service-link">Ver más →</a>
</div>

<!-- Cambiar:
     - service-icon: el emoji
     - h3: el título
     - p: la descripción
     - El link destino
-->
```

---

### 5. Cambiar Casos de Éxito

Busca la sección "CASOS DE ÉXITO" (línea ~930):

```html
<div class="case-card">
    <span class="case-year">2024</span>
    <h4>Nombre del Caso</h4>
    <p>Descripción detallada del proyecto</p>
</div>
```

**Información a añadir:**
- Año real
- Nombre producción/cliente
- Desafío resuelto
- Números (presupuesto, equipamiento, equipo)

---

### 6. Cambiar Testimonio

Busca la sección "TESTIMONIO" (línea ~965):

```html
<p class="testimonial-text">
    "Aquí va el testimonio completo"
</p>
<p class="testimonial-author">— Nombre de la Persona</p>
<p class="testimonial-role">Rol, Empresa</p>
```

**Mejor con:**
- Testimonio real de cliente
- Foto de la persona (si es posible)
- Nombre completo + empresa
- Problema → solución → resultado

---

### 7. Cambiar FAQ

Busca la sección "FAQ" (línea ~1010):

```html
<div class="faq-item">
    <div class="faq-question">
        <span>Tu pregunta aquí?</span>
        <span class="faq-icon">▼</span>
    </div>
    <div class="faq-answer">
        <p>Tu respuesta aquí</p>
    </div>
</div>
```

**Tips:**
- Usa preguntas reales de clientes
- Respuestas claras y directas (máx 100 palabras)
- 5-10 preguntas es ideal

---

### 8. Cambiar Números Estadísticos

```html
<!-- Línea ~870 (Hero stats) -->
<span class="stat-number">150+</span>  <!-- Cambiar número -->
<span class="stat-label">Producciones</span>

<!-- Línea ~1170 (Numbers section) -->
<span class="number-big">150+</span>    <!-- Cambiar número -->
<span class="number-label">Producciones gestionadas</span>
```

**Datos que puedes actualizar:**
- Número de producciones
- Toneladas transportadas
- Años de experiencia
- Porcentaje en tiempo
- Cualquier métrica importante

---

## 📦 FORMULARIO: CÓMO HACERLO FUNCIONAL

### Opción 1: Formspree (MÁS FÁCIL)

```html
<!-- Cambiar línea ~1040 -->
<!-- ANTES: -->
<form>

<!-- DESPUÉS: -->
<form action="https://formspree.io/f/TU_ID" method="POST">
```

**Pasos:**
1. Ve a formspree.io
2. Crea cuenta gratis
3. Añade tu email
4. Copia el ID (algo como: xyzabc123)
5. Reemplaza en el form

**Ventajas:**
- Gratuito hasta 50 envíos/mes
- No requiere backend
- Email automático al cliente
- Dashboard para ver respuestas

---

### Opción 2: Netlify Forms (SI USAS NETLIFY)

```html
<!-- Cambiar línea ~1040 -->
<!-- ANTES: -->
<form>

<!-- DESPUÉS: -->
<form name="contacto" method="POST" netlify>
```

**Pasos:**
1. Usa Netlify para hosting (netlify.com)
2. Añade `netlify` al form
3. Automáticamente funciona

**Ventajas:**
- Integrado con Netlify
- Sin configuración
- Dashboard incluido

---

### Opción 3: Backend Custom (AVANZADO)

Necesitarás:
- Servidor (Node.js, Python, PHP)
- Base de datos (MongoDB, MySQL)
- Configurar endpoints

No lo recomiendo para empezar. Usa Formspree.

---

## 📊 INTEGRAR GOOGLE ANALYTICS

### Paso 1: Crear Cuenta
1. Ve a analytics.google.com
2. Crea cuenta gratis
3. Añade tu sitio web
4. Copia el "MEASUREMENT ID" (algo como: G-XXXXXX)

### Paso 2: Insertar en HTML

```html
<!-- Pegar ANTES de </head> (línea 40) -->

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
</script>
```

Reemplaza "G-XXXXXX" con tu ID.

### Qué Rastreará:
- Visitantes y sesiones
- Dónde vienen (Google, Facebook, directo)
- Qué páginas visitan
- Tiempo en página
- Conversiones (formulario, WhatsApp)
- Dispositivo (móvil, desktop, tablet)

---

## ⚡ OPTIMIZACIÓN DE VELOCIDAD

### Verificar Velocidad Actual
```
1. Ve a pagespeed.insights.google.com
2. Pega tu URL
3. Verifica Mobile + Desktop
4. Target: >90 en ambos
```

### Mejoras Rápidas:

**1. Optimizar imágenes:**
```
1. Ve a tinypng.com
2. Sube imágenes
3. Descarga comprimidas
4. Ahorro típico: 70-80% peso
```

**2. Minificar CSS/JS:**
```
Si usas Netlify o Vercel:
- Se hace automáticamente

Si usas hosting tradicional:
- Ve a minifier.org
- Pega tu CSS/JS
- Copia versión minificada
```

**3. Lazy loading:**
```html
<!-- En imágenes futuras -->
<img loading="lazy" src="imagen.jpg" alt="descripción">
```

**4. Caché del navegador:**
```
En hosting tradicional:
- Pedir al proveedor activar GZIP
- Pedir caché de 30 días
```

---

## 🔐 SEGURIDAD

### SSL/HTTPS (CRÍTICO)
```
Netlify/Vercel:
- Automático, gratis

Hosting tradicional:
- Solicitar certificado Let's Encrypt (gratis)
- O comprar SSL de $50-200/año
```

### Protección de Formulario
```
Una vez integrases Formspree:
- Automáticamente protegido
- Validación de datos
- Anti-spam
```

### Meta Tags de Seguridad
```html
<!-- Ya incluidos en el HTML -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Esto hace que sea responsive -->
```

---

## 🧪 TESTING ANTES DE LANZAR

### Checklist Técnico

- [ ] **Navegadores:**
  - [ ] Chrome (último)
  - [ ] Firefox (último)
  - [ ] Safari (último)
  - [ ] Edge (último)

- [ ] **Dispositivos:**
  - [ ] iPhone 12
  - [ ] Samsung Galaxy S10
  - [ ] iPad
  - [ ] Desktop 1920px
  - [ ] Desktop 1366px
  - [ ] Mobile 375px

- [ ] **Funcionabilidad:**
  - [ ] Todos los links funcionan
  - [ ] Formulario se puede enviar
  - [ ] WhatsApp link abre app
  - [ ] FAQ se expande/colapsa
  - [ ] Scroll suave funciona

- [ ] **Velocidad:**
  - [ ] PageSpeed >90 mobile
  - [ ] PageSpeed >90 desktop
  - [ ] Load time <2s

- [ ] **SEO:**
  - [ ] Título único y claro
  - [ ] Meta description presentes
  - [ ] H1 y H2 bien jerarquizados
  - [ ] Alt text en imágenes
  - [ ] URL amigable

- [ ] **Accesibilidad:**
  - [ ] Contraste suficiente (WCAG AA)
  - [ ] Textos legibles
  - [ ] Links identificables

---

## 🚀 DEPLOYMENT (LANZAMIENTO)

### Opción 1: Netlify (RECOMENDADO)
```bash
# 1. Crea cuenta en netlify.com
# 2. Autoriza con GitHub/GitLab
# 3. Selecciona repositorio (o sube carpeta)
# 4. Configura:
#    Build command: (ninguno)
#    Publish directory: . (raíz)
# 5. Click Deploy
# Listo en 30 segundos
# URL: https://tu-sitio.netlify.app
```

### Opción 2: Vercel
```bash
# Similar a Netlify, alternativa buena
# Para HTML puro sin cambios
```

### Opción 3: Hosting Tradicional
```bash
# 1. Contrata hosting (HostGator, Bluehost, etc)
# 2. Registra dominio (GoDaddy, Namecheap, etc)
# 3. Apunta DNS:
#    NameServer 1: xxx.xxx.xxx
#    NameServer 2: xxx.xxx.xxx
# 4. Conecta vía FTP
#    - Usuario: tu_usuario
#    - Pass: tu_contraseña
#    - Server: ftp.tu-hosting.com
# 5. Sube index.html a public_html
# 6. Espera 24h propagación DNS
# 7. Instala SSL Let's Encrypt
```

---

## 📱 RESPONSIVE DESIGN: CÓMO FUNCIONA

El HTML ya incluye Media Queries:

```css
@media (max-width: 768px) {
    /* Estilos para tablet y móvil */
}
```

Esto significa:
- **Desktop**: Ancho completo, columnas múltiples
- **Tablet**: Ajustado a 768px, menos columnas
- **Móvil**: Apilado verticalmente, 100% ancho

**No necesitas hacer nada.** Funciona automáticamente.

Para testear:
1. F12 en Chrome
2. Click dispositivo (iPhone/Galaxy)
3. Verifica cada sección

---

## 🐛 DEBUGGING (SI ALGO FALLA)

### Página no carga
```
1. Abre Console (F12)
2. Busca errores rojos
3. Verifica rutas de imágenes
4. Verifica sintaxis HTML
```

### Formulario no envía
```
1. Verificar que Formspree ID esté correcto
2. Abre Console (F12)
3. Busca POST request
4. Revisa respuesta (200 = éxito)
```

### Estilos se ven mal
```
1. Hard refresh: Ctrl+Shift+R (Windows)
2. Verifica valores CSS
3. Comprueba caché navegador
4. Limpia cookies/cache
```

### Muy lento
```
1. Verifica tamaño imágenes (< 100KB cada una)
2. Usa DevTools Network
3. Identifica elemento más lento
4. Optimiza o elimina
```

---

## 📞 RECURSOS DE SOPORTE

### Documentación
- MDN Web Docs: developer.mozilla.org (HTML/CSS/JS)
- CanIUse: caniuse.com (compatibilidad navegadores)
- CSSReference: cssreference.io (propiedades CSS)

### Herramientas
- Chrome DevTools: F12 en cualquier navegador
- Lighthouse: Incluido en Chrome DevTools
- Wave.webaim.org: Accesibilidad

### Hosting/Deployment
- Netlify.com (recomendado)
- Vercel.com (alternativa)
- GitHub Pages (gratis, para static sites)

---

## ✅ CONCLUSIÓN

El sitio está **100% listo para usar**.

No necesitas:
- ❌ Compilar
- ❌ Build tools
- ❌ Dependencias
- ❌ Backend complejo

Solo necesitas:
- ✅ Hosting (gratuito o pago)
- ✅ Dominio (€5-15/año)
- ✅ Formspree para email (gratis)
- ✅ Validar en Google

**Tiempo para lanzar:** 30 minutos

**Tiempo para optimizar:** 2-4 semanas

**Tiempo para ver resultados:** 3-6 meses

---

**¡Mucho éxito con el lanzamiento!** 🚀
