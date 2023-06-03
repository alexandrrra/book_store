<template>
  <h1>Каталог</h1>

  <div class="filter-books">
    <div class="filter">
      <the-filter @apply-filters="applyFilters"></the-filter>
    </div>
    <div class="catalog">
      <the-book v-for="book of filteredBooks" :key="book.book_id" :book="book"/>
    </div>
  </div>
</template>

<script setup>
import TheBook from "@/components/TheBook.vue";
import TheFilter from "@/components/TheFilter.vue";
import { onMounted, ref } from "vue";
import { getBooks } from "@/api/api";
import {ROOT_URL} from "@/api/api";

const books = ref([]);
const filteredBooks = ref([]);

onMounted(async () => {
  books.value = await getBooks();
  filteredBooks.value = books.value; // Инициализация списка фильтрованных книг
  //books.value[0].image_url = ROOT_URL + '/' + books.value[0].image_url;
  console.log(books.value);
});

const applyFilters = (filters) => {
  // Применение фильтров
  filteredBooks.value = books.value.filter((book) => {
    const priceCondition =
        (filters.minPrice === null || book.price >= filters.minPrice) &&
        (filters.maxPrice === null || book.price <= filters.maxPrice);

    const authorCondition =
        filters.selectedAuthors.length === 0 ||
        filters.selectedAuthors.includes(book.author); // Изменение на book.author.id

    return priceCondition && authorCondition;
  });
};

</script>

<style scoped>
.filter-books {
  display: flex;
  justify-content: space-around;
}

.filter {
  width: 20%;
}

.catalog {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  align-items: center;
  justify-content: center;
}

</style>
