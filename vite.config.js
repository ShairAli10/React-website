import viteImagemin from 'vite-plugin-imagemin'

export default () => {
  return {
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            { name: 'removeViewBox' }, // Removes viewBox attribute, which is often unnecessary
            { name: 'cleanupIDs' }, // Removes unused IDs and minifies the remaining ones
            { name: 'removeDoctype' }, // Removes doctype declaration
            { name: 'removeXMLProcInst' }, // Removes XML processing instructions
            { name: 'removeComments' }, // Removes comments
            { name: 'removeMetadata' }, // Removes <metadata> elements
            { name: 'removeTitle' }, // Removes <title> elements
            { name: 'removeDesc' }, // Removes <desc> elements
            { name: 'removeUselessDefs' }, // Removes elements with no IDs
            { name: 'removeEditorsNSData' }, // Removes editor data
            { name: 'removeEmptyAttrs' }, // Removes empty attributes
            { name: 'removeHiddenElems' }, // Removes hidden elements
            { name: 'removeEmptyText' }, // Removes empty text elements
            { name: 'removeEmptyContainers' }, // Removes empty container elements
            { name: 'removeUnusedNS' }, // Removes unused namespaces declaration
            { name: 'collapseGroups' }, // Collapses <g> elements
            { name: 'mergePaths' }, // Merges multiple <path> elements into one
            { name: 'convertShapeToPath' }, // Converts shapes to <path> elements
            { name: 'sortAttrs' }, // Sorts element attributes for better gzip compression
            { name: 'sortDefsChildren' }, // Sorts <defs> children for better gzip compression
          ],
        },
      }),
    ],
  }
}