// vite.config.js
import viteImagemin from "file:///D:/Projects/Office/React/old%20code/mlbwebsite/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = () => {
  return {
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false
        },
        optipng: {
          optimizationLevel: 7
        },
        mozjpeg: {
          quality: 20
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4
        },
        svgo: {
          plugins: [
            { name: "removeViewBox" },
            // Removes viewBox attribute, which is often unnecessary
            { name: "cleanupIDs" },
            // Removes unused IDs and minifies the remaining ones
            { name: "removeDoctype" },
            // Removes doctype declaration
            { name: "removeXMLProcInst" },
            // Removes XML processing instructions
            { name: "removeComments" },
            // Removes comments
            { name: "removeMetadata" },
            // Removes <metadata> elements
            { name: "removeTitle" },
            // Removes <title> elements
            { name: "removeDesc" },
            // Removes <desc> elements
            { name: "removeUselessDefs" },
            // Removes elements with no IDs
            { name: "removeEditorsNSData" },
            // Removes editor data
            { name: "removeEmptyAttrs" },
            // Removes empty attributes
            { name: "removeHiddenElems" },
            // Removes hidden elements
            { name: "removeEmptyText" },
            // Removes empty text elements
            { name: "removeEmptyContainers" },
            // Removes empty container elements
            { name: "removeUnusedNS" },
            // Removes unused namespaces declaration
            { name: "collapseGroups" },
            // Collapses <g> elements
            { name: "mergePaths" },
            // Merges multiple <path> elements into one
            { name: "convertShapeToPath" },
            // Converts shapes to <path> elements
            { name: "sortAttrs" },
            // Sorts element attributes for better gzip compression
            { name: "sortDefsChildren" }
            // Sorts <defs> children for better gzip compression
          ]
        }
      })
    ]
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxPZmZpY2VcXFxcUmVhY3RcXFxcb2xkIGNvZGVcXFxcbWxid2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxcT2ZmaWNlXFxcXFJlYWN0XFxcXG9sZCBjb2RlXFxcXG1sYndlYnNpdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL09mZmljZS9SZWFjdC9vbGQlMjBjb2RlL21sYndlYnNpdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgdml0ZUltYWdlbWluKHtcbiAgICAgICAgZ2lmc2ljbGU6IHtcbiAgICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICAgICAgICBpbnRlcmxhY2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aXBuZzoge1xuICAgICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxuICAgICAgICB9LFxuICAgICAgICBtb3pqcGVnOiB7XG4gICAgICAgICAgcXVhbGl0eTogMjAsXG4gICAgICAgIH0sXG4gICAgICAgIHBuZ3F1YW50OiB7XG4gICAgICAgICAgcXVhbGl0eTogWzAuOCwgMC45XSxcbiAgICAgICAgICBzcGVlZDogNCxcbiAgICAgICAgfSxcbiAgICAgICAgc3Znbzoge1xuICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ3JlbW92ZVZpZXdCb3gnIH0sIC8vIFJlbW92ZXMgdmlld0JveCBhdHRyaWJ1dGUsIHdoaWNoIGlzIG9mdGVuIHVubmVjZXNzYXJ5XG4gICAgICAgICAgICB7IG5hbWU6ICdjbGVhbnVwSURzJyB9LCAvLyBSZW1vdmVzIHVudXNlZCBJRHMgYW5kIG1pbmlmaWVzIHRoZSByZW1haW5pbmcgb25lc1xuICAgICAgICAgICAgeyBuYW1lOiAncmVtb3ZlRG9jdHlwZScgfSwgLy8gUmVtb3ZlcyBkb2N0eXBlIGRlY2xhcmF0aW9uXG4gICAgICAgICAgICB7IG5hbWU6ICdyZW1vdmVYTUxQcm9jSW5zdCcgfSwgLy8gUmVtb3ZlcyBYTUwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbnNcbiAgICAgICAgICAgIHsgbmFtZTogJ3JlbW92ZUNvbW1lbnRzJyB9LCAvLyBSZW1vdmVzIGNvbW1lbnRzXG4gICAgICAgICAgICB7IG5hbWU6ICdyZW1vdmVNZXRhZGF0YScgfSwgLy8gUmVtb3ZlcyA8bWV0YWRhdGE+IGVsZW1lbnRzXG4gICAgICAgICAgICB7IG5hbWU6ICdyZW1vdmVUaXRsZScgfSwgLy8gUmVtb3ZlcyA8dGl0bGU+IGVsZW1lbnRzXG4gICAgICAgICAgICB7IG5hbWU6ICdyZW1vdmVEZXNjJyB9LCAvLyBSZW1vdmVzIDxkZXNjPiBlbGVtZW50c1xuICAgICAgICAgICAgeyBuYW1lOiAncmVtb3ZlVXNlbGVzc0RlZnMnIH0sIC8vIFJlbW92ZXMgZWxlbWVudHMgd2l0aCBubyBJRHNcbiAgICAgICAgICAgIHsgbmFtZTogJ3JlbW92ZUVkaXRvcnNOU0RhdGEnIH0sIC8vIFJlbW92ZXMgZWRpdG9yIGRhdGFcbiAgICAgICAgICAgIHsgbmFtZTogJ3JlbW92ZUVtcHR5QXR0cnMnIH0sIC8vIFJlbW92ZXMgZW1wdHkgYXR0cmlidXRlc1xuICAgICAgICAgICAgeyBuYW1lOiAncmVtb3ZlSGlkZGVuRWxlbXMnIH0sIC8vIFJlbW92ZXMgaGlkZGVuIGVsZW1lbnRzXG4gICAgICAgICAgICB7IG5hbWU6ICdyZW1vdmVFbXB0eVRleHQnIH0sIC8vIFJlbW92ZXMgZW1wdHkgdGV4dCBlbGVtZW50c1xuICAgICAgICAgICAgeyBuYW1lOiAncmVtb3ZlRW1wdHlDb250YWluZXJzJyB9LCAvLyBSZW1vdmVzIGVtcHR5IGNvbnRhaW5lciBlbGVtZW50c1xuICAgICAgICAgICAgeyBuYW1lOiAncmVtb3ZlVW51c2VkTlMnIH0sIC8vIFJlbW92ZXMgdW51c2VkIG5hbWVzcGFjZXMgZGVjbGFyYXRpb25cbiAgICAgICAgICAgIHsgbmFtZTogJ2NvbGxhcHNlR3JvdXBzJyB9LCAvLyBDb2xsYXBzZXMgPGc+IGVsZW1lbnRzXG4gICAgICAgICAgICB7IG5hbWU6ICdtZXJnZVBhdGhzJyB9LCAvLyBNZXJnZXMgbXVsdGlwbGUgPHBhdGg+IGVsZW1lbnRzIGludG8gb25lXG4gICAgICAgICAgICB7IG5hbWU6ICdjb252ZXJ0U2hhcGVUb1BhdGgnIH0sIC8vIENvbnZlcnRzIHNoYXBlcyB0byA8cGF0aD4gZWxlbWVudHNcbiAgICAgICAgICAgIHsgbmFtZTogJ3NvcnRBdHRycycgfSwgLy8gU29ydHMgZWxlbWVudCBhdHRyaWJ1dGVzIGZvciBiZXR0ZXIgZ3ppcCBjb21wcmVzc2lvblxuICAgICAgICAgICAgeyBuYW1lOiAnc29ydERlZnNDaGlsZHJlbicgfSwgLy8gU29ydHMgPGRlZnM+IGNoaWxkcmVuIGZvciBiZXR0ZXIgZ3ppcCBjb21wcmVzc2lvblxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVSxPQUFPLGtCQUFrQjtBQUU3VixJQUFPLHNCQUFRLE1BQU07QUFDbkIsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsYUFBYTtBQUFBLFFBQ1gsVUFBVTtBQUFBLFVBQ1IsbUJBQW1CO0FBQUEsVUFDbkIsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQLG1CQUFtQjtBQUFBLFFBQ3JCO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFVBQ2xCLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDSixTQUFTO0FBQUEsWUFDUCxFQUFFLE1BQU0sZ0JBQWdCO0FBQUE7QUFBQSxZQUN4QixFQUFFLE1BQU0sYUFBYTtBQUFBO0FBQUEsWUFDckIsRUFBRSxNQUFNLGdCQUFnQjtBQUFBO0FBQUEsWUFDeEIsRUFBRSxNQUFNLG9CQUFvQjtBQUFBO0FBQUEsWUFDNUIsRUFBRSxNQUFNLGlCQUFpQjtBQUFBO0FBQUEsWUFDekIsRUFBRSxNQUFNLGlCQUFpQjtBQUFBO0FBQUEsWUFDekIsRUFBRSxNQUFNLGNBQWM7QUFBQTtBQUFBLFlBQ3RCLEVBQUUsTUFBTSxhQUFhO0FBQUE7QUFBQSxZQUNyQixFQUFFLE1BQU0sb0JBQW9CO0FBQUE7QUFBQSxZQUM1QixFQUFFLE1BQU0sc0JBQXNCO0FBQUE7QUFBQSxZQUM5QixFQUFFLE1BQU0sbUJBQW1CO0FBQUE7QUFBQSxZQUMzQixFQUFFLE1BQU0sb0JBQW9CO0FBQUE7QUFBQSxZQUM1QixFQUFFLE1BQU0sa0JBQWtCO0FBQUE7QUFBQSxZQUMxQixFQUFFLE1BQU0sd0JBQXdCO0FBQUE7QUFBQSxZQUNoQyxFQUFFLE1BQU0saUJBQWlCO0FBQUE7QUFBQSxZQUN6QixFQUFFLE1BQU0saUJBQWlCO0FBQUE7QUFBQSxZQUN6QixFQUFFLE1BQU0sYUFBYTtBQUFBO0FBQUEsWUFDckIsRUFBRSxNQUFNLHFCQUFxQjtBQUFBO0FBQUEsWUFDN0IsRUFBRSxNQUFNLFlBQVk7QUFBQTtBQUFBLFlBQ3BCLEVBQUUsTUFBTSxtQkFBbUI7QUFBQTtBQUFBLFVBQzdCO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
