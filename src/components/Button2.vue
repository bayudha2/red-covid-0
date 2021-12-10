<template>
  <button :class="classButton" :type="btntype">
      <font-awesome-icon v-if="icons === 'calendar'"
       :icon="['fas', 'calendar-alt']" class="mr-1 hover:text-white" />
      <font-awesome-icon v-if="icons === 'phone'"
       :icon="['fas', 'phone-alt']" class="mr-1 hover:text-white" />
      {{ innerText }}</button>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarAlt, faPhoneAlt);

export default {
  name: 'Button2',
  props: {
    icons: String,
    innerText: String,
    classButton: String,
    btntype: String,
  },

};
</script>
