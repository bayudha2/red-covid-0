<template>
  <section class="my-32">
      <div class="w-9/12 mx-auto">
        <div class="flex mb-6 justify-center">
            <p class="p-1 px-2 bg-red-100 text-sm
                text-red-500 rounded-3xl">Covid-19 Threat</p>
        </div>
        <h1 class="text-3xl md:text-5xl text-center mt-8 font-bold
         text-gray-800">More than 59k died in Covid-19</h1>
         <p class="text-lg text-center md:leading-relaxed text-gray-600 mt-3">
            There are no medications specifically approved
            for coronavirus. <br> Most people with mild coronavirus :</p>
        <div class="flex justify-center items-center mt-12">
            <img src="../../public/map1.svg" alt="maps">
        </div>
        <p class="text-center mt-6 pb-2 text-xs font-bold">*** <span class="font-medium">Source:<a href="https://covid19.mathdro.id/api" class="underline text-red-500 font-medium"> mathdro.id</a></span></p>
      </div>
  </section>
</template>

<script>
export default {
  name: 'MapArea',
  mounted() {
    window.scroll(0, 0);
  },
};
</script>

<style>

</style>
