import nitroCloudflareBindings from "nitro-cloudflare-dev";

// https://nitro.unjs.io/config
export default defineNitroConfig({
  modules: [nitroCloudflareBindings],
  // cloudflareDev: {
  //   remoteBindings: true
  // }
});