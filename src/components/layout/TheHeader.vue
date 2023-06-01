<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <form>
          <input type="text" placeholder="Поиск...">
          <button type="submit" class="search-button"><font-awesome-icon icon="search" /></button>
        </form>
      </div>
      <router-link to="/" class="header-logo"> Буклиб </router-link>
      <div class="header-top-right">
        <div class="header-top-right-item">
          <router-link to="/profile">
            <div class="icon-wrapper">
              <font-awesome-icon icon="user" />
            </div>
            <span>Войти</span>
          </router-link>
        </div>
        <div class="header-top-right-item">
          <router-link to="/favorite">
            <div class="icon-wrapper">
              <font-awesome-icon icon="heart" />
            </div>
            <span>Избранное</span>
          </router-link>
        </div>
        <div class="header-top-right-item">
          <router-link to="/cart">
            <div class="icon-wrapper">
              <font-awesome-icon icon="shopping-cart" />
            </div>
            <span>Корзина</span>
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
    name: 'Каталог',
    path: '/Catalog'
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


.header-logo {
  color: black;
  font-size: 36px;
  text-decoration: none;
  text-align: center;
}

.header-logo:hover {
  color: #F76C6C;
}

.header-top-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-top-right-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
}

.header-top-right-item .icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  color: #2f2e2e;
  font-size: 20px;
}

.header-top-right-item .icon-wrapper:hover{
  color: #F76C6C;
}

.header-top-right-item span {
  font-size: 12px;
  color: black;
  text-decoration: none;
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

.header-menu-link:hover {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

</style>
