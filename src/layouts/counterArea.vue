<template>
  <section class="mt-10">
      <div class="w-9/12 md:w-7/12 mx-auto px-4">
      <div class="shadow-lg relative py-10 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="flex justify-center mb-6 lg:mb-0 items-center counter relative">
                <div>
                    <h1 class="text-center text-red-500
                     text-2xl lg:text-4xl font-extrabold counterNumber"
                    :data-target="items.country.countries.length"></h1>
                    <p class="text-center text-gray-600 mt-2">Affected Country</p>
                </div>
            </div>
            <div class="flex justify-center mb-6 lg:mb-0 items-center counter relative">
                <div>
                    <h1 class="text-center text-red-500
                     text-2xl lg:text-4xl font-extrabold counterNumber"
                     :data-target="items.post.confirmed.value"></h1>
                    <p class="text-center text-gray-600 mt-2">Confirmed Cases</p>
                </div>
            </div>
            <div class="flex justify-center mb-6 lg:mb-0 items-center">
                <div>
                    <h1 class="text-center text-red-500 text-2xl
                     lg:text-4xl font-extrabold counterNumber"
                    :data-target="items.post.deaths.value">
                    </h1>
                    <p class="text-center text-gray-600 mt-2">Worldwide Deaths</p>
                </div>
            </div>
        </div>
        <p class="text-center mt-6 pb-2 text-xs font-bold">*** <span class="font-medium">Source:<a href="https://covid19.mathdro.id/api" class="underline text-red-500 font-medium">mathdro.id</a></span></p>
        <img src="../../public/shape__white1.png"
            class="absolute z-20 h-16 -left-5 -bottom-5" alt="v4">
        <img src="../../public/shape__white1.png"
            class="absolute z-20 h-16 -right-6 -bottom-6" alt="v4">
      </div>
      </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CounterArea',
  async created() {
    await this.getDataCovid();
    const counters = document.querySelectorAll('.counterNumber');
    counters.forEach((counter) => {
      const iniValue = 0;
      // eslint-disable-next-line no-param-reassign
      counter.innerHTML = iniValue;

      const updateCounter = () => {
        const target = counter.getAttribute('data-target');
        const c = +counter.innerHTML;

        const increment = target / 300;

        if (c < target) {
          // eslint-disable-next-line no-param-reassign
          counter.innerHTML = Math.ceil(c + increment);
          setTimeout(updateCounter, 1);
        }
      };
      updateCounter();
    });
  },
  computed: {
    ...mapState(['items']),
  },
  methods: {
    ...mapActions(['getDataCovid']),
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .counter::after{
    position: absolute;
    content: "";
    height: 20px;
    width: 1px;
    background: #a5a5a5;
    right: 0;
    top: 50%;
    margin-top: -10px;
  }
}

</style>
