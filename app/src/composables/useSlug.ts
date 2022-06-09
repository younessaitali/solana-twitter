import { computed, Ref } from "vue";

export function useSlug(text: Ref<string>) {
  return computed(() => {
    return (text.value || "")
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  });
}
