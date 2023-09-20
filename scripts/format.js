import { execSync } from 'node:child_process'

const plugins = ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss']

execSync(
  `prettier . --write ${plugins.map(plugin => `--plugin ${plugin}`).join(' ')}`,
  { stdio: 'inherit' }
)
