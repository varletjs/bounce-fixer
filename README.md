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

### What problem to resolve

When using a scrollable container(e.g. using overflow: auto) on an iOS device and sliding the pointer to the bottom or top, the page bounces like rubber bands. And scrolling the page for a period of time will cause the page to bounce, affecting normal page scrolling.