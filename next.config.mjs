/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 's2-receitas.glbimg.com'
            },
            {
                hostname: 'www.google.com'
            }
        ]
    },
};

export default nextConfig;