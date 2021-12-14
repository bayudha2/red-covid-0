<template>
  <div class="home">
  <transition name="fade" mode="out-in">
    <div v-show="showComp">
      <Hero />
      <counterArea />
    </div>
  </transition>
    <AboutArea />
    <SymptomsArea />
    <MapArea />
    <ContagionArea />
    <PreventionArea />
    <BlogArea />
    <CtaArea />
  </div>
</template>

<script>

import { mapMutations } from 'vuex';

// @ is an alias to /src
import Hero from '@/layouts/Hero.vue';
import counterArea from '../layouts/counterArea.vue';
import AboutArea from '../layouts/AboutArea.vue';
import SymptomsArea from '../layouts/SymptomsArea.vue';
import MapArea from '../layouts/MapArea.vue';
import ContagionArea from '../layouts/ContagionArea.vue';
import PreventionArea from '../layouts/PreventionArea.vue';
import BlogArea from '../layouts/BlogArea.vue';
import CtaArea from '../layouts/CtaArea.vue';

export default {
  name: 'Home',
  data() {
    return {
      showComp: false,
    };
  },
  components: {
    Hero,
    CtaArea,
    BlogArea,
    PreventionArea,
    ContagionArea,
    MapArea,
    SymptomsArea,
    AboutArea,
    counterArea,
  },
  methods: {
    ...mapMutations(['addNodeToStore']),
  },
  mounted() {
    setTimeout(() => {
      this.showComp = true;
    }, 500);
    const sections = document.querySelectorAll('section');
    const navbars = document.querySelectorAll('.navbar');

    this.addNodeToStore(sections);

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // eslint-disable-next-line no-restricted-globals
        if (pageYOffset >= sectionTop - sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navbars.forEach((nav) => {
        nav.classList.remove('active');
        if (nav.classList.contains(current)) {
          nav.classList.add('active');
        }
      });
    });
  },
};
</script>

<style scoped>
/* Transition */
.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(80px);
  opacity: 0;
}
</style>
