<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <img src="/svg/icon-search.png" alt="search">
      </div>
      <router-link to="/" class="header-logo"> Booklib </router-link>
      <div class="header-top-right">
        <div class="header-top-right-user">
          <router-link to="/profile">
            <img src="/svg/icon-user.png" alt="user">
          </router-link>
        </div>
        <div class="header-top-right-favorite">
          <router-link to="/favorite">
            <img src="/svg/icon-favorite.png" alt="favorite">
          </router-link>
        </div>
        <div class="header-top-right-cart">
          <router-link to="/cart">
            <img src="/svg/icon-cart.png" alt="cart">
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <router-link
          class="header-menu-link"
          :to="element.path"
          v-for="(element,i) of menu"
          :key="i">{{element.name}}</router-link>
    </div>
  </header>
</template>

<script setup>
/*import { ref } from 'vue'*/

const menu = [
  {
    name: 'Название',
    path: '/path'
  },
  {
    name: 'Название',
    path: '/path'
  },
  {
    name: 'Название',
    path: '/path'
  },
  {
    name: 'Название',
    path: '/path'
  }
]
</script>

<style scoped>

.header{
  height: 132px;
  background: #fff;
}

.header-top{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  height: 70px;
  align-items: center;
  border-bottom: 1px solid  rgba(0,0,0,.1);
  margin: 0 28px;
}

.header-logo{
  color: black;
  font-size: 24px;
  text-decoration-line: none;
  font-family: 'Clash Display', sans-serif;
  text-align: center;
}

.header-logo:hover{
  color: red;
}

.header-top-right{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-top-right-user,
.header-top-right-favorite,
.header-top-right-cart{
  margin-right:16px;
}

.header-menu{
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-menu-link{
  margin: 0 22px;
  color: gray;
  text-decoration: none;
}

.header-menu-link:hover{
  background: var(--red);
  color:white;
  font-weight: bold;
}
</style>