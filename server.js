const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Middleware de logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Manejo de rutas para archivos HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/servicio-aereo', (req, res) => {
  res.sendFile(path.join(__dirname, 'servicio-aereo.html'));
});

app.get('/servicio-maritimo', (req, res) => {
  res.sendFile(path.join(__dirname, 'servicio-maritimo.html'));
});

app.get('/servicio-terrestre', (req, res) => {
  res.sendFile(path.join(__dirname, 'servicio-terrestre.html'));
});

app.get('/servicio-entre-islas', (req, res) => {
  res.sendFile(path.join(__dirname, 'servicio-entre-islas.html'));
});

// Health check endpoint (importante para mantener vivo el servidor)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('[ERROR]', err);
  res.status(500).json({ error: 'Algo salió mal' });
});

// Obtener IP local
const os = require('os');
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const LOCAL_IP = getLocalIP();

// Iniciar servidor con reinicio automático en caso de error
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en:`);
  console.log(`   - Local: http://localhost:${PORT}`);
  console.log(`   - Red: http://${LOCAL_IP}:${PORT}`);
  console.log(`   - Desde móvil: Usa la IP anterior en la misma WiFi`);
  console.log(`🔄 El servidor se reiniciará automáticamente si hay un error`);
});

// Manejo de excepciones no capturadas
process.on('uncaughtException', (err) => {
  console.error('[UNCAUGHT EXCEPTION]', err);
  console.log('🔄 Reiniciando servidor en 5 segundos...');
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});

// Manejo de promesas rechazadas no capturadas
process.on('unhandledRejection', (reason, promise) => {
  console.error('[UNHANDLED REJECTION]', reason);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('📴 Recibido SIGTERM, cerrando servidor gracefully...');
  server.close(() => {
    console.log('✅ Servidor cerrado');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('📴 Recibido SIGINT, cerrando servidor gracefully...');
  server.close(() => {
    console.log('✅ Servidor cerrado');
    process.exit(0);
  });
});

// Monitoreo de memoria
setInterval(() => {
  const memUsage = process.memoryUsage();
  const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024);
  const heapTotalMB = Math.round(memUsage.heapTotal / 1024 / 1024);
  console.log(`💾 Memoria: ${heapUsedMB}MB / ${heapTotalMB}MB`);
}, 30000);
