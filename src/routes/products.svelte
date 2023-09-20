<script lang="ts">
  import type { Image, Product } from '@prisma/client'

  type ProductWithImage = Product & { image: Image }

  export let data: ProductWithImage[]
</script>

<section class="mb-30 mt-26 text-center md:my-36 lg:my-50">
  <h2
    class="bg-default-200 bg-gradient-to-b from-default-100/5 to-default-100
      bg-clip-text text-5xl lowercase leading-[1.8] text-transparent
      sm:from-[-80%] sm:leading-none lg:text-[9.375rem]"
  >
    Our collection
  </h2>
  <div
    class="mt-6 grid gap-y-15 sm:-mt-9.5 sm:gap-y-12 lg:-mt-14 lg:grid-cols-4
      lg:gap-x-7.5 xl:px-21 @md:mx-auto @md:w-143"
  >
    {#each data as { image, name, description }}
      <article class="@md:flex @md:justify-center @md:gap-x-9">
        <img
          class="relative left-3 mx-auto h-35 w-auto sm:h-44.5 lg:left-2"
          src={image.source}
          alt=""
          width={image.width}
          height={image.height}
          loading="lazy"
        />
        <div class="mt-6 sm:mt-4 lg:mt-18 @md:text-left">
          <h3 class="mb-4 text-2xl sm:mb-6">
            {name}
          </h3>
          <p class="mx-auto w-72 lg:w-auto">{description}</p>
        </div>
      </article>
    {/each}
  </div>
</section>

<style lang="postcss">
  @media screen(sm) {
    h2 {
      font-size: clamp(5.1875rem, 12.5vw, 6rem);
    }
  }

  @media screen(lg) {
    h2 {
      font-size: clamp(6rem, 12.5vw, 9.375rem);
    }
  }
</style>
