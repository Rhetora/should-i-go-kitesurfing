/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    output: 'export',
    images: {
      loader: 'akamai',
      path: '',
    },
    basePath: '/repository',
    assetPrefix: '/repository/'
  };
  
  export default nextConfig;