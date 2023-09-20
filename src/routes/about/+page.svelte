<script>
  import Commitment from './commitment.svelte'
  import Quality from './quality.svelte'
  import Headquarters from './headquarters.svelte'

  export let data

  const description =
    'Coffeeroasters began its journey of exotic discovery in 1999, ' +
    'highlighting stories of coffee from around the world. We have since ' +
    'been dedicated to bring the perfect cup - from bean to brew - in every ' +
    'shipment.'
</script>

<svelte:head>
  <title>About Us - Coffeeroasters</title>
  <meta name="description" content={description} />
</svelte:head>

<section class="hero h-100 bg-[#403434] lg:h-112.5">
  <h1 class="mb-6 text-3xl sm:text-4xl sm:leading-tight lg:text-5xl">
    About Us
  </h1>
  <p class="mx-auto max-w-[25rem] sm:mx-0 lg:max-w-md lg:opacity-100">
    {description}
  </p>
</section>
<Commitment />
<Quality />
<Headquarters data={data.headquarters} />

<style lang="postcss">
  section {
    background-image: url('$lib/assets/whitecup/xs.jpg');
  }

  @media screen(sm) {
    section {
      background-image: url('$lib/assets/whitecup/sm.jpg');
    }
  }

  @media screen(lg) {
    section {
      background-image: url('$lib/assets/whitecup/lg.jpg');
    }
  }
</style>
