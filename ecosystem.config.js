// Configuración para PM2 (administrador de procesos Node.js)
// Instala con: npm install -g pm2
// Inicia con: pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'macan-servidor',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      // Reinicio automático
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      // Logs
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Health checks
      listen_timeout: 3000,
      kill_timeout: 5000,
      // Reintentos
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
};
