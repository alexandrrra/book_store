<template>
  Это страница с каталогом

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
import TheBook from "@/components/TheBook.vue";
import {onMounted, ref} from "vue";
import {getBooks} from "@/api/api";

  const books = ref([])

  onMounted(async () => {
    books.value = await getBooks()
  })
</script>

<style scoped>

</style>