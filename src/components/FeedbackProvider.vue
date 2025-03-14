<template>
  <div :class="$style.red">
    Hello
    <span class="green">{{ msg }}</span>
    {{ datetime }}
    <div>title: {{ props?.title }}</div>
    <div>content: {{ props?.content }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { ToastProps } from '..';

const msg: Ref<string> = ref('World 11');
const datetime: Ref<number> = ref(new Date().getTime());

const props = defineProps<ToastProps>();

onMounted(() => {
  setInterval(() => {
    datetime.value = new Date().getTime();
  }, 1000);
});
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
