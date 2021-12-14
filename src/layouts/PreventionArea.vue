<template>
  <section id="prevention" class="mt-32 relative overflow-x-hidden">
      <img src="../../public/shape__white2.png" class=" absolute z-20
       h-32 -left-14 top-64 small-v" alt="vwhite-5">
      <img src="../../public/shape__white2.png" class=" absolute z-20
       h-7 left-28 top-96 small-v" alt="vwhite-6">
      <img src="../../public/shape__white2.png" class=" absolute z-20
       h-32 -right-16 top-72 small-v" alt="vwhite-7">
      <div class="w-9/12 mx-auto">
          <div class="flex mb-6 justify-center">
            <p class="p-1 px-2 bg-red-100 text-sm
                text-red-500 rounded-3xl">Covid-19 Preventions</p>
          </div>
          <h1 class="text-4xl md:text-5xl text-center mt-8 font-bold
         text-gray-800">How can I protect myself from Covid-19?</h1>
         <p class="md:text-lg text-center md:leading-relaxed text-gray-600 mt-6 md:mt-3">
            If you are traveling overseas (to China but also to other places)
            <br> follow the CDC’s guidance:
        </p>
        <div class="pt-12 lg:flex gap-12">
            <div class="flex-1">
                <h2 class="font-bold text-gray-800 text-xl mb-3">What you
                    <span class="text-green-400">should do:</span></h2>
                <div class="p-1">
                    <CardPrevention class="mb-6" :imgSource="require(`../../public/service1.png`)"
                     title="Wear Face Mask" desc="Wash hands often with soap and water.
                                    If not available, use hand sanitizer."/>
                    <CardPrevention class="mb-6" :imgSource="require(`../../public/service2.png`)"
                     title="Cover Face When Coughing" desc="Cover your mouth/nose
                      with a tissue or sleeve when coughing or sneezing."/>
                    <CardPrevention class="mb-6" :imgSource="require(`../../public/service3.png`)"
                     title="Wash Your Hand Frequently" desc="Wash hands often
                      with soap and water. If not available, use hand sanitizer."/>
                </div>
            </div>
            <div class="flex-1">
                <h2 class="font-bold text-gray-800 text-xl mt-10 md:mt-0 mb-3">What you
                    <span class="text-red-400">shouldn’t do:</span></h2>
                <div class="p-1">
                    <CardPrevention class="mb-6" :imgSource="require(`../../public/service4.png`)"
                     title="Avoid Animal Contact" desc="Wash hands often with soap and water.
                      If not available, use hand sanitizer."/>
                    <CardPrevention class="mb-6" :imgSource="require(`../../public/service5.png`)"
                     title="Avoid Markets and Crowd" desc="Cover your mouth/nose with
                      a tissue or sleeve when coughing or sneezing."/>
                    <CardPrevention class="mb-6" :imgSource="require(`../../public/service6.png`)"
                     title="Seek Medical Care" desc="Wash hands often
                      with soap and water. If not available, use hand sanitizer."/>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import CardPrevention from '../components/CardPrevention.vue';

export default {
  name: 'PreventionArea',
  components: {
    CardPrevention,
  },
};
</script>

<style scoped>

</style>
