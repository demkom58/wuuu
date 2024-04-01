// @ts-ignore
import { defineConfig } from 'unocss'
// @ts-ignore
import transformerVariantGroup from '@unocss/transformer-variant-group'
// @ts-ignore
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    // ...UnoCSS options
    transformers: [transformerVariantGroup(), transformerDirectives()],

})