const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  ...(phase === PHASE_DEVELOPMENT_SERVER ? developmentConfig : productionConfig),
})

/** @type {import('next').NextConfig} */
const productionConfig = {
  output: 'export',
}

/** @type {import('next').NextConfig} */
const developmentConfig = {
  rewrites: async () => [
    {
      source: '/icons/:path*',
      destination: 'http://localhost:8788/icons/:path*',
    },
    {
      source: '/photos/:path*',
      destination: 'http://localhost:8788/photos/:path*',
    },
    {
      source: '/icon.png',
      destination: 'http://localhost:8788/icon.png',
    },
    {
      source: '/pages',
      destination: 'http://localhost:8788/pages',
    },
    {
      source: '/favicon.ico',
      destination: 'http://localhost:8788/favicon.ico',
    },
  ]
}
