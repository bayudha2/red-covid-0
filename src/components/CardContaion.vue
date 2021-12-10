<template>
  <div class="p-5 sm:p-9 card-contag rounded-md h-64 transition
   duration-500 ease-in-out transform translate-y-0 hover:bg-gray-600 hover:-translate-y-1">
        <div class="flex items-center justify-center">
            <img :src="imgsource" alt="cntgn1">
        </div>
        <h2 class="text-center mt-3 mb-1 font-extrabold text-lg">{{title}}</h2>
        <p class="text-center text-sm">{{ desc }}</p>
    </div>
</template>

<script>
export default {
  name: 'CardContagion',
  props: {
    title: String,
    desc: String,
    imgsource: String,
  },

};
</script>

<style scoped>
.card-contag{
    background-color: #484E68;
}
</style>
