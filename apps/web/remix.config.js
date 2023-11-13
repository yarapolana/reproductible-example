/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  serverModuleFormat: 'cjs',
  tailwind: true,
  serverNodeBuiltinsPolyfill: {
    url: true,
    crypto: true,
    fs: true,
    path: true,
    querystring: true,
    stream: true,
    http: true,
    https: true
  },
  serverDependenciesToBundle: [
    '@reproductible/ui',
    /^cloudinary.*/,
  ],
  watchPaths: ['../../packages/ui/app/**/*']
}
