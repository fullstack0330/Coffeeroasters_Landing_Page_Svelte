<script>
  import Steps from '$lib/steps.svelte'
  import Form from './form.svelte'

  export let data

  const description =
    'Build a subscription plan that best fits your needs. We offer an ' +
    'assortment of the best artisan coffees from around the globe delivered ' +
    'fresh to your door.'
</script>

<svelte:head>
  <title>Create a plan - Coffeeroasters</title>
  <meta name="description" content={description} />
</svelte:head>

<section class="hero h-100 bg-[#212625] lg:h-112.5">
  <h1 class="text-5xl leading-none sm:text-6xl lg:text-7xl">Create a plan</h1>
  <p class="mt-5.5 sm:mt-6 sm:w-98 lg:mt-8 lg:w-111">{description}</p>
</section>
<section
  class="-mx-6 my-30 rounded-xl bg-default-350 px-6 py-20 text-default-100
    md:-mx-10 md:my-36 md:px-10 md:py-24 lg:mx-0 lg:my-42 lg:px-21 lg:py-25"
>
  <Steps dark />
</section>
<Form questions={data.questions} />

<style lang="postcss">
  .hero {
    background-image: url('$lib/assets/blackcup/xs.jpg');
  }

  @media screen(sm) {
    .hero {
      background-image: url('$lib/assets/blackcup/sm.jpg');
    }
  }

  @media screen(lg) {
    .hero {
      background-image: url('$lib/assets/blackcup/lg.jpg');
    }
  }
</style>
