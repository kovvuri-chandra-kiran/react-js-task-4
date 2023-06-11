import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : "react-js-task-4"
})

// export default defineConfig({
//   plugins: [
//     react(),
//     eslintPlugin({
//       cache: false,
//       include: ['./src/**/*.js', './src/**/*.jsx'],
//       exclude: [],
//     }),
//   ],
// })