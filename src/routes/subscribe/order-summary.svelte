<script lang="ts">
  import { onDestroy } from 'svelte'
  import { derived } from 'svelte/store'
  import { goto } from '$app/navigation'
  import order from '$lib/store/order'

  let dialog: HTMLDialogElement | undefined

  const summary = derived(
    order,
    ({ preferences, beanType, quantity, grindOption, deliveries }) => {
      const isCapsule = preferences === 'Capsule'

      return (
        `<strong>“I drink my coffee ${isCapsule ? 'using' : 'as'} ` +
        `${format(preferences)}, with a ${format(beanType)} type of bean. ` +
        format(quantity) +
        (isCapsule ? ', ' : ` ground ala ${format(grindOption)}, `) +
        `sent to me ${format(deliveries)}.”</strong>`
      )
    }
  )

  function format(value = '_____') {
    if (value === 'Capsule') value += 's'
    return `<span class="text-primary-200">${value}</span>`
  }

  function handleConfirm() {
    dialog?.close()
    order.clear()
    goto('/')
  }

  onDestroy(order.clear)
</script>

<div class="mt-30 sm:mt-36 lg:mt-22 xl:col-start-2">
  <div
    class="rounded-xl bg-default-350 px-6 py-8 text-default-100 sm:px-11
      sm:py-7 lg:px-16"
  >
    <h4 class="mb-2 text-base uppercase opacity-50">Order summary</h4>
    <p class="text-2xl leading-10">{@html $summary}</p>
  </div>
  <button
    class="btn mx-auto mt-14 grid sm:mt-10 xl:mr-0"
    disabled={$summary.includes('_____')}
    on:click={() => dialog?.showModal()}
  >
    Create my plan!
  </button>
</div>
<dialog
  bind:this={dialog}
  class="mx-6 max-w-none rounded-lg bg-default-100 sm:mx-auto sm:w-135"
>
  <header
    class="bg-default-300 px-6 py-7 text-default-100 md:px-14 md:pb-10
      md:pt-12"
  >
    <h2 class="text-3xl leading-8 md:text-5xl">Order Summary</h2>
  </header>
  <div class="px-6 pb-6 pt-10 md:p-14">
    <p class="text-2xl leading-10 text-default-200">{@html $summary}</p>
    <button class="btn mx-auto mt-6 grid md:mt-12" on:click={handleConfirm}>
      Confirm Order
    </button>
  </div>
</dialog>
