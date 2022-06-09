<script setup lang="ts">
import { Ref, ref, watchEffect } from "vue";
import { fetchTweets, authorFilter } from "../api";
import TweetForm from "@/components/TweetForm.vue";
import TweetList from "@/components/TweetList.vue";
import { useWorkspace } from "../composables";

const tweets: Ref<tweet[]> = ref([]);
const loading = ref(true);
const { wallet } = useWorkspace();

watchEffect(() => {
  if (!wallet.value) return;
  fetchTweets([authorFilter(wallet.value.publicKey.toBase58())])
    .then((fetchedTweets) => (tweets.value = fetchedTweets))
    .finally(() => (loading.value = false));
});

const addTweet = (tweet: tweet) => tweets.value.push(tweet);
</script>

<template>
  <!-- TODO: Check connected wallet -->
  <div v-if="wallet" class="border-b px-8 py-4 bg-gray-50">
    {{ wallet.publicKey.toBase58() }}
  </div>
  <tweet-form @added="addTweet"></tweet-form>
  <tweet-list :tweets="tweets" :loading="loading"></tweet-list>
</template>
