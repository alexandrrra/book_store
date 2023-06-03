<template>
  <Dialog :visible="props.message!=''" modal :closable="false" header="Сообщение">
    {{ props.message }}
    <template #footer>
      <div class="controls">
        <Button label="OK" @click="onClose()" style="width: 100px" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>

const props = defineProps(['message'])
const emit = defineEmits(['close']);

const onClose = async () => {
  emit("close");
};

</script>

<style scoped>
.controls {
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  padding-left: 8px;
}
</style>
