<template>
  <div class="wing-feedback-mask" :style="{ backgroundColor }" @touchmove.stop.prevent="() => {}">
    <slot />
  </div>
</template>
<script setup lang="ts">
export type MaskProps = {
  /**遮罩层背景颜色, 默认: rgba(0, 0, 0, 0.35) */
  backgroundColor?: string;
};
const { backgroundColor } = defineProps<MaskProps>();
</script>
