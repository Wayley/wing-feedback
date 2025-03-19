<template>
  <Mask class="wing-feedback-flex">
    <div class="wing-feedback-toast">
      <icon v-if="type" :type="type == 'error' ? 'cancel' : type" :size="22" />
      <div>{{ content }}</div>
    </div>
  </Mask>
</template>

<script setup lang="ts">
import Mask from './Mask.vue';

export type ToastProps = {
  /**提示内容 */
  content?: string;

  /**提示自动关闭延迟时间, 单位: ms, 默认值: 1500 */
  duration?: number;

  /**提示图标类型: 默认: 不显示 */
  type?: 'success' | 'info' | 'warn' | 'error';
};

defineProps<ToastProps>();
</script>
