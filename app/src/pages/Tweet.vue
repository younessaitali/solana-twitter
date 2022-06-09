<script setup lang="ts">
import { Ref, ref, watchEffect } from "vue";
import { PublicKey } from "@solana/web3.js";
import { getTweet } from "../api";
import { useFromRoute } from "../composables";
import TweetCard from "@/components/TweetCard.vue";
import { RouteLocation } from "vue-router";

const tweetAddress: Ref<string> = ref("");
useFromRoute(
  (route: RouteLocation) => (tweetAddress.value = route.params.tweet as string)
);

const loading = ref(false);
const tweet: Ref<tweet | null> = ref(null);
watchEffect(async () => {
  try {
    loading.value = true;
    //@ts-ignore
    tweet.value = await getTweet(new PublicKey(tweetAddress.value));
  } catch (e) {
    tweet.value = null;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading" class="p-8 text-gray-500 text-center">Loading...</div>
  <div v-else-if="!tweet" class="p-8 text-gray-500 text-center">
    Tweet not found
  </div>
  <tweet-card v-else :tweet="tweet"></tweet-card>
</template>
