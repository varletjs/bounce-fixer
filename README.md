### Intro

Fixed bouncing caused by pull up or pull down on mobile web pages

### Quickstart

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@varlet/bounce-fixer/iife.js"></script>
<script>
  const { createBounceFixer } = BounceFixer

  const { enable, disable } = createBounceFixer()

  // enable bounce fixer
  enable()

  // disable bounce fixer
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

// enable bounce fixer
enable()

// disable bounce fixer
// disable()
```