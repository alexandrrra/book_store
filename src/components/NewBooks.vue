<template>
  <div class="new-books">
    <the-book v-for="book of books" :key="book.book_id" :book="book" variant="new"/>
  </div>
</template>

<script setup>

import {ref, onMounted} from 'vue'
import TheBook from "@/components/TheBook.vue";
import { getBooks } from '../api/api';

const books = ref([])

onMounted(async () => {
  books.value = await getBooks(true)
})

</script>

<style scoped>
.new-books{
  padding: 0 80px;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  align-items: center;
  justify-content: center;
}
</style>