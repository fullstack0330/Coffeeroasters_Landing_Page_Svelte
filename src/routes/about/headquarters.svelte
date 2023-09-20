<script lang="ts">
  import type { Headquarter, Image } from '@prisma/client'

  type HeadquarterWithImage = Headquarter & { image: Image }

  export let data: HeadquarterWithImage[]
</script>

<section class="my-30 text-center sm:text-left md:my-36 lg:my-42 lg:px-21">
  <h2 class="mb-18 text-2xl text-default-200">Our headquarters</h2>
  <div class="flex flex-col gap-y-20 text-base sm:flex-row">
    {#each data as { image, country, address, city, state, phone }}
      <article class="flex h-65 flex-grow flex-col justify-between">
        <img
          class="self-center sm:self-start"
          src={image.source}
          alt=""
          width={image.width}
          height={image.height}
        />
        <div>
          <h3
            class="mb-5.5 text-3xl leading-9 sm:text-2xl sm:leading-normal
              lg:mb-6 lg:text-4xl lg:leading-9"
          >
            {country}
          </h3>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{phone}</p>
        </div>
      </article>
    {/each}
  </div>
</section>
