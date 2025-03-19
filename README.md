# wing-feedback

## Install

```bash
$ npm install wing-feedback
```

## Usage

```vue
<template>
  <FeedbackProvider>
    <button @click="submit">Submit</button>
  </FeedbackProvider>
</template>

<script setup lang="ts">
import { useFeedback } from 'wing-feedback';
const { showToast, showModal, showLoading, FeedbackProvider } = useFeedback();

async function submit() {
  const confirm = await showModal({ title: '提示', content: '是否进行提交操作?', showCancel: true });
  if (confirm) {
    const closeLoading = showLoading({ content: '提交中...' });
    setTimeout(() => {
      closeLoading();
      showToast({ content: '提交成功' });
    }, 1500);
  }
}
</script>
```
