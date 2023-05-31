<template>
  <div class="container">
    <div class="profile-navigation">
      <div class="profile-navigation-container">
        <div class="navigation-item" @click="updateTitle('Профиль')">
          <font-awesome-icon icon="user" />
          <span>Профиль</span>
        </div>
        <div class="navigation-item" @click="updateTitle('Личные данные')">
          <font-awesome-icon icon="heart" />
          <span>Личные данные</span>
        </div>
        <div class="navigation-item" @click="updateTitle('Заказы')">
          <font-awesome-icon icon="heart" />
          <span>Заказы</span>
        </div>
        <div class="navigation-item" @click="updateTitle('Избранное')">
          <font-awesome-icon icon="heart" />
          <span>Избранное</span>
        </div>
        <div class="navigation-item" @click="updateTitle('Выйти')">
          <font-awesome-icon icon="heart" class="SignOut"/>
          <span>Выйти</span>
        </div>
      </div>
    </div>
    <div class="info">
      <h1>{{ pageTitle }}</h1>
      <div class="info-container">
        efa
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Профиль'
    };
  },
  methods: {
    updateTitle(title) {
      this.pageTitle = title;
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

.profile-navigation {
  margin-top: 50px;
  width: 30%;
}

.profile-navigation-container {
  width: 60%;
  border: 1px solid #A8D0E6;
  border-radius: 5px;
  margin: 20px auto;
}

.navigation-item {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 10px 0 10px 10px;
}

.navigation-item span {
  padding-left: 10px;
}

.navigation-item:hover {
  font-weight: bold;
  background-color: rgba(168, 208, 230, 0.96);
}

.SignOut {
  color: #F76C6C;
}

.info {
  width: 70%;
}
</style>
