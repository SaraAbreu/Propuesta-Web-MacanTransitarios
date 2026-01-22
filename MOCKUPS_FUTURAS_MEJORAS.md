# 🎨 MOCKUPS Y MEJORAS VISUALES FUTURAS

## 📌 INTRODUCCIÓN

Este documento describe las mejoras visuales y funcionales que debería tener la página en las fases futuras, incluyendo mockups descriptivos.

---

## FASE 4: MULTIMEDIA (SEMANAS 5-8)

### Mejora 1: Video Hero Section

**ANTES:**
```
Hero con solo texto e iconos
```

**DESPUÉS:**
```
┌─────────────────────────────────────────┐
│ [VIDEO AUTOREPRODUCIENDO EN FONDO]      │
│ (Montaje de rodajes reales de Macan)    │
│                                         │
│ Superposición semitransparente magenta │
│                                         │
│     "De la Idea a la Pantalla"          │
│  Tu Logística Cinematográfica Macan    │
│                                         │
│    [SOLICITAR PRESUPUESTO] [VER VIDEO] │
└─────────────────────────────────────────┘
```

**Técnica:** 
- Video MP4 en loop con muted autoplay
- Fallback a imagen fija para móvil
- Reducción de opacidad del video con overlay magenta

---

### Mejora 2: Galería de Casos

**ANTES:**
```
3 cards simples con texto
```

**DESPUÉS:**
```
┌──────────────┬──────────────┬──────────────┐
│  [IMAGEN]    │  [IMAGEN]    │  [IMAGEN]    │
│              │              │              │
│ 🎬 Película  │ 📺 Serie HBO │ 🎥 Comercial │
│ Netflix      │  "Thriller"  │   Amazon     │
│ 2024         │    2023      │    2023      │
│              │              │              │
│ € 250k       │  € 500k      │  € 150k      │
│              │              │              │
│ [VER MÁS →]  │ [VER MÁS →]  │ [VER MÁS →]  │
└──────────────┴──────────────┴──────────────┘
  
  (Hover: Imagen zoom + overlay con detalles)
```

**Funcionalidad:**
- Galería con filtros (por año, tipo, presupuesto)
- Lightbox al hacer click
- Carousel en móvil

---

### Mejora 3: Testimonios en Video

**ANTES:**
```
Testimonio con texto solo
```

**DESPUÉS:**
```
┌─────────────────────────────────────────┐
│  ▶️  [VIDEO 30 SEGUNDOS]                 │
│                                         │
│  "Macan es el equipo invisible que      │
│   hace posible la magia del cine"       │
│                                         │
│  👤 Javier Martinez                     │
│     Coordinador de Producción, Netflix  │
│     ⭐⭐⭐⭐⭐                          │
└─────────────────────────────────────────┘

[Deslizar para ver más testimonios →]
```

**Funcionalidad:**
- 10+ testimonios en carrusel
- Videos cortos (30-60 seg)
- Rating stars
- Botón YouTube link

---

## FASE 5: HERRAMIENTAS INTERACTIVAS

### Mejora 4: Calculadora de Presupuestos

**MOCKUP:**
```
┌────────────────────────────────┐
│  CALCULADORA DE PRESUPUESTOS   │
├────────────────────────────────┤
│                                │
│ 1. Tipo de Producción          │
│    ○ Película  ○ Serie  ○ Docs │
│    ○ Publicidad  ○ Otro        │
│                                │
│ 2. Duración de Rodaje          │
│    [____] días                 │
│    (1-100 días)                │
│                                │
│ 3. Complejidad                 │
│    ○ Baja  ○ Media  ○ Alta     │
│                                │
│ 4. Equipamiento Especial       │
│    ○ No  ○ Sí (drones, ARRI)  │
│                                │
│ 5. Ubicación                   │
│    Tenerife □  Gran Canaria □  │
│    La Palma □   Otras Islas □  │
│                                │
│          [CALCULAR]            │
│                                │
│ RESULTADO:                     │
│ Presupuesto Estimado:          │
│      €5,000 - €15,000          │
│                                │
│ [SOLICITAR PRESUPUESTO REAL →] │
└────────────────────────────────┘
```

**Funcionalidad:**
- Cálculo dinámico JavaScript
- Valores multiplicadores por complejidad
- Botón directo a formulario
- Guardado de datos para follow-up

---

### Mejora 5: Comparador Interactivo

**MOCKUP:**
```
┌─────────────────────────────────────────────────┐
│  MACAN vs COMPETENCIA                           │
├──────────────┬──────────────┬──────────────┬────┤
│ CARACTERÍSTICA│   MACAN      │  Competidor  │ +  │
├──────────────┼──────────────┼──────────────┼────┤
│ Especialistas│      ✅      │      ❌      │ +  │
│ en Cine      │              │              │    │
├──────────────┼──────────────┼──────────────┼────┤
│ Experiencia  │   20 años    │   8 años     │ +  │
│              │  150 casos   │   40 casos   │    │
├──────────────┼──────────────┼──────────────┼────┤
│ Disponibi-   │   24/7       │   9-19h      │ +  │
│ lidad        │              │              │    │
├──────────────┼──────────────┼──────────────┼────┤
│ Rapidez      │   98% tiempo │   85% tiempo │ +  │
│ entregas     │              │              │    │
├──────────────┼──────────────┼──────────────┼────┤
│ Solución     │  Integral    │  Fragmentada │ +  │
│ Integral     │  (todo+) │  (modular)     │    │
├──────────────┼──────────────┼──────────────┼────┤
│ Precio       │   Ajustado   │   ±20% más   │ +  │
│              │              │              │    │
└──────────────┴──────────────┴──────────────┴────┘

[ELIGE MACAN] ← Botón destacado en magenta
```

