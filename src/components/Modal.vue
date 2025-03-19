<template>
  <Mask class="wing-feedback-flex">
    <div class="wing-feedback-modal">
      <div class="wing-feedback-modal-title">
        <template v-if="!$slots.title">{{ title }}</template>
        <slot name="title" />
      </div>
      <div class="wing-feedback-modal-content">
        <template v-if="!$slots.content">{{ content }}</template>
        <slot name="content" />
      </div>
      <div class="wing-feedback-modal-btns">
        <div class="wing-feedback-modal-btn" v-if="showCancel" @click="emits('cancel')">取消</div>
        <div class="wing-feedback-modal-btn wing-feedback-actice-text" @click="emits('confirm')">确认</div>
      </div>
    </div>
  </Mask>
</template>

<script setup lang="ts">
import Mask from './Mask.vue';

export type ModalProps = {
  /**提示标题, 默认值: `提示` */
  title?: string;

  /**提示内容 */
  content?: string;

  /**是否展示`取消`按钮, 默认值: false */
  showCancel?: boolean;
};

defineProps<ModalProps>();
const emits = defineEmits<{
  confirm: [];
  cancel: [];
}>();
</script>
