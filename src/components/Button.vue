<template>
  <button :class="classButton" :type="btntype">{{ innerText }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    innerText: String,
    classButton: String,
    btntype: String,
  },

};
</script>
