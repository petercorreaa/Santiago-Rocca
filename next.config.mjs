/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export estático: el sitio no usa API routes, middleware ni rutas
  // dinámicas, así que Cloudflare Pages lo sirve directo desde /out sin
  // necesidad de un adaptador SSR.
  output: "export",
  // `npm run build:check` usa un directorio aparte (.next-build) para no
  // pisar el `.next` del servidor de desarrollo y evitar que la página
  // pierda los estilos al refrescar. El build normal (y Cloudflare) usa `.next`.
  ...(process.env.BUILD_CHECK ? { distDir: ".next-build" } : {}),
};

export default nextConfig;
