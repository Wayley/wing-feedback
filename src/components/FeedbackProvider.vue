<template>
  <div :class="$style.red">
    Hello
    <span class="green">{{ msg }}</span>
    {{ datetime }}
    <div>title: {{ props?.title }}</div>
    <div>content: {{ props?.content }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';

export interface ToastProps {
  title?: string;
  content?: string;
}
const msg: Ref<string> = ref('World');
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
