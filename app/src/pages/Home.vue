<script setup lang="ts">
import { ref, reactive } from "vue";
import { fetchTweets } from "../api";
import TweetForm from "@/components/TweetForm.vue";
import TweetList from "@/components/TweetList.vue";

const tweets = reactive<tweet[]>([]);
const loading = ref(true);
fetchTweets()
  .then((fetchedTweets) => {
    tweets.push(...fetchedTweets);
  })
  .finally(() => (loading.value = false));

const addTweet = (tweet: tweet) => tweets.push(tweet);
</script>

<template>
  <h1 class="text-3xl">hello</h1>
  <tweet-form @added="addTweet"></tweet-form>
  <tweet-list :tweets="tweets" :loading="loading"></tweet-list>
</template>
