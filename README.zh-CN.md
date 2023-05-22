<a href="https://github.com/varletjs/bounce-fixer/blob/main/README.md">ENGLISH README</a>

### 介绍

修复移动网页上拉或下拉导致的弹跳问题

### 快速开始

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@varlet/bounce-fixer/iife.js"></script>
<script>
const { createBounceFixer } = BounceFixer

const { enable, disable } = createBounceFixer()

// 启用固定器
enable()

// 禁用固定器
// disable()
</script>
```

#### npm/yarn/pnpm

```
# npm
npm i @varlet/bounce-fixer -S

# yarn
yarn add @varlet/bounce-fixer

# pnpm
pnpm add @varlet/bounce-fixer
```

```js
import { createBounceFixer } from '@varlet/bounce-fixer'

const { enable, disable } = createBounceFixer()

// 启用固定器
enable()

// 禁用固定器
// disable()
```

### 解决什么问题

在 iOS 设备上使用局部可滚动容器（例如使用 overflow: auto）并将指针滑动到底部或顶部时，页面会出来一段橡皮筋。 并且短时间内滚动页面将会一直触发橡皮筋，影响了滚动容器的正常使用。