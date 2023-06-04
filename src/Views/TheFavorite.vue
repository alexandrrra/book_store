<template>
  <div class="container">
    <LoginDialog @auth="loadFavorite()"/>
    <MessageDialog :message="message" @close="message=''"/>
    <div v-if="favorites.length > 0" class="books">
      <the-book v-for="book of favorites" :key="book.book_id" :book="book" variant="favorite" @remove="onRemove(book.book_id)"/>
    </div>
    <div v-else class="books">
      <h1>Спиок избранного пуст</h1>
    </div>
  </div>
</template>

<script setup>

import LoginDialog from '@/components/LoginDialog.vue';
import TheBook from "@/components/TheBook.vue";
import { ref, onMounted } from 'vue'
import { getFavorites } from '../api/api';

const message = ref("");
const favorites = ref([]);

const loadFavorites = async () => {
  const newFavorites = await getFavorites();
  if (newFavorites === null) {
      return;
  }
  favorites.value = [...newFavorites];
};

onMounted(loadFavorites);

const onRemove = id => {
  favorites.value = favorites.value.filter(x => x.book_id !== id);
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
