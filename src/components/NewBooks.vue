<template>
  <div class="new-books">
    <the-book
        v-for="book of books"
        :key="book.id"
        :img="book.image_path"
        :title="book.title"
        :price="Number(book.price)"/>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import TheBook from "@/components/TheBook.vue";
import { getBooks } from '../api/api';

const books = ref([])

onMounted(async () => {
  books.value = await getBooks()
})
</script>

<style scoped>
.new-books{
  padding: 0 80px;
  margin-top: 50px;
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
</style>