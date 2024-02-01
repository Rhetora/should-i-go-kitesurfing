/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.ASSET_PREFIX+"/should-i-go-kitesurfing",
    basePath: process.env.BASE_PATH,
    images: {
      loader: 'akamai',
      path: '',
    }
  };
  
  export default nextConfig;