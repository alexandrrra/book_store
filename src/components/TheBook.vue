<template>
  <div class="book">
    <router-link :to="`/books/${book.book_id}`">
      <img :src="book.image_url" :alt="title" class="book-image">
    </router-link>
    <router-link :to="`/books/${book.book_id}`" class="book-name">{{book.title}}</router-link>
    <span class="book-author">{{book.author}}</span>
    <span class="book-price">{{book.price}} ₽</span>
    <span class="book-page">{{book.page_count}} с</span>

  </div>
</template>

<script setup>

import { defineProps } from 'vue';

defineProps({
  book: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
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
  font-weight: bold;
  line-height: 28px;
  margin-bottom: 8px;
  text-decoration: none;
}

.book-author{
  font-size: 16px;
}

.book-price{
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: black;
}
</style>