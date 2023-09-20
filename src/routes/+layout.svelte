<script>
  import '@fontsource/barlow/latin-400.css'
  import '@fontsource/barlow/latin-700.css'
  import '@fontsource-variable/fraunces'
  import { fade } from 'svelte/transition'
  import { afterNavigate } from '$app/navigation'
  import logoLight from '$lib/assets/logo/light.webp'
  import logoDark from '$lib/assets/logo/dark.webp'
  import menu from '$lib/assets/icons/menu.svg'
  import close from '$lib/assets/icons/close.svg'
  import '../app.css'

  const links = new Map([
    ['about', 'About Us'],
    ['subscribe', 'Create Your Plan']
  ])

  let menuIsHidden = true

  afterNavigate(() => (menuIsHidden = true))
</script>

<header
  class="top-0 z-20 -mx-6 flex items-center justify-between bg-default-100 px-6
    pb-10 pt-8 sm:static sm:mx-0 sm:px-0 sm:pb-13 sm:pt-10 lg:py-11"
  class:sticky={!menuIsHidden}
>
  <a class="w-41 sm:w-59" href="/">
    <img src={logoLight} alt="Coffeeroasters" width="237" height="27" />
  </a>
  <button class="sm:hidden" on:click={() => (menuIsHidden = !menuIsHidden)}>
    {#if menuIsHidden}
      {@const size = { width: 16, height: 15 }}
      <img class="w-4" src={menu} alt="Open menu" {...size} loading="lazy" />
    {:else}
      {@const parameters = { duration: 300 }}
      {@const [alt, size] = ['Close menu', { width: 14, height: 13 }]}
      <img in:fade={parameters} class="w-3.5" src={close} {alt} {...size} />
    {/if}
  </button>
  <nav
    class="fixed inset-x-0 top-22.5 h-screen animate-fade-down bg-gradient-to-b
      from-default-100 from-35% to-default-100/50 animate-duration-300
      sm:static sm:block sm:h-auto sm:animate-none"
    class:hidden={menuIsHidden}
  >
    <ul
      class="grid gap-y-8 px-6 py-10 text-center font-serif text-2xl font-black
        sm:flex sm:gap-x-8 sm:p-0 sm:font-sans sm:text-xs sm:font-bold
        sm:uppercase sm:tracking-widest sm:text-default-200"
    >
      {#each links as [id, label]}
        <li>
          <a class="transition-colors hover:text-default-300" href="/{id}">
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
<main>
  <slot />
</main>
<footer
  class="mb-18 bg-default-350 px-6 py-13.5 text-default-200 lg:mb-22
    lg:flex lg:items-center lg:justify-between lg:px-21 lg:py-12"
>
  <a class="mx-auto mb-12 block w-54.5 sm:mb-8 sm:w-59 lg:m-0" href="/">
    <img
      src={logoDark}
      alt="Coffeeroasters"
      width="237"
      height="27"
      loading="lazy"
    />
  </a>
  <nav class="text-center text-xs font-bold uppercase tracking-widest">
    <ul class="grid justify-center gap-y-6 sm:flex sm:gap-x-8">
      {#each links as [id, label]}
        <li>
          <a class="transition-colors hover:text-default-100" href="/{id}">
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</footer>
