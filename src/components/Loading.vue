<template>
  <Mask class="wing-feedback-flex">
    <div class="wing-feedback-loading">
      <div class="wing-feedback-loading-icon wing-feedback-loading-spinning" />
      <div>{{ content }}</div>
    </div>
  </Mask>
</template>

<script setup lang="ts">
import Mask from './Mask.vue';

export type LoadingProps = {
  /**提示内容 */
  content?: string;
};

defineProps<LoadingProps>();
</script>
