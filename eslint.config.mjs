// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: false,
      indent: 2,
      quotes: 'single',
      commaDangle: 'never'
    }
  }
}).overrideRules({
  'vue/multi-word-component-names': 'off'
})
