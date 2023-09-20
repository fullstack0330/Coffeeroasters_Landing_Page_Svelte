<script>
  export let dark = false

  const data = [
    {
      step: 'Pick your coffee',
      description:
        'Select from our evolving range of artisan coffees. Our beans are ' +
        'ethically sourced and we pay fair prices for them. There are new ' +
        'coffees in all profiles every month for you to try out.'
    },
    {
      step: 'Choose the frequency',
      description:
        'Customize your order frequency, quantity, even your roast style and ' +
        'grind type. Pause, skip or cancel your subscription with no ' +
        'commitment through our online portal.'
    },
    {
      step: 'Receive and enjoy!',
      description:
        'We ship your package within 48 hours, freshly roasted. Sit back and ' +
        'enjoy award‑winning world‑class coffees curated to provide a ' +
        'distinct tasting experience.'
    }
  ]
</script>

<div
  class="relative grid gap-y-14 text-center md:grid-cols-3 md:gap-x-4
    md:gap-y-0 md:text-left lg:gap-x-12"
>
  <span
    class="absolute left-[15px] top-[15px] hidden h-[2px] bg-secondary md:block"
  />
  {#each data as { step, description }, index}
    <article class="md:row-start-2">
      <svg
        class="relative z-10 mb-12 hidden
          {dark ? 'fill-none' : 'fill-default-100'} 
          stroke-primary-200 stroke-2 md:block lg:mb-16.5"
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
      >
        <circle cx="15.5" cy="15.5" r="14.5" />
      </svg>
      <span class="font-serif text-7xl font-black text-secondary">
        0{index + 1}
      </span>
      <h3
        class="my-6 text-3xl leading-8 md:my-10 md:max-w-[13rem] lg:mb-10.5
          lg:mt-9.5 lg:text-4xl lg:leading-9"
      >
        {step}
      </h3>
      <p class="mx-auto max-w-md md:mx-0 lg:max-w-[17.875rem]">{description}</p>
    </article>
  {/each}
</div>

<style lang="postcss">
  div > span {
    --margin: 0.75rem;
    width: calc((200% / 3) + var(--margin));
  }

  @media screen(lg) {
    div > span {
      --margin: 2.125rem;
    }
  }
</style>
