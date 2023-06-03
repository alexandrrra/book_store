<template>
  <MessageDialog :message="message" @close="message=''"/>
  <Toast />
  <div class="book">
    <router-link :to="`/books/${book.book_id}`">
      <img :src="book.image_url" :alt="title" class="book-image">
    </router-link>
    <router-link :to="`/books/${book.book_id}`" class="book-name">{{book.title}}</router-link>
    <span class="book-author">{{book.author}}</span>
    <span class="book-price">{{book.price}} ₽</span>
    <div class="controls">
      <template v-if="variant === 'favorite'">
        <div class="controls-row">
          <Button label="Купить" text @click="onAddProductClick(book.book_id)"/>
          <Button text rounded @click="deleteFavoriteClick(book.book_id)">
            <font-awesome-icon icon="trash-can"/>
          </Button>
        </div>
      </template>
      <template v-else-if="variant === 'cart'">
        <div class="controls-row">
          <Button text rounded @click="setQuantityClick(book.book_id, quantity > 1 ? quantity - 1 : quantity)">
            <font-awesome-icon icon="minus"/>
          </Button>
          {{ quantity }}
          <Button text rounded @click="setQuantityClick(book.book_id, quantity + 1)">
            <font-awesome-icon icon="plus"/>
          </Button>
        </div>
        <div class="controls-row">
          <Button text rounded @click="deleteProductClick(book.book_id)">
            <font-awesome-icon icon="trash-can"/>
          </Button>
          <Button text rounded @click="addFavoriteClick(book.book_id)">
            <font-awesome-icon icon="heart" class="heart"/>
          </Button>
        </div>
      </template>
      <template v-else>
        <div class="controls-row">
          <Button label="Купить" text @click="onAddProductClick(book.book_id)"/>
          <Button text rounded @click="addFavoriteClick(book.book_id)">
            <font-awesome-icon icon="heart" class="heart"/>
          </Button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>

import MessageDialog from '@/components/MessageDialog.vue';
import { ref, defineProps } from 'vue';
import { addProduct, updateProduct, deleteProduct, addFavorite, deleteFavorite } from '../api/api';
import { useToast } from 'primevue/usetoast';

const emit = defineEmits(['remove']);
const toast = useToast();

const message = ref("");

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    required: true
  }
});

const quantity = ref(props.book.quantity);

const onAddProductClick = async book_id => {
  const res = await addProduct(book_id);
  if (!res) {
    message.value = "Что-то пошло не так";
    return;
  }
  toast.add({ severity: 'info', detail: 'Добавлено в корзину', life: 3000 });
};

const setQuantityClick = async (book_id, newQuantity) => {
  const res = await updateProduct(book_id, newQuantity);
  if (!res) {
    message.value = "Что-то пошло не так";
    return;
  }
  quantity.value = newQuantity;
}

const deleteProductClick = async book_id => {
  const res = await deleteProduct(book_id);
  if (!res) {
    message.value = "Что-то пошло не так";
    return;
  }
  emit("remove");
};

const addFavoriteClick = async book_id => {
  const res = await addFavorite(book_id);
  if (!res) {
    message.value = "Что-то пошло не так";
    return;
  }
  toast.add({ severity: 'info', detail: 'Добавлено в избранное', life: 3000 });
};

const deleteFavoriteClick = async book_id => {
  const res = await deleteFavorite(book_id);
  if (!res) {
    message.value = "Что-то пошло не так";
    return;
  }
  emit("remove");
};

</script>

<style scoped>

.book {
  width: 20%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-image{
  display: block;
  margin-bottom: 24px;
}

.book-name{
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  margin-bottom: 8px;
  text-decoration: none;
}

.book-author{
  font-size: 16px;
}

.book-price{
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
}

.controls-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.heart {
  color: #F76C6C;
  width: 16px;
  height: 16px;
}

</style>