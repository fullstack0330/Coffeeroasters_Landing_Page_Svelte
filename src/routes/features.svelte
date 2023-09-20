<script lang="ts">
  import type { Feature, Image } from '@prisma/client'

  type FeatureWithImage = Feature & { image: Image }

  export let data: FeatureWithImage[]
</script>

<section
  class="bg-before relative my-30 px-6 pt-16 text-center text-default-100
    before:inset-0 before:h-3/5 sm:px-14 sm:pt-14 sm:before:h-2/3 md:my-36
    lg:my-50 xl:px-0 xl:pt-25 xl:before:h-[79%]"
>
  <h2 class="text-3xl sm:text-4xl xl:text-5xl">Why choose us?</h2>
  <p
    class="mx-auto mb-16 mt-6 max-w-[31rem] opacity-80 sm:mb-17.5
      lg:max-w-[33rem] xl:mb-21.5 xl:mt-8"
  >
    A large part of our role is choosing which particular coffees will be
    featured in our range. This means working closely with the best coffee
    growers to give you a more impactful experience on every level.
  </p>
  <div class="grid gap-y-6 xl:mx-auto xl:grid-cols-3 @lg:text-left">
    {#each data as { image, name, description }}
      <article
        class="flex h-95 flex-col items-center justify-end rounded-lg
          bg-primary-200 px-6 py-12 @lg:grid @lg:h-45
          @lg:grid-cols-[max-content_1fr] @lg:items-center @lg:gap-x-14
          @lg:py-0 @lg:pl-17.5 @lg:pr-12"
      >
        <img
          class="@md:w-14"
          src={image.source}
          alt=""
          width={image.width}
          height={image.height}
          loading="lazy"
        />
        <div>
          <h3 class="mb-6 mt-14 text-2xl @lg:mb-4 @lg:mt-0">
            {name}
          </h3>
          <p class="w-53 text-base sm:w-auto xl:mx-auto xl:w-64 @md:text-sm">
            {description}
          </p>
        </div>
      </article>
    {/each}
  </div>
</section>

<style lang="postcss">
  @media screen(xl) {
    section > div {
      column-gap: 1.9375rem;
      width: clamp(63.875rem, 87%, 69.5rem);
    }
  }
</style>
