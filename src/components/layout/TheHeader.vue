<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <form>
          <input type="text" placeholder="Поиск...">
          <button type="submit" class="search-button"><font-awesome-icon icon="search" /></button>
        </form>
      </div>
      <router-link to="/" class="header-logo-link hover">Буклиб</router-link>
      <div class="header-top-right">
        <router-link to="/profile" class="header-top-right-link">
          <div class="header-top-right-item">
            <font-awesome-icon icon="user" class="icon hover"/>
            <span>{{ store.state.login || "Войти" }}</span>
          </div>
        </router-link>
        <router-link to="/favorite" class="header-top-right-link">
          <div class="header-top-right-item">
            <font-awesome-icon icon="heart" class="icon hover"/>
            <span>Избранное</span>
          </div>
        </router-link>
        <router-link to="/cart" class="header-top-right-link">
          <div class="header-top-right-item">
            <font-awesome-icon icon="shopping-cart" class="icon hover"/>
            <span>Корзина</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="header-menu">
      <router-link
          class="header-menu-link hover"
          :to="element.path"
          v-for="(element, i) of menu"
          :key="i"
      >
        {{element.name}}
      </router-link>
    </div>
  </header>
</template>

<script setup>

import { useStore } from 'vuex'

const menu = [
  {
    name: 'Каталог',
    path: '/catalog'
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

const store = useStore();

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap');

.header {
  height: 132px;
  background: #fff;
}

.header-top {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70px;
  align-items: center;
}

.header-top-search form {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.header-top-search input[type="text"] {
  width: 93%;
  height: 35px;
  padding: 5px;
  border: 1px gray solid;
  border-radius: 5px;
}

.header-top-search button[type="submit"] {
  background: #374785;
  color: white;
  width: 35px;
  height: 35px;
  border: 1px gray solid;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  right: 0px; /* Изменить значение, если нужно больше отступа */
  top: 50%;
  transform: translateY(-50%);
}

.header-logo-link {
  color: black;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
}

.hover:hover {
  color: #F76C6C;
}

.header-top-right-link {
  text-decoration: none;
}

.header-top-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 0 16px;
}

.header-top-right-item {
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

.header-top-right-item span {
  font-size: 12px;
  color: black;
}

.header-menu {
  background-color: #374785;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-menu-link {
  font-weight: bold;
  margin: 0 22px;
  color: white;
  text-decoration: none;
}
</style>
