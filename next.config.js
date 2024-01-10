/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

//module.exports = nextConfig
module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
};

//書き換えたことによって、
//before：inedx.jsだけAPI読み込める。/pages/contact/index.js読み込めない。
//after：両方読み込める

//images
//指定されたホスト名がnext/imageコンポーネントで許可されるようになります