<template>
  <section id="about" class="mt-32 relative overflow-hidden">
      <img src="../../public/shape__white1.png" class="hidden md:absolute z-20
       h-24 -left-6 top-1/2 " alt="vwhite-5">
      <img src="../../public/shape__white1.png" class="absolute z-20
       h-7 right-28 top-64 " alt="vwhite-6">
      <img src="../../public/shape__white1.png" class="absolute z-20
       h-20 -right-6 top-44 " alt="vwhite-7">
      <div class="w-9/12 mx-auto lg:flex">
        <div class="flex-1 mb-10 md:mb-0 flex justify-center items-center">
            <img src="../../public/about__left.png" alt="big_v_chunk">
        </div>
        <div class="flex-1 flex items-center">
            <div>
                <div class="flex mb-6">
                    <p class="p-1 px-2 bg-red-100
                     text-sm text-red-500 rounded-3xl">About Covid-19</p>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold
                 text-gray-800">What is novel coronavirus?</h1>
                <p class="md:text-lg text-left md:leading-relaxed text-gray-600
                 mt-3">Coronavirus disease (COVID-19)
                    is an infectious disease <br> caused by a new virus.
                    The disease causes respiratory <br> illness (like the flu) with symptoms such
                    as a cough,<br> fever, and in more severe cases, difficulty breathing.</p>
                <p class="md:text-lg text-left
                 md:leading-relaxed text-gray-600 mt-4">
                    You can protect yourself by washing your hands <br> frequently,
                    avoiding touching your face, and avoiding <br> close contact
                    (1 meter or 3 feet) distances with who <br> are unwell.
                </p>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'AboutArea',
  mounted() {
    window.scroll(0, 0);
  },
};
</script>

<style>

</style>
