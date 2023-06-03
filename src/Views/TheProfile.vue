<template>
  <div class="container">
    <LoginDialog @auth="loadProfile(true)" />
    <MessageDialog :message="message" @close="message=''"/>
    <div class="profile-navigation">
      <div class="profile-navigation-container">
        <div class="navigation-item" @click="setVariant('view')">
          <font-awesome-icon icon="user" class="icon" />
          <span>Профиль</span>
        </div>
        <div class="navigation-item" @click="setVariant('edit')">
          <font-awesome-icon icon="pen" class="icon" />
          <span>Редактировать</span>
        </div>
        <div class="navigation-item" @click="setVariant('orders')">
          <font-awesome-icon icon="book" class="icon" />
          <span>Заказы</span>
        </div>
        <div class="navigation-item exit" @click="onExitClick()">
          <font-awesome-icon icon="person-walking-arrow-right" class="icon" />
          <span>Выйти</span>
        </div>
      </div>
    </div>
    <div class="info">
      <template v-if="variant === 'view' || variant === 'edit'">
        <h1 v-if="variant === 'view'">Профиль</h1>
        <h1 v-else>Редактирование профиля</h1>
        <div class="info-container">
          <span v-for="field in profileFields" :key="field.name">
            <div class="label">{{ field.label }}</div>
            <InputText v-model="currentProfile[field.name]" class="p-inputtext-sm" :disabled="variant === 'view'" />
          </span>
          <template v-if="variant === 'edit'">
            <div class="label">Пароль</div>
            <Password v-model="password" :disabled="variant === 'view'" class="p-inputtext-sm" />
            <div class="flex">
              <Button label="Сохранить" @click="onSaveClick()" :disabled="isEqual(profile, currentProfile) && password.length == 0" />
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>

import LoginDialog from '@/components/LoginDialog.vue';
import MessageDialog from '@/components/MessageDialog.vue';
import { useStore } from 'vuex';
import { inject, ref, onMounted } from 'vue'
import { getProfile, updateProfile, deleteToken } from '../api/api';
import router from "@/router.js";
import { isEqual } from "lodash";

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

const store = useStore()
const $cookies = inject('$cookies');

const message = ref("");
const variant = ref("view");
const profile = ref({});
const currentProfile = ref({});
const password = ref("");

const loadProfile = async showError => {
  const newProfile = await getProfile();
  if (newProfile === null) {
    if (showError) {
      message.value = "Что-то пошло не так";
    }
    return;
  }
  profile.value = { ...newProfile };
  currentProfile.value = { ...newProfile };
};

onMounted(loadProfile);

const setVariant = newVariant => {
  if (variant.value === "edit") {
    currentProfile.value = { ...profile.value };
    password.value = "";
  }
  variant.value = newVariant;
};

const onSaveClick = async () => {
  const newProfile = await updateProfile({ ...currentProfile.value, password: password.value });
  if (newProfile === null) {
    message.value = "Что-то пошло не так";
    return;
  }
  profile.value = { ...newProfile, password: "" };
  currentProfile.value = { ...newProfile, password: "" };
  message.value = "Сохранено";
};

const onExitClick = async () => {
  await deleteToken();
  $cookies.remove("user_id");
  $cookies.remove("token");
  store.commit("setLogin", null);
  router.push("/");
};

</script>

<style scoped>
.container {
  display: flex;
}

.profile-navigation {
  margin-top: 50px;
  width: 40%;
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

.exit {
  color: #F76C6C;
}

.info {
  width: 70%;
  padding-bottom: 24px;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: 12px;
}

.icon {
  width: 16px;
  height: 16px;
  padding: 4px;
}

.flex {
  display: flex;
}
</style>
