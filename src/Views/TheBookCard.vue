<template>
  <div class="book">
    <the-book
        v-for="element of book"
        :key="element.id"
        :img="element.image_url"
        :title="element.title"
        :author = "element.author"
        :page_count = "Number(element.page_count)"
        :price="Number(element.price)"/>
  </div>
</template>

<script setup>
import TheBook from "@/components/TheBook.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getOneBook} from "@/api/api";

const route = useRoute()
  const book = ref([])
  const bookid = ref('')

  onMounted(async () => {
    bookid.value = route.params.id;
    book.value = await getOneBook(bookid.value)
    console.log(book.value[0])
})
</script>

<style scoped>

</style>