---

## FASE 6: MARKETING DIGITAL

### Mejora 6: Blog Landing Page

**ESTRUCTURA:**
```
┌──────────────────────────────────────┐
│         BLOG / RECURSOS              │
│   "Guías, Tips y Casos de Éxito"     │
└──────────────────────────────────────┘

FEATURED ARTICLE:
┌─────────────────────────────────────┐
│  [IMAGEN GRANDE]                    │
│                                     │
│  Guía Completa: Producción          │
│  Cinematográfica en Canarias        │
│                                     │
│  Por Charo Hidalgo | 15 min read    │
│  📅 17 Ene 2026 | 📊 2.3k views     │
│                                     │
│  [LEER ARTÍCULO →]                  │
└─────────────────────────────────────┘

RECIENTES (Grid 3 columnas):
┌──────────┬──────────┬──────────┐
│ [IMG]    │ [IMG]    │ [IMG]    │
│ Título   │ Título   │ Título   │
│ Fecha    │ Fecha    │ Fecha    │
│ [Leer]   │ [Leer]   │ [Leer]   │
└──────────┴──────────┴──────────┘

FILTROS:
[Todos] [Guías] [Tips] [Casos] [Industry]
```

---

### Mejora 7: Landing Pages Específicas

**Por tipo de cliente:**

```
LANDING 1: PRODUCTORAS INTERNACIONALES
┌────────────────────────────────────┐
│ "Netflix te eligió.               │
│  Macan te eligirá para logística"  │
│                                    │
│ [Video testimonial ejecutivo]      │
│                                    │
│ Números: 150+ producciones         │
│ Partners: Netflix, HBO, Amazon     │
│                                    │
│ CTA: "Hablemos de tu proyecto"    │
└────────────────────────────────────┘

LANDING 2: PRODUCTORAS LOCALES
┌────────────────────────────────────┐
│ "No importa el tamaño.             │
│  Nosotros sí que es posible"       │
│                                    │
│ Testimonio productor local         │
│                                    │
│ Presupuesto honesto, sin sorpresas │
│ Gestor accesible                   │
│ Solución creativa                  │
│                                    │
│ CTA: "Cuéntame tu proyecto"       │
└────────────────────────────────────┘

LANDING 3: AGENCIAS PUBLICIDAD
┌────────────────────────────────────┐
│ "30 segundos de spot = 30 días     │
│  de coordinación logística"        │
│                                    │
│ Portfolio spots (video)            │
│                                    │
│ 100+ spots producidos              │
│ Clientes con múltiples proyectos   │
│                                    │
│ CTA: "Presupuesto en 24h"         │
└────────────────────────────────────┘
```

---

## FASE 7: CREDIBILIDAD

### Mejora 8: Sección de Certificaciones

**VISUAL:**
```
┌──────────────────────────────────────┐
│    ACREDITACIONES Y CERTIFICACIONES  │
├──────────────────────────────────────┤
│                                      │
│  [ISO 9001 LOGO]  [ISO 14001 LOGO]  │
│   Calidad          Medioambiente     │
│                                      │
│  [FILM COMMISSION]  [MEMBER BADGE]   │
│   Tenerife Official  Professional    │
│                                      │
│  [AWARD BADGE]     [CERTIFIED]       │
│   Best Logistics    Aduanal Auth.    │
│                                      │
│        [VER DOSSIER COMPLETO PDF]   │
└──────────────────────────────────────┘
```

---

### Mejora 9: Equipo Destacado

**ANTES:**
```
Sin sección de equipo
```

**DESPUÉS:**
```
┌──────────────────────────────────────┐
│        CONOCE AL EQUIPO MACAN        │
└──────────────────────────────────────┘

┌────────────┬────────────┬────────────┐
│ [FOTO]     │ [FOTO]     │ [FOTO]     │
│            │            │            │
│ Charo H.   │ Director   │ Gestor     │
│ Fundadora  │ Operacio.  │ Clientes   │
│            │            │            │
│ 20 años    │ 15 años    │ 12 años    │
│ Netflix    │ HBO, Amazn │ Spotif,    │
│            │            │ Google     │
│ [LinkedIn] │ [LinkedIn] │ [LinkedIn] │
└────────────┴────────────┴────────────┘
```

---

## FASE 8: CONVERSIÓN AVANZADA

### Mejora 10: Chatbot IA

