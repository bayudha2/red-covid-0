<template>
<div class="w-9/12 mx-auto">
<div class="flex items-center justify-center">
    <button @click="show = !show">
      Toggle
    </button>
</div>
<transition name="fade">
   <div id="wrap" v-if="show">
     <a href="#" class="btn-slide">
       <span class="circle"><i class="fa fa-rocket"></i></span>
       <span class="title">Demo</span>
       <span class="title-hover">Click here</span>
     </a>
     <a href="#" class="btn-slide2">
       <span class="circle2"><i class="fa fa-download"></i></span>
       <span class="title2">Download</span>
       <span class="title-hover2">Click here</span>
     </a>
   </div>
</transition>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      show: true,
    };
  },
  created() {
    return this.getDataCovid();
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
#wrap {
  margin: 20px auto;
  text-align: center;
}

.btn-slide, .btn-slide2 {
  position: relative;
  display: inline-block;
  height: 55px;
  width: 200px;
  line-height: 50px;
  padding: 0px;
  border-radius: 50px;
  background: #fdfdfd;
  border: 2px solid #0099cc;
  margin: 10px;
  transition: .5s;
}

.btn-slide2 {
  border: 2px solid #efa666;
}

.btn-slide:hover {
  background-color: #0099cc;
}
.btn-slide2:hover {
  background-color: #efa666;
}

.btn-slide span.circle, .btn-slide2 span.circle2 {
  display: block;
  background-color: #0099cc;
  color: #fff;
  position: absolute;
  float: left;
  margin: 5px;
  line-height: 42px;
  height: 40px;
  width: 40px;
  top: 0;
  left: 0%;
  transition: .5s;
  border-radius: 50%;
}

.btn-slide2 span.circle2 {
  background-color: #efa666;
}

.btn-slide:hover span.circle, .btn-slide2:hover span.circle2 {
  left: 100%;
  margin-left: -45px;
  background-color: #fdfdfd;
  color: #0099cc;
}

.btn-slide2:hover span.circle2 {
  color: #efa666;
}

.btn-slide span.title, .btn-slide span.title-hover,
.btn-slide2 span.title2, .btn-slide2 span.title-hover2 {
  position: absolute;
  left: 90px;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  color: #30abd5;
  transition: .5s;
}

.btn-slide2 span.title2,
.btn-slide2 span.title-hover2 {
  color: #efa666;
  left: 70px;
}

.btn-slide span.title-hover, .btn-slide2 span.title-hover2 {
  left: 90px;
  opacity: 0;
  color: #fff;
}

.btn-slide:hover span.title, .btn-slide2:hover span.title2 {
  left: 40px;
  opacity: 0;
}

.btn-slide:hover span.title-hover, .btn-slide2:hover span.title-hover2 {
  opacity: 1;
  left: 40px;
}

.fa-rocket, .fa-download {
  margin-top: 10px;
}

/* Transition */
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
