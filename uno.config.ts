// 详细配置可以参考官网：https://unocss.dev
import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  transformerDirectives
} from 'unocss'
import unoConfig from './src/config/unocss'
export default defineConfig({
  // ...UnoCSS options
  // 变体组-具有公共前缀的组实用程序的简写
  transformers: [transformerDirectives()],
  // 预设
  presets: [
    // 预设，否则部分功能不能用，这里也可以设置tailwind bootstrap windi 等
    presetUno(),
    // 图标
    presetIcons(),
    // 属性方式支持
    presetAttributify({
      // 自定义前缀
      prefix: 'un-',
      // 忽略的属性
      ignoreAttributes: [
        // ...
      ]
    })
    // ...
  ],
  rules: unoConfig.rules,
  shortcuts: unoConfig.shortcuts
})
