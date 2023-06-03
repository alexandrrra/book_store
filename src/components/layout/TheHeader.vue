<template>
  <header class="header-container">
    <div class="header_container__logo">
      <router-link to="/" class="header-container__logo-name">Буклиб</router-link>
      <span>Интернет-магазин книг</span>
    </div>

    <div class="header-container__search-catalog">
      <the-button to="/catalog">
          <router-link to="/catalog" class="catalog_link">Каталог</router-link>
        <font-awesome-icon icon="book" class="icon-book"/>
      </the-button>
      <div class="search-form">
        <form>
          <input type="text" placeholder="Я ищу...">
          <the-button>
            <font-awesome-icon icon="search"/>
          </the-button>
        </form>
      </div>
    </div>

    <div class="header-right">
      <router-link to="/profile" class="header-right-link">
        <div class="header-right-item">
          <font-awesome-icon icon="user" class="icon hover"/>
          <span>{{ store.state.login || "Войти" }}</span>
        </div>
      </router-link>
      <router-link to="/favorite" class="header-right-link">
        <div class="header-right-item">
          <font-awesome-icon icon="heart" class="icon hover"/>
          <span>Избранное</span>
        </div>
      </router-link>
      <router-link to="/cart" class="header-right-link">
        <div class="header-right-item">
          <font-awesome-icon icon="shopping-cart" class="icon hover"/>
          <span>Корзина</span>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script setup>

import { useStore } from 'vuex'
import TheButton from "@/components/UI/TheButton.vue";

// const menu = [
//   {
//     name: 'Каталог',
//     path: '/catalog'
//   },
//   {
//     name: 'Название',
//     path: '/path'
//   },
//   {
//     name: 'Название',
//     path: '/path'
//   },
//   {
//     name: 'Название',
//     path: '/path'
//   }
// ]

const store = useStore();

</script>

<style scoped>

.header-container {
  /*position:fixed;*/
  background:white;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-bottom:1px solid var(--black);
}

.header_container__logo{
  display: flex;
  flex-direction: column;
  align-items:center;
}

.header-container__logo-name {
  font-family: 'Playfair', serif;
  color:var(--black);
  font-size: 40px;
  font-weight:bold;
}

.header-container__logo-name:hover{
  color:var(--red);
}

.header_container__logo span{
  font-family: 'Playfair', serif;
}

.header-container__search-catalog{
  display:flex;
}

.catalog_link{
  color:var(--white);
  font-weight:bold;
}

.search-form{
  margin-left:20px;
}

.search-form input{
  height:40px;
  border:1px solid var(--blue);
  border-radius:5px;
  padding:10px;
}

.icon-book{
  color:var(--white);
  padding-left:5px;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 0 16px;
}

.header-right-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  padding: 8px;
  color: #2f2e2e;
  width: 24px;
  height: 24px;
}

.icon:hover{
  color:var(--red);
}

.header-right-item span {
  font-size: 14px;
  color: black;
}

</style>
