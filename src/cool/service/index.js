const apiFiles = import.meta.globEager('../api/**/*.js');

const service = Object.keys(apiFiles).reduce((prev, path) => {
  const baseName = path.match(/\w+(?=\.js)/g)[0];
  const moduleName = baseName[0].toUpperCase() + baseName.substring(1);
  prev[moduleName] = apiFiles[path];
  return prev;
}, {});

export function useService() {
  return service;
}