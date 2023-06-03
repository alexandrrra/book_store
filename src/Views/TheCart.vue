<template>
  <div class="container">
    <LoginDialog @auth="loadProducts()"/>
    <Dialog :visible="message!==''" modal :closable="false" header="Сообщение">
        {{ message }}
        <template #footer>
            <div class="controls">
                <div class="controls-row">
                    <Button label="OK" @click="message=''" style="width: 100%"/>
                </div>
            </div>
        </template>
    </Dialog>
    <div v-if="products.length > 0" class="books">
      <the-book v-for="book of products" :key="book.book_id" :book="book" variant="cart" @remove="onRemove(book.book_id)"/>
    </div>
    <div v-else class="books">
      <h1>Корзина пуста</h1>
    </div>
  </div>
</template>

<script setup>

import LoginDialog from '@/components/LoginDialog.vue';
import TheBook from "@/components/TheBook.vue";
import { ref, onMounted } from 'vue'
import { getProducts } from '../api/api';

const message = ref("");
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
  padding: 0 80px;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  align-items: center;
  justify-content: center;
}

</style>
