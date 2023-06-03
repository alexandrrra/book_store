<template>
  <div class="container">
    <LoginDialog @auth="loadCart()"/>
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
    <div>
      Cart
    </div>
  </div>
</template>

<script setup>

import LoginDialog from '@/components/LoginDialog.vue';
import { ref, onMounted } from 'vue'
import { getCart } from '../api/api';

const message = ref("");
const cart = ref([]);

const loadCart = async () => {
  const newCart = await getCart();
  if (newCart === null) {
      return;
  }
  cart.value = {...newCart};
};

onMounted(loadCart);

</script>

<style scoped>

.container {
  display: flex;
}

</style>
