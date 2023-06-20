export type BuildMod = 'production' | 'development'

export interface BuildPaths{
  entry: string,
  build: string,
  html: string,
}

export interface BuildOptions{
  mode: BuildMod  
  paths: BuildPaths  
  isDev: boolean
}