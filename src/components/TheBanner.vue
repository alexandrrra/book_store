<template>
  <div class="banner">
    <div class="books-slider">
      <swiper
          :breakpoints="{
        '0': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 2,
        },
        '1024': {
          slidesPerView: 3,
        },
      }"
          :modules="books"
          class="mySwiper"
          :loop="true"
          :centeredSlides="true"
          :autoplay="{delay:1000, disableOnInteraction:false}"
      >
<!--        <swiper-slide><img src="@/assets/img/book1.jpg" alt=""></swiper-slide>-->
<!--        <swiper-slide><img src="@/assets/img/book1.jpg" alt=""></swiper-slide>-->
<!--        <swiper-slide><img src="@/assets/img/book1.jpg" alt=""></swiper-slide>-->
      </swiper>
    </div>
    <div class="banner-shelf">

<!--        <h2 class="banner-info-title">Книжная удача, только сегодня, только сейчас</h2>-->
<!--        <span class="banner-info-description">Книжные новинки 2023 года</span>-->
      <img src="@/assets/img/shelf.png" alt="">
    </div>
  </div>
</template>

<script setup>
  import TheButton from '@/components/UI/TheButton.vue';
  import TheBook from "@/components/TheBook.vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import {ref} from "vue";

  const books = ref([]);
</script>

<style scoped>
.banner{
  background-image: url("@/assets/img/background.jpg");
  position: relative;
  height: 700px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
}

.swiper-slide img {
  width: 60%;
}

.banner-shelf{
  width:55%;
  margin-top: 400px;
}

</style>