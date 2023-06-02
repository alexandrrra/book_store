<template>
  <div class="container">
    <LoginDialog @auth="onAuth()"/>
    <Dialog :visible="message!==''" modal :closable="false" header="Сообщение">
        {{ message }}
        <template #footer>
            <div class="controls">
                <div class="controls-row">
                    <Button label="OK" @click="message=''" style="width: 100%"/>
                </div>
            </div>
        </template>
    </Dialog>
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
        <div class="navigation-item sign-out" @click="onExitClick()">
          <font-awesome-icon icon="person-walking-arrow-right" class="icon" />
          <span>Выйти</span>
        </div>
      </div>
    </div>
    <div class="info">
      <template v-if="variant==='view' || variant==='edit'">
        <h1 v-if="variant==='view'">Профиль</h1>
        <h1 v-else>Редактирование профиля</h1>
        <div class="info-container">
          <span v-for="field in profileFields" :key="field.label">
              <div class="label">{{ field.label }}</div>
              <InputText v-model="currentProfile[field.name]" :disabled="variant==='view'" class="p-inputtext-sm" />
          </span>
          <span v-if="variant==='edit'">
              <div class="label">Пароль</div>
              <Password v-model="password" :disabled="variant==='view'" class="p-inputtext-sm" />
          </span>
          <div v-show="variant==='edit'" class="card flex justify-content-center">
            <Button label="Сохранить" @click="onSaveClick()" :disabled="isEqual(profile, currentProfile)"/>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>

import LoginDialog from '@/components/LoginDialog.vue';
import {ref, onMounted, inject} from 'vue'
import { deleteToken, getProfile, updateProfile } from '../api/api';
import router from "@/router.js";
import {isEqual} from "lodash";

const $cookies = inject('$cookies');

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
const message = ref("");

onMounted(async () => {
  const newProfile = await getProfile();
  if (newProfile === null) {
    return;
  }
  profile.value = {...newProfile};
  currentProfile.value = {...newProfile};
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
  $cookies.remove("user_id");
  $cookies.remove("token");
  router.push("/");
};

const onSaveClick = async () => {
  const newProfile = await updateProfile({...currentProfile.value, password: password.value});
  if (newProfile === null) {
    message.value = "Что-то пошло не так";
    return;
  }
  profile.value = {...newProfile, password: ""};
  currentProfile.value = {...newProfile, password: ""};
  message.value = "Сохранено";
};

const onAuth = async () => {
  const newProfile = await getProfile();
  if (newProfile === null) {
    message.value = "Что-то пошло не так";
    return;
  }
  profile.value = {...newProfile};
  currentProfile.value = {...newProfile};
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

.sign-out {
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

</style>
