<template>
  <div class="home">
    <Hero />
    <counterArea />
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
  mounted() {
    const sections = document.querySelectorAll('section');
    const navbars = document.querySelectorAll('.navbar');

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
