<template>
  <div class="container">
    <the-book v-if="book !== null" :book="book" variant="card"/>
    <span v-else>Что-то пошло не так</span>
  </div>
</template>

<script setup>
import TheBook from "@/components/TheBook.vue";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {getOneBook} from "@/api/api";

const route = useRoute();

const book = ref(null);

const loadBook = async () => {
  book.value = await getOneBook(route.params.id);
}

watch(() => route.params.id, loadBook, { immediate: true });

onMounted(loadBook);

</script>

<style scoped>

.container {
  padding: 50px 80px;
}

</style>