**VISUAL:**
```
┌─────────────────────────────┐
│          MACAN CHAT          │ 🤖
├─────────────────────────────┤
│                             │
│ ¡Hola! Soy Charo (IA)      │
│ Estoy aquí 24/7 para       │
│ ayudarte con tu proyecto    │
│                             │
│ ¿Qué necesitas?            │
│                             │
│ [Presupuesto estimado]      │
│ [Casos similares]           │
│ [Disponibilidad]            │
│ [Hablar con Charo]          │
│                             │
│ Usuario: "Producimos serie" │
│                             │
│ Chat: "Genial! Cuéntame..." │
│                             │
├─────────────────────────────┤
│ [Escribir mensaje...]       │
└─────────────────────────────┘
```

---

### Mejora 11: Portal de Clientes

**ESTRUCTURA:**
```
LOGIN:
┌────────────────────────────────┐
│   Mi Cuenta Macan              │
├────────────────────────────────┤
│ Email: charo@empresa.com       │
│ [_______________] [Acceder]    │
│                                │
│ ¿Olvidaste contraseña?         │
│ ¿Primera vez? [Registrarse]    │
└────────────────────────────────┘

DASHBOARD:
┌─────────────────────────────────────┐
│  Hola Javier Martinez               │
├─────────────────────────────────────┤
│                                     │
│  TUS PROYECTOS:                    │
│  [2024 - Película Netflix] ─────→  │
│  [2023 - Serie HBO] ─────────────→ │
│  [2023 - Comercial] ───────────→   │
│                                     │
│  RASTREO EN TIEMPO REAL:           │
│  [Proyecto: 75% en ruta] ▓▓▓▓░    │
│                                     │
│  DOCUMENTACIÓN:                    │
│  [Descargar facturas] ──→          │
│  [Descargar seguros] ──→           │
│  [Descargar aduanas] ──→           │
│                                     │
│  CONTACTO GESTOR:                  │
│  Charo Hidalgo                     │
│  [WhatsApp] [Email] [Llamada]      │
│                                     │
│  NUEVO PROYECTO:                   │
│  [COMENZAR NUEVO PROYECTO] ─→      │
└─────────────────────────────────────┘
```

---

## MEJORAS EN VELOCIDAD Y PERFORMANCE

### Antes (Estimado):
```
Métrica          Valor
────────────────────
Page Load Time   4.2s
Lighthouse Score 72/100
Mobile Score     65/100
```

### Después (Meta):
```
Métrica          Valor
────────────────────
Page Load Time   1.8s
Lighthouse Score 95/100
Mobile Score     92/100

Técnicas:
✅ Imágenes optimizadas
✅ CSS minificado
✅ Lazy loading
✅ Caché del navegador
✅ CDN para assets
✅ Gzip compression
```

---

## MEJORAS EN CONVERSIÓN

### Embudo Actual (Estimado):
```
Visitantes web: 100%
    ↓
Clientes potenciales: 5%
    ↓
Leads cualificados: 50%
    ↓
Clientes: 20%

Total: 0.05%
```

### Embudo Objetivo (Fase 8):
```
Visitantes web: 100%
    ↓
Clientes potenciales: 15%
    ↓
Leads cualificados: 70%
    ↓
Clientes: 40%

Total: 4.2%

85x de mejora
```

---

## ELEMENTO DE RETARGETING

### Ads que verían los visitantes:

**Facebook/Instagram:**
```
┌─────────────────────────────────┐
│ ¿Necesitas logística para tu     │
│ rodaje en Canarias?             │
│                                 │
│ [Imagen del caso similar]       │
│                                 │
│ Nosotros lo hicimos posible.    │
│ ¿Será tu turno?                 │
│                                 │
│ [SOLICITAR PRESUPUESTO]         │
│                                 │
│ Macan - Especialistas en Cine   │
└─────────────────────────────────┘
```

**Google Search:**
```
Macan | Logística Cinematográfica
Tu producción merece lo mejor.
150+ películas. 98% en tiempo.
Presupuesto en 24 horas.

[SOLICITAR PRESUPUESTO]
```

---

## DETALLES QUE GENERAN CONFIANZA

### Trust Elements a Añadir:

```
✅ Badges de seguridad (SSL, protección datos)
✅ Número de teléfono VISIBLE (sin hide)
✅ Dirección física completa
✅ Horario de atención
✅ Google Maps integrado
✅ Reseñas de Google
✅ Número de clientes satisfechos
✅ Garantía (escrita)
✅ Política de devolución/cambios
✅ Testimonios con FOTO y nombre completo
✅ Certificaciones visibles
✅ Partner badges (Netflix, HBO, etc.)
✅ Tiempo de respuesta garantizado (24h)
✅ Money-back guarantee (si aplica)
```

---

## CONCLUSIÓN

Una vez implementadas todas estas mejoras:

- ✅ La página será **elite en su categoría**
- ✅ Competirá con empresas **5x su tamaño**
- ✅ Generará **leads consistentes de calidad**
- ✅ Posicionará Macan como **#1 en Canarias**
- ✅ Permitirá **crecer sin límite**

**Esto no se hace en una semana. Pero cada mejora suma.**

**El objetivo es llegar a "elite" en 12-18 meses.**

---
