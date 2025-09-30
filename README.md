# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Css命名规则

Make sure to install dependencies:

```bash
# flex
限定命名规则: flex-{方向}-{交叉轴对齐}-{主轴对齐}
方向: row,col 取首字母|r|c|
交叉轴对齐[align-items]: start, center, end 取首字母|s|c|e
主轴对齐[justify-content]: start, center, end, space-between, 取首字母|s|c|e|b
# 示例
.flex{display: flex;}
.flex-col{display: flex;flex-direction: column;}
.flex-rcc{display: flex; flex-direction: row; align-items: center; justify-content: center;}
.flex-rcb{display: flex; flex-direction: row; align-items: center; justify-content: space-between;}
.flex-ccc{display: flex; flex-direction: column; align-items: center; justify-content: center;}
.flex-csb{display: flex; flex-direction: column; align-items: start; justify-content: space-between;}

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
