import { readonly, Ref, ref } from 'vue';
import FeedbackProviderComp from './components/FeedbackProvider.vue';
export const FeedbackProvider = FeedbackProviderComp;

export interface ToastProps {
  title?: string;
  content?: string;
}

const feedback: Ref<{ type: 1 | 2 }> = ref({ type: 1 });
export function useFeedBack() {
  return {
    feedback: readonly(feedback),
  };
}

export default useFeedBack;
