import nitroCloudflareBindings from "nitro-cloudflare-dev";

// https://nitro.unjs.io/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  // preset: "cloudflare-module",
  modules: [nitroCloudflareBindings],
});
