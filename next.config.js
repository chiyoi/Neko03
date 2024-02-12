const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const config = defaultConfig
  return phase === PHASE_DEVELOPMENT_SERVER ? {
    ...config,
    async rewrites() {
      return [
        {
          source: '/assets/:path*',
          destination: 'http://neko03.moe/assets/:path*',
        },
        {
          source: '/favicon.ico',
          destination: 'http://neko03.moe/favicon.ico',
        },
      ]
    },
    async headers() {
      return [
        {
          source: '/test',
          headers: [
            {
              key: 'Cross-Origin-Embedder-Policy',
              value: 'require-corp',
            },
            {
              key: 'Cross-Origin-Opener-Policy',
              value: 'same-origin',
            },
          ],
        },
      ]
    },
  } : {
    ...config,
    output: 'export',
  }
}
