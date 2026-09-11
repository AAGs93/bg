// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import nuxtPlugin from '@nuxt/eslint-plugin'

export default withNuxt(
  // Tuo plugin Nuxt
  nuxtPlugin,

  // Le tue regole personalizzate qui
  {
    rules: {
      // Esempio:
      'vue/no-unused-components': 'off',
      'vue/component-api-style': ['error', {
        style: 'options',
        allowedNames: ['setup']
      }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponents: ['CategoryStories', 'FooterSection', 'HeroSection', 'MenuList', 'TemplateMenu'],
        registeredVueComponents: ['CategoryStories', 'FooterSection', 'HeroSection', 'MenuList', 'TemplateMenu']
      }]
    }
  }
)
