const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function assetFilePath(path: string) {
  const cleanPath = path.split(/[?#]/, 1)[0];
  return basePath && cleanPath.startsWith(basePath)
    ? cleanPath.slice(basePath.length)
    : cleanPath;
}
