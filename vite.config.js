import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'log-ip',
      configureServer(server) {
        return () => {
          server.middlewares.use((req, _res, next) => {
            const ip =
              req.headers['x-forwarded-for']?.split(',')[0].trim() ||
              req.socket?.remoteAddress ||
              'unknown'
            const time = new Date().toLocaleTimeString('ko-KR')
            process.stdout.write(`[${time}] ${ip}  ${req.method} ${req.url}\n`)
            next()
          })
        }
      },
    },
  ],
  server: {
    allowedHosts: true,
  },
})
