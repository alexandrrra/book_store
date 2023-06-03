<template>
  <div class="new-books">
    <the-book v-for="book of books" :key="book.book_id" :book="book"/>
  </div>
</template>

<script setup>

import {ref, onMounted} from 'vue'
import TheBook from "@/components/TheBook.vue";
import { getNewBooks } from '../api/api';

const books = ref([])

onMounted(async () => {
  books.value = await getNewBooks()
})

</script>

<style scoped>
.new-books{
  padding: 0 80px;
  margin: 50px 0;
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
</style>