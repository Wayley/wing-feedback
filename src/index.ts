import { readonly } from 'vue';
import FeedbackProvider, { feedback, type ToastProps } from './components/FeedbackProvider.vue';

export function useFeedBack() {
  return {
    FeedbackProvider,
    feedback: readonly(feedback),
    showToast: (o?: ToastProps) => (feedback.value = { type: 1 }),
    showModal: () => (feedback.value = { type: 2 }),
  };
}

export default useFeedBack;
