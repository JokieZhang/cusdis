module.exports = {
  // next.config.js
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ]
  },

  rewrites() {
    return [
      {
        source: '/doc',
        destination: '/doc/index.html'
      }
    ]
  }
}
