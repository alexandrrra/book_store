<template>
  <div class="filter-books">
    <div class="filter">
      <the-filter @apply-filter="applyFilter"></the-filter>
    </div>
    <div class="catalog">
      <the-book v-for="book of books" :key="book.book_id" :book="book" variant="catalog"/>
    </div>
  </div>
</template>

<script setup>
import TheBook from "@/components/TheBook.vue";
import TheFilter from "@/components/TheFilter.vue";
import { onMounted, ref } from "vue";
import { getBooks } from "@/api/api";

const books = ref([]);

onMounted(async () => {
  books.value = await getBooks();
});

const applyFilter = async (filter) => {
  books.value = await getBooks(false, filter);
};

</script>

<style scoped>
.filter-books {
  display: flex;
  justify-content: space-around;
}

.filter {
  width: 20%;
  margin: 50px 0;
}

.catalog {
  width: 70%;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  align-items: center;
  justify-content: center;
}

</style>
