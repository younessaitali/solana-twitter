import { computed, Ref, unref } from "vue";

export function useCountCharacterLimit(
  text: Ref<string> | string,
  limit: Ref<number> | number
) {
  return computed(() => unref(limit) - unref(text).length);
}
