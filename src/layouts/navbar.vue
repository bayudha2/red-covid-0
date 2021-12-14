<template>
  <nav ref="header" class="sticky top-0 z-50 flex
   flex-wrap items-center justify-between px-2 py-4 bg-white mb-3">
    <div class="container px-4 w-10/12 md:w-8/12 mx-auto
     flex flex-wrap items-center justify-between">
      <div class="w-full lg:flex-1 flex justify-between lg:w-auto
       px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block
        mr-4 py-2 whitespace-nowrap uppercase text-gray-800 " href="#">
          Red<span class="text-red-500">covid</span>
        </a>
        <button class="cursor-pointer text-2xl font-black leading-none px-3 py-1
        border border-solid border-transparent rounded bg-transparent block text-gray-800
        lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          +
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex
      lg:flex-grow items-center lg:flex-1">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li>
            <a class="px-3 py-2 flex items-center text-xs uppercase
            font-bold leading-snug text-gray-800 hover:opacity-75
            transition duration-200 ease-in-out hover:text-red-500 "
             href="#" @click="(e) => sectionScroll(e)">
              <span class="ml-2 transition duration-200 ease-in-out
               hover:text-red-500 home navbar">Home</span>
            </a>
          </li>
          <li>
            <a class="px-3 py-2 flex items-center text-xs
             uppercase transition duration-200 ease-in-out hover:text-red-500
              font-bold leading-snug text-gray-800 hover:opacity-75"
               href="#" @click="(e) => sectionScroll(e)">
              <span class="ml-2 about navbar">About</span>
            </a>
          </li>
          <li>
            <a class="px-3 py-2 flex items-center
             text-xs uppercase transition duration-200 ease-in-out hover:text-red-500
              font-bold leading-snug text-gray-800 hover:opacity-75"
               href="#" @click="(e) => sectionScroll(e)">
             <span class="ml-2 contagion navbar">Contagion</span>
            </a>
          </li>
          <li>
            <a class="px-3 py-2 flex items-center
             text-xs uppercase transition duration-200 ease-in-out hover:text-red-500
              font-bold leading-snug text-gray-800 hover:opacity-75"
               href="#" @click="(e) => sectionScroll(e)">
             <span class="ml-2 symptoms navbar">Symptoms</span>
            </a>
          </li>
          <li>
            <a class="px-3 py-2 flex items-center
             text-xs uppercase transition duration-200 ease-in-out hover:text-red-500
              font-bold leading-snug text-gray-800 hover:opacity-75"
               href="#" @click="(e) => sectionScroll(e)">
             <span class="ml-2 blog navbar">Blog</span>
            </a>
          </li>
          <li>
            <a class="px-3 py-2 flex items-center
             text-xs uppercase transition duration-200 ease-in-out hover:text-red-500
              font-bold leading-snug text-gray-800 hover:opacity-75"
               href="#" @click="(e) => sectionScroll(e)">
             <span class="ml-2 prevention navbar">Prevention</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="lg:flex-1 lg:flex justify-end hidden">
        <button class="p-2 text-red-600 border border-red-500
         rounded-3xl shadow-red">Contact Us</button>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  created() {
    window.addEventListener('scroll', (e) => this.toggleShadow(e));
  },
  data() {
    return {
      showMenu: false,
      showShadow: true,
    };
  },
  methods: {
    sectionScroll(e) {
      e.preventDefault();
      this.items.nodelist.forEach((node) => {
        if (node.getAttribute('id') === e.currentTarget.childNodes[0].innerHTML.toLowerCase()) {
          window.scrollTo({
            top: node.offsetTop - 120,
            behavior: 'smooth',
          });
        }
      });
    },
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
    toggleShadow(e) {
      if (e.currentTarget.scrollY > 0) {
        this.$refs.header.classList.add('shadow-md');
      } else {
        this.$refs.header.classList.remove('shadow-md');
      }
    },
  },
  computed: {
    ...mapState(['items']),
  },
};

</script>

<style scoped>
  .navbar.active {
    color: red;
  }
</style>
