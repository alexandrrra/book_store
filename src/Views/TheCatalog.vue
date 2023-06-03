<template>
  <h1>Каталог</h1>

  <div class="filter-books">
    <div class="filter">
      <the-filter @apply-filters="applyFilters"></the-filter>
    </div>
    <div class="catalog">
      <div class="book" v-for="book of filteredBooks" :key="book.id">
        <img :src="book.image_url" :alt="book.title" class="book-img" />
        <div class="book-info">
          <h3 class="book-title">{{ book.title }}</h3>
          <p class="book-author">{{ book.author }}</p>
          <p class="book-price">{{ book.price }} ₽</p>
          <div class="button-icon">
            <button class="buy-button">Купить</button>
            <font-awesome-icon class="heart" icon="heart" />
          </div>
        </div>
      </div>
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
  justify-content: space-between;
}

.book {
  width: 23%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-img {
  width: 80%;
  height: auto;
  object-fit: cover;
}

.book-title {
  font-size: 16px;
  font-weight: bold;
}

.book-author {
  font-size: 14px;
}

.book-price {
  font-size: 18px;
  font-weight: bold;
}

.buy-button {
  padding: 7px 12px;
  background-color: #374785;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 5px;
}

.button-icon{
  display: flex;
  justify-content: space-around;
}

.heart{
  font-size: 20px;
  text-align: right;
  color: #F76C6C;
}


</style>
