<script lang="ts">
  import { page } from '$app/stores'
  import order from '$lib/store/order'
  import icon from '$lib/assets/icons/arrow.svg'
  import type { Option } from '@prisma/client'

  export let id: string
  export let label: string
  export let options: Option[]
  export let name: string

  let open = false

  page.subscribe(({ url: { hash } }) => {
    if (!open && hash === `#${id}`) open = true
  })
</script>

<details {id} class="scroll-mt-11 aria-disabled:opacity-50" bind:open>
  <summary
    class="grid grid-cols-[1fr_max-content] items-center gap-x-17 text-2xl
      leading-7 text-default-200 sm:text-4xl lg:text-5xl"
  >
    {label}
    <img
      class="transition-transform"
      class:rotate-180={open}
      src={icon}
      alt=""
      width="19"
      height="13"
      loading="lazy"
    />
  </summary>
  <div
    class="mt-8 grid gap-y-4 sm:mt-10 sm:grid-cols-3 sm:gap-x-2.5 lg:mt-14
      lg:gap-x-6"
  >
    {#each options as { id: optionId, value, description }}
      {@const customId = `${id}-${optionId}`}
      <input
        hidden
        id={customId}
        {name}
        type="radio"
        {value}
        on:change={({ currentTarget: { name, value } }) => {
          order.set(name, value)
        }}
      />
      <label
        class="rounded-lg bg-default-150 p-6 hover:bg-secondary sm:h-62.5
          sm:pt-8 lg:px-6.5"
        for={customId}
      >
        <h3 class="text-2xl">{value}</h3>
        <p class="mt-2 text-base sm:mt-6">{description}</p>
      </label>
    {/each}
  </div>
</details>

<style lang="postcss">
  input:checked + label {
    background-color: theme(colors.primary.200);
    color: theme(colors.default.100);
  }
</style>
