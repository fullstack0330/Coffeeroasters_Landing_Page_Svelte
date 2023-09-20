<script>
  import imageLg from '$lib/assets/commitment/lg.jpg'
  import imageSm from '$lib/assets/commitment/sm.jpg'
  import imageXs from '$lib/assets/commitment/xs.jpg'
</script>

<section
  class="my-30 grid gap-y-12 sm:grid-cols-[max-content_1fr] sm:items-center
    sm:gap-x-7 md:my-36 md:gap-x-17 lg:my-42 lg:gap-x-32 xl:px-21"
>
  <picture>
    <source
      srcset={imageLg}
      media="(min-width: 1024px)"
      width="445"
      height="520"
    />
    <source
      srcset={imageSm}
      media="(min-width: 640px)"
      width="281"
      height="470"
    />
    <img
      class="rounded-lg sm:w-70 lg:w-auto"
      src={imageXs}
      alt=""
      width="654"
      height="800"
      loading="lazy"
    />
  </picture>
  <div class="text-center sm:text-left">
    <h2 class="mb-7 text-4xl lg:mb-8 lg:text-5xl">Our commitment</h2>
    <p class="opacity-80">
      We’re built on a simple mission and a commitment to doing good along the
      way. We want to make it easy for you to discover and brew the world’s best
      coffee at home. It all starts at the source. To locate the specific lots
      we want to purchase, we travel nearly 60 days a year trying to understand
      the challenges and opportunities in each of these places. We collaborate
      with exceptional coffee growers and empower a global community of farmers
      through with well above fair-trade benchmarks. We also offer training,
      support farm community initiatives, and invest in coffee plant science.
      Curating only the finest blends, we roast each lot to highlight tasting
      profiles distinctive to their native growing region.
    </p>
  </div>
</section>
