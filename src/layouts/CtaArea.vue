<template>
  <section class="bg-dark relative">
      <div class="w-10/12 md:w-8/12 mx-auto">
        <div class="p-12 shadow-lg bg-white relative overflow-hidden rounded-lg z-20">
          <img src="../../public/shape__white2.png" class=" absolute z-20
            h-16 -left-4 -bottom-4" alt="vwhite-7">
          <img src="../../public/shape__white2.png" class=" absolute z-20
            h-16 -right-4 -bottom-4" alt="vwhite-7">
            <h1 class="font-bold text-2xl md:text-4xl text-gray-800 text-center mb-4">
                Want to test Covid-19?</h1>
            <p class="text-center md:text-xl text-gray-500 mb-7">
                Our goal at Our World in Data is to provide
            testing data over time for <br> many countries around the world.</p>
            <div class="lg:flex items-center justify-center">

                  <div class="flex items-center justify-center">
                    <Button2 innerText="Call For Test"
                    classButton="bg-white p-3 px-5 text-red-500 rounded-3xl
                    font-bold shadow-md transition duration-300
                    ease-in-out transform -translate-y-0 hover:-translate-y-1
                    hover:text-white hover:bg-red-500" icons="phone" btntype="submit"/>
                  </div>
                  <div class="flex items-center justify-center">
                    <Button2 innerText="Book Doctor"
                    classButton="bg-white p-3 px-5 text-red-500 rounded-3xl
                    font-bold shadow-md transition duration-300
                    ease-in-out transform -translate-y-0 hover:-translate-y-1
                    hover:text-white hover:bg-red-500 lg:ml-4 mt-6 lg:mt-0"
                     icons="calendar" btntype="submit"/>
                  </div>

            </div>
        </div>
      </div>
  </section>
</template>

<script>
import Button2 from '../components/Button2.vue';

export default {
  name: 'CtaArea',
  components: {
    Button2,
  },
};
</script>

<style scoped>
.bg-dark::before{
    position: absolute;
    z-index: -1;
    content: "";
    height: 50%;
    width: 100%;
    background: #151D41;
    left: 0;
    bottom: 0;
}

</style>
