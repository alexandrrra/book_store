<template>
  <div class="container">
    <LoginDialog @auth="loadFavorite()"/>
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
      Favorite
    </div>
  </div>
</template>

<script setup>

import LoginDialog from '@/components/LoginDialog.vue';
import { ref, onMounted } from 'vue'
import { getFavorite } from '../api/api';

const message = ref("");
const favorite = ref([]);

const loadFavorite = async () => {
  const newFavorite = await getFavorite();
  if (newFavorite === null) {
      return;
  }
  favorite.value = {...newFavorite};
};

onMounted(loadFavorite);

</script>

<style scoped>

.container {
  display: flex;
}

</style>
