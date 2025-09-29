// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    // 针对 .vue 文件的规则
    files: ['**/*.vue'],
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always', // ✅ 允许 <img />
            normal: 'never',
            component: 'always'
          }
        }
      ]
    }
  }
])
