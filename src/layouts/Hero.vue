<template>
  <section id="home" class="mt-28 mb-44 relative">
      <img src="../../public/shape__white1.png" class="absolute z-20
       h-48 -left-24 -top-28 small-v" alt="vwhite-1">
      <img src="../../public/shape__white1.png" class="absolute z-20
       h-16 -top-24 right-4" alt="vwhite-2">
      <div class="w-9/12 mx-auto lg:flex">
      <transition>
        <div class="flex-1">
          <div class="hero-words flex items-center">
            <div>
              <div class="flex mb-10">
                <p class="p-1 px-2 bg-red-100 text-sm text-red-500
                rounded-3xl"> <span><font-awesome-icon :icon="['fas', 'exclamation-circle']"
                class="text-red-500" /></span> Covid-19 Alert</p>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800
              ">Save yourself <br /> Save the world.</h1>
              <p class="text-gray-600 text-lg lg:text-xl mt-4 leading-relaxed mb-5">
                Coronavirus disease (COVID-19) is an infectious
                <br />
                  disease caused by a new virus.</p>
                <Button innerText="Check Symptoms"
                  classButton="bg-red-500 p-3 px-5 text-white rounded-3xl
                  font-bold shadow-md transition duration-300
                  ease-in-out transform -translate-y-0 hover:-translate-y-1
                  hover:text-red-500 hover:bg-white" btntype="submit"/>
            </div>
          </div>
        </div>
      </transition>
      <transition>
        <div class="flex-1 hidden lg:block">
          <div class="relative">
            <img src="../../public/hero__bg.png" class="absolute z-10 bg-hero right-0" alt="bg">
            <img src="../../public/hero1__people.png"
            class="absolute z-20 right-0 top-14 hero-person" alt="peoplesick1">
            <img src="../../public/big__virous.png"
            class="absolute z-20 h-10 left-32 top-56 small-v" alt="v1">
            <img src="../../public/big__virous.png"
            class="absolute z-20 h-5 left-44 top-40 small-v" alt="v2">
            <img src="../../public/big__virous.png"
            class="absolute z-20 h-7 left-56 top-28 small-v" alt="v3">
          </div>
        </div>
      </transition>
      </div>
  </section>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle, faHome } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/Button.vue';

library.add(faExclamationCircle, faHome);

export default {
  name: 'Hero',
  components: {
    Button,
  },

};
</script>

<style scoped>
.bg-hero{
  width: 500px;
  height: 535;
}

.hero-words{
  height: 450px;
}

.hero-person{
  animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: updown;
}

.small-v{
  animation-duration: 12s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: prespin;
}

@keyframes prespin{
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
}

@keyframes updown {
    from {top: 0px;}
    to {top: 30px;}
}

</style>
