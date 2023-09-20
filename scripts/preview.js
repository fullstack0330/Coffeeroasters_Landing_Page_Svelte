import { execSync } from 'node:child_process'

execSync(
  `wrangler pages dev .svelte-kit/cloudflare --compatibility-date=2023-08-14`,
  { stdio: 'inherit' }
)
