<template>
   <div class="post">
    <div v-if="items.loading" class="loading">
      Loading...
    </div>

    <div v-if="items.error" class="error">
      {{ error }}
    </div>
    <div  class="content">
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
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
