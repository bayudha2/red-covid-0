<template>
  <div class="pl-6 md:flex newsblog pb-8 relative mb-8">
                  <div class="flex justify-center items-center mb-6 md:mb-0">
                      <div class="w-40 h-32">
                          <img :src="imgSource" alt="news1" class="rounded-md">
                      </div>
                  </div>
                <div class="md:pl-6">
                    <div class="flex mb-3">
                        <p class="p-1 px-2 bg-red-100
                        text-sm text-red-500 rounded-3xl">Statistics</p>
                    </div>
                    <a href="#" class="text-xl md:text-2xl font-bold
                     news-title">Some countries provide clear
                        <br> and helpful data on testing.</a>
                    <div class="flex items-center">
                        <a href="#" class="flex items-center text-red-500 font-black
                      pt-4 readmore">
                            Read More <span class="pl-1">
                                <font-awesome-icon :icon="['fas', 'angle-right']"
                         class="text-red-500" /></span></a>
                    </div>
                </div>
            </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight);
export default {
  name: 'BlogNews',
  props: {
    imgSource: String,
  },
};
</script>

<style scoped>
.readmore > span {
  transition-property: padding;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
}

.readmore:hover > span {
    padding-left: 8px;
}

.newsblog::after{
    position: absolute;
    content: "";
    height: 1px;
    width: 90%;
    background: #E4E4E4;
    bottom: 0;
    left: 5%;
}

.newsblog > div > .news-title {
  transition-property: color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
.newsblog:hover > div > .news-title {
  color: red;
}

</style>
