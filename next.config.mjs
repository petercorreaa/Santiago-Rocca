/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `npm run build:check` usa un directorio aparte (.next-build) para no
  // pisar el `.next` del servidor de desarrollo y evitar que la página
  // pierda los estilos al refrescar. El build normal (y Vercel) usa `.next`.
  ...(process.env.BUILD_CHECK ? { distDir: ".next-build" } : {}),
};

export default nextConfig;
