# cyp-admin

1、element-plus自动引入

2、unocss引入

# cyp后台管理系统

## 一、element-plus自动引入

安装相关依赖

```bash
pnpm install element-plus
pnpm install -D unplugin-vue-components unplugin-auto-import
```

vite配置

```ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
```

```
plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
```

## 二、unocss引入

安装相关依赖

```bash
pnpm add -D unocss
```

> uno.config.ts

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
})
```

> main.ts

```ts
import 'virtual:uno.css'
```

> vite.config.ts

```ts
import UnoCSS from 'unocss/vite'
export default defineConfig({
  plugins: [UnoCSS()]
})
```

相关链接；https://antfu.me/posts/reimagine-atomic-css-zh

unocss的相关配置

```ts
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
```

transformers说明：

```css
.custom-div {
  @apply text-center my-0 font-medium;
}
```

解析为：

```css
.custom-div {
  margin-top: 0rem;
  margin-bottom: 0rem;
  text-align: center;
  font-weight: 500;
}
```

更多细节：https://unocss.dev/transformers/directives
