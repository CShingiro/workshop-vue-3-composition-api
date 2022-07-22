import { onMounted, onUnmounted } from "vue";

export function useGlobalEvent(e, cb) {
  onMounted(() => window.addEventListener(e, cb));
  onUnmounted(() => window.removeEventListener(e, cb));
}
