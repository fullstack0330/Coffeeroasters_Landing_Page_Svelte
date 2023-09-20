<script lang="ts">
  import { page } from '$app/stores'
  import disabler from '$lib/actions/disabler'
  import toCamelCase from '$lib/utils/to-camel-case'
  import Collapse from './collapse.svelte'
  import OrderSummary from './order-summary.svelte'
  import type { Option, Question } from '@prisma/client'

  type QuestionWithOptions = Question & { options: Option[] }

  export let questions: QuestionWithOptions[]

  const orderItems = [
    'Preferences',
    'Bean Type',
    'Quantity',
    'Grind Option',
    'Deliveries'
  ]
</script>

<section
  use:disabler
  class="my-30 md:my-36 lg:my-42 lg:px-21 xl:grid xl:grid-cols-[16rem_45.5rem]
    xl:justify-center xl:gap-x-31"
>
  <nav class="sticky top-11 hidden h-fit xl:block">
    <ul class="grid gap-y-6 font-serif text-2xl font-black">
      {#each orderItems as item, index}
        {@const hash = `#${questions[index].id}`}
        <li class="pb-6">
          <a
            aria-current={$page.url.hash === hash ? 'location' : undefined}
            class="flex gap-x-6 opacity-40 hover:opacity-60
              aria-disabled:opacity-20"
            href={hash}
          >
            <span class={index === 0 ? 'text-primary-200' : 'text-default-200'}>
              0{index + 1}
            </span>
            {item}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="grid gap-y-24 md:gap-y-25 lg:gap-y-22">
    {#each questions as question, index}
      <Collapse name={toCamelCase(orderItems[index])} {...question} />
    {/each}
  </div>
  <OrderSummary />
</section>

<style lang="postcss">
  li:not(:last-child) {
    border-bottom: 1px solid theme(colors.default.200 / 25%);
  }

  a[aria-current='location']:not([aria-disabled='true']) {
    opacity: 1;
  }
</style>
