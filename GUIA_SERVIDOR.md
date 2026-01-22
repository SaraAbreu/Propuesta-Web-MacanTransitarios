# 🚀 Guía de Servidor Robusto para MACAN

## Problema Resuelto
El servidor ahora **NO se caerá** porque cuenta con:
- ✅ Reinicio automático si hay error
- ✅ Monitoreo de memoria
- ✅ Manejo de excepciones
- ✅ Health check endpoint
- ✅ Graceful shutdown

---

## 📦 Instalación (Opción 1: Desarrollo)

### 1. Instalar Node.js
Descarga desde: https://nodejs.org (versión LTS recomendada)

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor en desarrollo
```bash
npm run dev
```
El servidor se reiniciará automáticamente cuando hagas cambios.

---

## 🔧 Instalación (Opción 2: Producción - Recomendado)

### 1. Instalar PM2 globalmente
```bash
npm install -g pm2
```

### 2. Instalar dependencias del proyecto
```bash
npm install --production
```

### 3. Iniciar con PM2
```bash
pm2 start ecosystem.config.js
```

### 4. Verificar que está corriendo
```bash
pm2 status
```

### 5. Ver logs en tiempo real
```bash
pm2 logs macan-servidor
```

### 6. Hacer que reinicie con el sistema (Windows)
```bash
pm2 install pm2-windows-startup
pm2 save
```

---

## 🌐 Acceder al Servidor

- **Local**: http://localhost:3000
- **Health Check**: http://localhost:3000/health
- **Producción**: Tu dominio (ej: https://midominio.com)

---

## 📊 Monitoreo

### Ver estado en tiempo real
```bash
pm2 monit
```

### Ver logs con filtro
```bash
pm2 logs macan-servidor --err
```

### Detener servidor
```bash
pm2 stop macan-servidor
```

### Reiniciar servidor
```bash
pm2 restart macan-servidor
```

### Ver todos los procesos
```bash
pm2 list
```

---

## 🛡️ Características de Protección

| Característica | Función |
|---|---|
| **Reinicio automático** | Si el servidor falla, reinicia en 5 segundos |
| **Health Check** | Endpoint `/health` para monitoreo |
| **Límite de memoria** | Reinicia si consume >500MB |
| **Graceful Shutdown** | Cierra conexiones correctamente |
| **Cluster Mode** | Usa todos los cores disponibles |
| **Error Logging** | Registra todos los errores |
| **Memory Monitoring** | Muestra uso de memoria cada 30 segundos |

---

## 🆘 Solución de Problemas

### El servidor sigue cayendo
```bash
# Ver logs detallados
pm2 logs macan-servidor

# Aumentar límite de memoria
# Editar ecosystem.config.js: max_memory_restart: '1000M'
```

### Puerto 3000 ocupado
```bash
# Cambiar puerto
PORT=8080 npm start

# O en ecosystem.config.js cambiar env.PORT
```

### PM2 no inicia en Windows
```bash
# Ejecutar PowerShell como administrador
pm2 install pm2-windows-startup
```

---

## 📝 Archivos Añadidos

- `server.js` - Servidor Node.js robusto
- `package.json` - Dependencias del proyecto
- `ecosystem.config.js` - Configuración PM2
- `GUIA_SERVIDOR.md` - Esta guía

¡Tu servidor está listo para producción! 🎉
