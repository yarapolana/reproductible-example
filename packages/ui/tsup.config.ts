import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['app/index.tsx'],
  treeshake: false,
  sourcemap: false,
  minify: false,
  splitting: false,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom'],
})
