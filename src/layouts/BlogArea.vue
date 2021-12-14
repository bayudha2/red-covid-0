<template>
  <section id="blog" class="mt-32 mb-32 relative overflow-x-hidden">
    <img src="../../public/shape__white2.png" class=" absolute z-20
       h-32 -left-14 top-64 small-v" alt="vwhite-5">
      <img src="../../public/shape__white2.png" class=" absolute z-20
       h-14 -right-5 top-72 small-v" alt="vwhite-7">
      <div class="w-9/12 mx-auto lg:flex">
        <div class="p-1 flex-1">
            <div class="flex mb-6">
                <p class="p-1 px-2 bg-red-100
                text-sm text-red-500 rounded-3xl">News Feed</p>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800">Stay updated with our
            <br> news feed.</h1>
            <p class="md:text-lg md:leading-relaxed text-gray-600
             mt-6 md:mt-3 mb-10 md:mb-8">COVID-19 symptoms range from
            mild to severe. <br> It takes 2-14 days after exposure for
            <br> symptoms to develop.</p>
            <Button innerText="Check Out All Blog"
                  classButton="bg-red-500 p-3 px-5 text-white rounded-3xl
                  font-bold shadow-md transition duration-300
                  ease-in-out transform -translate-y-0 hover:-translate-y-1
                  hover:text-red-500 hover:bg-white" btntype="submit"/>
        </div>
        <div class="flex-1 p-1 mt-10 lg:mt-0">
            <BlogNews :imgSource="require(`../../public/news1.jpeg`)"/>
            <BlogNews :imgSource="require(`../../public/news2.jpeg`)"/>
            <BlogNews :imgSource="require(`../../public/news1.jpeg`)"/>
        </div>
      </div>
  </section>
</template>

<script>

import Button from '@/components/Button.vue';
import BlogNews from '../components/BlogNews.vue';

export default {
  name: 'BlogArea',
  components: {
    Button,
    BlogNews,
  },
};
</script>
