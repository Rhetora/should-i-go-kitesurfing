/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.ASSET_PREFIX,
    basePath: process.env.BASE_PATH+'/should-i-go-kitesurfing/',
    images: {
      loader: 'akamai',
      path: '',
    }
  };
  
  export default nextConfig;