import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    antfu({
        vue: true,
        typescript: true,
        unocss: true,
    }),
)