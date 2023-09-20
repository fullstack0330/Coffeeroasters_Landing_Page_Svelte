<script>
  import imageLg from '$lib/assets/quality/lg.jpg'
  import imageSm from '$lib/assets/quality/sm.jpg'
  import imageXs from '$lib/assets/quality/xs.jpg'
</script>

<section
  class="bg-before relative my-30 flex flex-col gap-y-16 px-6 pb-15
    before:inset-x-0 before:bottom-0 before:top-[13%] sm:px-14 sm:pb-17
    sm:before:top-[24%] md:my-36 lg:my-42 lg:flex-row-reverse lg:justify-between
    lg:pb-22 lg:before:top-22 xl:px-21"
>
  <picture>
    <source
      srcset={imageLg}
      media="(min-width: 1024px)"
      width="445"
      height="474"
    />
    <source
      srcset={imageSm}
      media="(min-width: 640px)"
      width="573"
      height="320"
    />
    <img
      class="mx-auto rounded-lg"
      src={imageXs}
      alt=""
      width="558"
      height="312"
      loading="lazy"
    />
  </picture>
  <div class="text-center text-default-100 lg:mr-18 lg:text-left">
    <h2 class="mb-6 text-3xl sm:text-4xl lg:mb-8 lg:mt-44 lg:text-5xl">
      Uncompromising quality
    </h2>
    <p class="sm:mx-auto sm:max-w-[33.75rem] lg:mx-0">
      Although we work with growers who pay close attention to all stages of
      harvest and processing, we employ, on our end, a rigorous quality control
      program to avoid over‑roasting or baking the coffee dry. Every bag of
      coffee is tagged with a roast date and batch number. Our goal is to roast
      consistent, user‑friendly coffee, so that brewing is easy and enjoyable.
    </p>
  </div>
</section>
