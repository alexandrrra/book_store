<template>
  <div class="container">
    <div class="profile-navigation">
      <div class="profile-navigation-container">
        <div class="navigation-item" @click="setVariant('view')">
          <font-awesome-icon icon="user" />
          <span>Профиль</span>
        </div>
        <div class="navigation-item" @click="setVariant('edit')">
          <font-awesome-icon icon="heart" />
          <span>Личные данные</span>
        </div>
        <div class="navigation-item" @click="setVariant('orders')">
          <font-awesome-icon icon="heart" />
          <span>Заказы</span>
        </div>
        <div class="navigation-item" @click="setVariant('favourites')">
          <font-awesome-icon icon="heart" />
          <span>Избранное</span>
        </div>
        <div class="navigation-item" @click="onExitClick()">
          <font-awesome-icon icon="heart" class="SignOut"/>
          <span>Выйти</span>
        </div>
      </div>
    </div>
    <div class="info">
      <template v-if="variant==='view' || variant==='edit'">
        <h1 v-if="variant==='view'">Профиль</h1>
        <h1 v-else>Личные данные</h1>
        <div class="info-container">
          <span class="p-float-label row" v-for="field in profileFields" :key="field.label">
              <div class="label">{{ field.label }}</div>
              <InputText v-model="currentProfile[field.name]" :disabled="variant==='view'" class="p-inputtext-sm" />
          </span>
          <span v-if="variant==='edit'" class="p-float-label row">
              <div class="label">Пароль</div>
              <Password v-model="password" :disabled="variant==='view'" class="p-inputtext-sm" />
          </span>
          <div v-show="variant==='edit'" class="card flex justify-content-center">
            <Button label="Сохранить" @click="onSaveClick()"/>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>

import {ref, onMounted} from 'vue'
import { deleteToken, getProfile, updateProfile } from '../api/api';

const profileFields = [
  {
    name: "first_name",
    label: "Фамилия"
  },
  {
    name: "last_name",
    label: "Имя",
  },
  {
    name: "middle_name",
    label: "Отчество"
  },
  {
    name: "login",
    label: "Логин"
  },
  {
    name: "phone",
    label: "Телефон"
  },
  {
    name: "email",
    label: "Электропочта"
  }
];

const defaultProfile = {
  first_name: '',
  last_name: '',
  middle_name: '',
  login: '',
  phone: '',
  email: ''
};

const variant = ref("view");
const profile = ref({...defaultProfile});
const currentProfile = ref({...defaultProfile});
const password = ref("");

onMounted(async () => {
  await getProfile();
});

const setVariant = newVariant => {
  if (variant.value === "edit") {
    currentProfile.value = {...profile.value};
    password.value = "";
  }
  variant.value = newVariant;
};

const onExitClick = async () => {
  await deleteToken();
};

const onSaveClick = async () => {
  await updateProfile({...profile.value, password: password.value});
  profile.value = {...currentProfile.value};
};

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
  padding-bottom: 8px;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: 12px;
}

</style>
