<template>
  <div class="rounded-md shadow-sm md:flex p-7 card-prevention transition
   duration-500 ease-in-out -translate-y-0 transform hover:-translate-y-1 hover:shadow-md">
   <div class="flex justify-center">
    <div class="p-4 rounded-3xl md:shadow-md icon-image">
      <img :src="imgSource" alt="prevention1" />
    </div>
   </div>
    <div class="flex items-center pl-4 mt-3">
      <div>
        <h3 class="text-lg font-bold">{{title}}</h3>
        <p class="text-gray-600 leading-relaxed pt-1 w-full">
          {{desc}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPrevention',
  props: {
    title: String,
    desc: String,
    imgSource: String,
  },
};
</script>

<style scoped>
.icon-image{
    width: 90px;
    height: 90px;
}

.card-prevention > div > div > h3{
transition-property: color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
.card-prevention:hover > div > div > h3{
    color: red;
}
</style>
