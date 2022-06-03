// For webpack assets
declare module "*.png" {
  const url: string;
  export default url;
}