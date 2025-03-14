<template>
  <div :class="$style.red">
    Hello
    <span class="green">{{ msg }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('World');
</script>

<style module>
.red {
  color: red;
}
</style>

<style scoped>
.green {
  color: green;
}
</style>
