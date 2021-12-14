<template>
  <Header />
  <div id="nav" class="hidden">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
<footerVue />
</template>
<script>
import Header from '@/layouts/navbar.vue';
import footerVue from './layouts/footer.vue';

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

export default {
  components: {
    Header,
    footerVue,

  },
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
