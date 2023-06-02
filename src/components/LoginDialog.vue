<template>
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
    <Dialog :visible="visible" modal :closable="false" :header="header[variant]">
        <template v-if="variant==='authorization'">
            <span>
                <div class="label">Логин</div>
                <InputText v-model="login" class="p-inputtext-sm field" />
            </span>
            <span>
                <div class="label">Пароль</div>
                <Password v-model="password" :feedback="false" class="p-inputtext-sm" :inputStyle="{width:'100%'}" style="width: 100%" />
            </span>
        </template>
        <template v-if="variant==='registration'">
            <span>
                <div class="label">Логин</div>
                <InputText v-model="login" class="p-inputtext-sm field" />
            </span>
            <span>
                <div class="label">Пароль</div>
                <Password v-model="password" :feedback="false" class="p-inputtext-sm" :inputStyle="{width:'100%'}" style="width: 100%" />
            </span>
        </template>
        <template v-if="variant==='send_one_time_password'">
            <span>
                <div class="label">Электропочта</div>
                <InputText v-model="email" class="p-inputtext-sm field" />
            </span>
        </template>
        <template #footer>
            <div class="controls">
                <template v-if="variant==='authorization'">
                    <div class="controls-row">
                        <Button label="Войти" @click="onLogin()" severity="success" style="width: 100px"/>
                        <Button label="Регистрация" @click="variant = 'registration'" style="width: 180px" />
                    </div>
                    <div class="controls-row">
                        <Button label="Отмена" @click="onCancel()" outlined style="width: 100px" />
                        <Button label="Восстановление" @click="variant = 'send_one_time_password'" outlined style="width: 180px" />
                    </div>
                </template>
                <template v-if="variant==='registration'">
                    <div class="controls-row">
                        <Button label="Назад" @click=" variant='authorization'" outlined/>
                        <Button label="Зарегистрироваться" @click="onRegister()" />
                    </div>
                </template>
                <template v-if="variant==='send_one_time_password'">
                    <div class="controls-row">
                        <Button label="Назад" @click=" variant='authorization'" outlined/>
                        <Button label="Отправить одноразовый пароль" @click="onRecovery()"/>
                    </div>
                </template>
            </div>
        </template>
    </Dialog>
</template>

<script setup>

import { ref, inject } from "vue";
import { setToken, createUser, sendOneTimePassword } from '../api/api';
import router from "@/router.js";

const header = {
    'authorization': "Авторизация",
    'registration': "Регистрация",
    'send_one_time_password': "Восстановление"
};

const $cookies = inject('$cookies');
const visible = ref($cookies.get('user_id') === null);
const variant = ref('authorization');
const login = ref('');
const password = ref('');
const email = ref('');
const message = ref('');
const emit = defineEmits(['auth']);

const onLogin = async () => {
    const res = await setToken(login.value, password.value);
    if (res === null) {
        message.value = "Что-то пошло не так";
        return;
    }
    $cookies.set("user_id", res.user_id);
    $cookies.set("token", res.token);
    visible.value = false;
    emit("auth");
};

const onRegister = async () => {
    const res = await createUser(login.value, password.value);
    if (res === null) {
        message.value = "Что-то пошло не так";
        return;
    }
    $cookies.set("user_id", res.user_id);
    $cookies.set("token", res.token);
    visible.value = false;
    emit("auth");
};

const onRecovery = async () => {
    const res = await sendOneTimePassword(email.value);
    if (!res) {
        message.value = "Что-то пошло не так";
        return;
    }
    message.value = "Одноразовый пароль отправлен на электропочту";
};

const onCancel = () => router.push("/");

</script>

<style scoped>

.label {
  font-size: 12px;
}

.field {
    width: 100%;
}

.controls {
    display: flex;
    gap: 8px;
    flex-direction: column;
}

.controls-row {
    display: flex;
    gap: 8px;
}

</style>
