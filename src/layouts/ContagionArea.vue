<template>
  <section id="contagion" class="contagion py-32 relative overflow-x-hidden">
      <img src="../../public/shape__white2.png" class="opacity-10 absolute z-20
       h-32 -left-14 top-72 small-v" alt="vwhite-5">
      <img src="../../public/shape__white2.png" class="opacity-10 absolute z-20
       h-7 right-28 top-96 small-v" alt="vwhite-6">
      <img src="../../public/shape__white2.png" class="opacity-10 absolute z-20
       h-20 -right-6 top-72 small-v" alt="vwhite-7">
      <div class=" w-8/12 mx-auto lg:flex text-white">
      <div class="flex-1 md:flex">
          <div class="flex-1 px-4">
              <CardContaion :imgsource="require(`../../public/contagion1.png`)"
               class="mb-7" title="Animal Contact" desc='Stay at home if you begin
                       to feel unwell, even with mild symptoms nose.' />
              <CardContaion :imgsource="require(`../../public/contagion2.png`)"
               title="Personal Contact" desc='Avoiding contact with others
                       and visits to medical facilities will allow.' />
          </div>
          <div class="flex-1 px-4 mt-8 lg:pt-12">
              <CardContaion :imgsource="require(`../../public/contagion3.png`)"
               class="mb-7" title="Air Transmission" desc='Via respiratory droplets produced
                when infected person coughs or sneezes.' />
              <CardContaion :imgsource="require(`../../public/contagion4.png`)"
               title="Contaminate Object" desc='Call in advance and tell your provider
                of any recent travel or contact.' />
          </div>
      </div>
      <div class="flex-1 flex mt-8 items-center">
          <div class="md:pl-10">
              <div class="flex mb-6">
                    <p class="p-1 px-2 text-sm
                    text-red-500 rounded-3xl"
                     style="background-color: #2A2143;">Covid-19 Contagion</p>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold text-white">
                    How does novel coronavirus spread?</h1>
                <p class="md:text-lg md:leading-relaxed text-white mt-5 md:mt-3">
                    Health experts are still learning the details. <br>
                    Currently, it is thought to spread:</p>
                <div class="mb-8 mt-8 md:mt-5">
                    <div class="flex-1">
                        <div class="block">
                            <ul class="font-semibold mb-4 flex">
                                <font-awesome-icon :icon="['fas', 'check-circle']"
                                 class="text-green-500" size="lg" />
                                 <p class="pl-4 leading-relaxed"> Via respiratory droplets
                                produced when an infected person <br> coughs or sneezes.</p>
                            </ul>
                            <ul class="font-semibold mb-4 flex">
                                <font-awesome-icon :icon="['fas', 'check-circle']"
                                 class="text-green-500" size="lg" />
                                 <p class="pl-4 leading-relaxed"> Between people who are in close
                                    contact with one <br> another (within about 6 feet).</p>
                            </ul>
                        </div>
                    </div>
                </div>
                <Button innerText="Check Symptoms"
                  classButton="bg-red-500 p-3 px-5 text-white rounded-3xl
                  font-bold shadow-md transition duration-300
                  ease-in-out transform -translate-y-0 hover:-translate-y-1
                  hover:text-red-500 hover:bg-white" btntype="submit"/>
          </div>
      </div>
      </div>
  </section>
</template>

<script>
import CardContaion from '../components/CardContaion.vue';
import Button from '../components/Button.vue';

export default {
  name: 'ContagionArea',
  components: {
    CardContaion,
    Button,
  },
  mounted() {
    window.scroll(0, 0);
  },
};
</script>

<style scoped>

.contagion{
    background-color: #151D41;
}
</style>
