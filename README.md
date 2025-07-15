# Cloudflare Platform for Nitro and Nuxt

This proof of concept module enables access to the Cloudflare runtime platform in the development server of [Nitro](https://nitro.unjs.io) and [Nuxt](https://nuxt.com) using the [new `getPlatformProxy` API](https://github.com/cloudflare/workers-sdk/pull/5002) exposed by [wrangler](https://developers.cloudflare.com/workers/wrangler/) and [miniflare](https://miniflare.dev/)

> [!IMPORTANT]
> As of Nitro >= 2.12 you don't need this module anymore. Please see [Dev Preset](https://nitro.build/deploy/providers/cloudflare#dev-preset) docs for more info.

## Usage

First, install `nitro-cloudflare-dev` and `wrangler` packages as a dev dependency: ([unjs/nypm](https://nypm.unjs.io) will automatically detect your package manager!)

```sh
npx nypm@latest add -D wrangler nitro-cloudflare-dev
```

For **Nuxt** update `nuxt.config.ts`:

```js
export default defineNuxtConfig({
  modules: ["nitro-cloudflare-dev"],
});
```

For **Nitro** update `nitro.config.ts`:

```js
import nitroCloudflareBindings from "nitro-cloudflare-dev";

export default defineNitroConfig({
  modules: [nitroCloudflareBindings],
});
```

## Configuration and persistence

This module automatically finds the closest [`wrangler.toml`](https://developers.cloudflare.com/workers/wrangler/configuration/) file for configuration.

Data is persisted `.wrangler/state/v3` directory. On first use of the module, it will be automatically added to the `.gitignore` file.

You can configure additional options using `cloudflareDev: { }` in `nitro.config` or `nitro: { cloudflareDev: {} }` in `nuxt.config`.

### Available options

- `persistDir`: Sets the persist dir (default `.wrangler/state/v3`).
- `configPath`: Sets a custom path for `wrangler.toml` file.
- `silent`: Hide initial banner.
- `environment`: Sets specific environment (useful for multi-environment configurations)

## Development

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Build in stub mode using `pnpm build --stub`
- Run Nitro playground using `pnpm dev:nitro` or Nuxt playground using `pnpm dev:nuxt`

## License

[MIT](./LICENSE)
