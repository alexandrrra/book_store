<template>
  <div class="banner">
    <div class="banner-info">
      <div class="banner-info-text">
        <h2 class="banner-info-title">Книжная удача, только сегодня, только сейчас</h2>
        <span class="banner-info-description">Книжные новинки 2023 года</span>
      </div>
      <the-button type="link" to="/">
        Посмотреть
      </the-button>
    </div>
  </div>
</template>

<script setup>
  import TheButton from '@/components/UI/TheButton.vue';
</script>

<style scoped>
.banner{
  background-image: url("@/assets/img/banner-background.jpg");
  height: 704px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
}

.banner-info{
  background: white;
  max-width: 630px;
  padding: 50px 55px;
  height: 444px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

</style>