<template>
  <div class="banner">
    <div class="banner-shelf">
      <Carousel :value="books" :numVisible="3" :numScroll="1" :showNavigators="false" :showIndicators="false" circular :autoplayInterval="3000">
          <template #item="slotProps">
              <img :src="slotProps.data.image_url" :alt="slotProps.data.title" @click="router.push(`/books/${slotProps.data.book_id}`)" class="image"/>
          </template>
      </Carousel>
      <img src="@/assets/img/shelf.png" alt="">
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted} from "vue";
  import { getBestsellers } from '../api/api';
  import { useRouter } from "vue-router";

  const router = useRouter();

  const books = ref([]);

  onMounted(async () => {
    const newBooks = await getBestsellers();
    if (newBooks === null) {
        return;
    }
    books.value = newBooks;
  });
</script>

<style scoped>
.banner{
  background-image: url("@/assets/img/background.jpg");
  position: relative;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
}
.banner-shelf{
  width:55%;
  margin-top: 250px;
}

.image {
  padding: 0 4px;
}

</style>