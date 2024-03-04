const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const productionConfig = {
  output: 'export',
}

/** @type {import('next').NextConfig} */
const developmentConfig = {
  rewrites: async () => {
    return [
      {
        source: '/assets/:path*',
        destination: 'http://localhost:8788/assets/:path*',
      },
    ]
  }
}

module.exports = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  ...(phase === PHASE_DEVELOPMENT_SERVER ? developmentConfig : productionConfig),
})
