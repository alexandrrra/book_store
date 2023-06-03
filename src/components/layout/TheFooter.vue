<template>
  <footer class="footer">
    <div class="footer_container__logo">
      <router-link to="/" class="footer-container__logo-name">Буклиб</router-link>
      <span>Интернет-магазин книг</span>
    </div>
<!--    <div class="footer-content">-->
<!--      <div class="footer-top">-->
<!--        <div class="footer-menu">-->
<!--          <div class="footer-menu-column">-->
<!--            <span class="footer-menu-title">Меню</span>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--          </div>-->
<!--          <div class="footer-menu-column">-->
<!--            <span class="footer-menu-title">Категории</span>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--          </div>-->
<!--          <div class="footer-menu-column">-->
<!--            <span class="footer-menu-title">О нас</span>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--            <router-link to="/" class="footer-menu-link">Новинки</router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="footer-bottom">-->
<!--        <span class="footer-bottom-name">-->
<!--          Booklib-->
<!--        </span>-->
<!--      </div>-->
<!--    </div>-->
  </footer>
</template>

<script>

</script>

<style scoped>
.footer{
  background-color: var(--blue);
}

.footer_container__logo{
  display: flex;
  flex-direction: column;
  align-items:center;
}

.footer-container__logo-name {
  font-family: 'Playfair', serif;
  color:var(--white);
  font-size: 40px;
  font-weight:bold;
}

.footer-container__logo-name:hover{
  color:var(--red);
}

.footer_container__logo span{
  font-family: 'Playfair', serif;
  color:var(--white);
}

.footer-content{
  padding: 58px 82px 25px 82px;
}

.footer-top{
  /*display: grid;
  grid-template-columns: 540px 1fr;
  column-gap: 110px;*/
  border-bottom: 1px solid white;
}

.footer-menu{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

.footer-menu-title{
  display: block;
  margin-bottom: 12px;
}

.footer-menu-column{
  justify-content: space-between;
}

.footer-menu-link{
  display: block;
  color:white;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 12px;
}
</style>