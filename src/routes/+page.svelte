<script>
  import Products from './products.svelte'
  import Features from './features.svelte'
  import Steps from '$lib/steps.svelte'

  export let data

  const description =
    'Start your mornings with the world’s best coffees. Try our expertly ' +
    'curated artisan coffees from our best roasters delivered directly to ' +
    'your door, at your schedule.'
</script>

<svelte:head>
  <title>Coffeeroasters</title>
  <meta name="description" content={description} />
</svelte:head>

<section class="hero h-125 bg-[#191919] lg:h-150">
  <h1 class="text-5xl leading-none sm:w-96 sm:text-6xl lg:w-124 lg:text-7xl">
    Great coffee made simple.
  </h1>
  <p class="mb-10 mt-6 sm:w-100 lg:mb-14 lg:mt-8">{description}</p>
  <a class="btn mx-auto sm:mx-0" href="/subscribe">Create your plan</a>
</section>
<Products data={data.products} />
<Features data={data.features} />
<section class="my-30 text-center md:my-36 md:text-left lg:my-50 lg:px-21">
  <h2 class="mb-20 text-2xl text-default-200 md:mb-10 lg:mb-20">
    How it works
  </h2>
  <Steps />
  <a class="btn mt-20 md:mt-11 lg:mt-16" href="/subscribe">Create your plan</a>
</section>

<style lang="postcss">
  .hero {
    background-image: url('$lib/assets/coffeepress/xs.jpg');
  }

  @media screen(sm) {
    .hero {
      background-image: url('$lib/assets/coffeepress/sm.jpg');
    }
  }

  @media screen(lg) {
    .hero {
      background-image: url('$lib/assets/coffeepress/lg.jpg');
    }
  }
</style>
