<template>
  <div class="container">
    <div class="books">
      <div v-if="store.state.login === null">
        <h1>Вход не выполнен</h1>
      </div>
      <template v-else>
        <template v-if="products.length > 0">
          <the-book v-for="book of products" :key="book.book_id" :book="book" variant="cart" @remove="onRemove(book.book_id)"/>
        </template>
        <h1 v-else>Корзина пуста</h1>
      </template>
    </div>
  </div>
</template>

<script setup>

import TheBook from "@/components/TheBook.vue";
import { ref, onMounted } from 'vue'
import { getProducts } from '../api/api';
import { useStore } from 'vuex';

const store = useStore();
const products = ref([]);

const loadProducts = async () => {
  const newProducts = await getProducts();
  if (newProducts === null) {
      return;
  }
  products.value = [...newProducts];
};

onMounted(loadProducts);

const onRemove = id => {
  products.value = products.value.filter(x => x.book_id !== id);
};

</script>

<style scoped>

.container {
  display: flex;
}

.books{
  width: 100%;
  padding: 0 80px;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  align-items: center;
  justify-content: center;
}

</style>
