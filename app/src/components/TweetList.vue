<script setup lang="ts">
import { computed, PropType, toRefs } from "vue";
import TweetCard from "@/components/TweetCard.vue";

const props = defineProps({
  tweets: Array as PropType<tweet[]>,
  loading: Boolean,
});

const { tweets, loading } = toRefs(props);
const orderedTweets = computed(() => {
  return tweets?.value?.slice().sort((a, b) => b.timestamp - a.timestamp);
});
</script>

<template>
  <div v-if="loading" class="p-8 text-gray-500 text-center">Loading...</div>
  <div v-else class="divide-y">
    <tweet-card
      v-for="(tweet, key) in orderedTweets"
      :key="key"
      :tweet="tweet"
    ></tweet-card>
  </div>
</template>
