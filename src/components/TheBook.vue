<template>
  <div class="book">
    <router-link to="/">
      <img :src="img" :alt="title" class="book-image">
    </router-link>
    <router-link to="/" class="book-name">{{title}}</router-link>
    <span class="book-author">{{author}}</span>
    <span class="book-price">{{price}} ₽</span>
    <span class="book-page">{{page_count}}</span>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author:{
      type: String,
      required:true
    },
    page_count:{
      type: Number,
      required:true
    },
    price: {
      type: Number,
      required: true
    }
  });
</script>

<style scoped>

.book-image{
  display: block;
  margin-bottom: 24px;
}

.book-name{
  display: block;
  color: black;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
  text-decoration: none;
}

.book-price{
  display: block;
  font-size: 18px;
  color: black;
}
</style>