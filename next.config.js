/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com', 'i.ebayimg.com'],
  },
  env: {
    EBAY_APP_ID: process.env.EBAY_APP_ID,
    GOOGLE_CLOUD_PROJECT_ID: process.env.GOOGLE_CLOUD_PROJECT_ID,
  },
}

module.exports = nextConfig
