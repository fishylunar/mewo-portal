import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  
  plugins: [react(), mkcert()],
  base: "/",
  preview: {
    port: 3000,
    strictPort: true,
   },
   server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "https://" + process.env.VITE_BASE_HOST,
   },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
