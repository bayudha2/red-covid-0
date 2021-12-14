<template>
  <section id="symptoms" class="mt-32 bg-gray-100 py-28 relative overflow-hidden">
      <img src="../../public/shape__white1.png" class="absolute z-20
       h-24 -left-6 top-1/2 small-v" alt="vwhite-7">
      <img src="../../public/shape__white1.png" class="absolute z-20
       h-12 -right-3 top-64 small-v" alt="vwhite-7">
      <div class="w-9/12 mx-auto lg:flex">
        <div class="flex-1 flex items-center">
            <div>
                <div class="flex mb-6">
                    <p class="p-1 px-2 bg-red-100 text-sm
                    text-red-500 rounded-3xl">Covid-19 Symptoms</p>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800">What are the symptoms?</h1>
                <p class="md:text-lg leading-relaxed text-gray-600 mt-3">
                    COVID-19 symptoms range from mild to severe. It takes<br>
                    2-14 days after exposure for symptoms to develop.<br>
                    Symptoms may include:</p>
                <div class="sm:flex mb-8 mt-5">
                    <div class="flex-1">
                        <div class="block">
                            <ul class="font-semibold mb-4">
                                <font-awesome-icon :icon="['fas', 'check-circle']"
                                 class="text-green-500" size="lg" /> Hard Cough
                            </ul>
                            <ul class="font-semibold mb-4">
                                <font-awesome-icon :icon="['fas', 'check-circle']"
                                 class="text-green-500" size="lg" /> Fever
                            </ul>
                            <ul class="font-semibold">
                                <font-awesome-icon :icon="['fas', 'check-circle']"
                                 class="text-green-500" size="lg" /> Headache
                            </ul>
                        </div>
                    </div>
                    <div class="flex-1 mt-4 sm:mt-0">
                        <div class="block">
                            <ul class="font-semibold mb-4">
                                <font-awesome-icon :icon="['fas', 'check-circle']"
                                 class="text-green-500" size="lg" /> Resoiratory Distress
                            </ul>
                            <ul class="font-semibold mb-4">
                                <font-awesome-icon :icon="['fas', 'check-circle']"
                                 class="text-green-500" size="lg" /> Shortness of Breath
                            </ul>
                            <ul class="font-semibold">
                                <font-awesome-icon :icon="['fas', 'check-circle']"
                                 class="text-green-500" size="lg" /> Kidney Failure
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
        <div class="flex-1 flex justify-center mt-10 items-center">
            <img src="../../public/symptoms.png" alt="big_v_chunk">
        </div>
      </div>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button.vue';

library.add(faCheckCircle);

export default {
  name: 'SymptomsArea',
  components: {
    Button,
  },
};
</script>

<style>

</style>
