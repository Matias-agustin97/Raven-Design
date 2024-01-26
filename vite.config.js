import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      manifest:{
        name:"Raven Design",
        description:"desarollo de paginas web con react",
        short_name:"Raven",
        theme_color:"#e10423",
        icons:[
          {src: './favicon/pwa-maskable-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose:"maskable"
          },
          {
            src: './favicon/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose:"any"
          },
          {
            src: './favicon/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose:"any"
          },
          {
            src: './favicon/pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose:"maskable"
          },
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
       registerType: 'autoUpdate',
       devOptions:{
        enabled:true
       },
       injectRegister:"script"
      }),
    react()],
})
