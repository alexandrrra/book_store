<template>
  <button class="btn">
    <slot>
      <router-link>
        :to="to"
        class="btn"
      </router-link>
    </slot>
  </button>
</template>

<script setup>

const props = defineProps(
    {
      to:{
        type:String,
        required:true,
      }
    }
)

</script>

<style scoped>
.btn{
  background: #22202e;
  color: white;
  padding: 0 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-size: 16px;
  height: 56px;
  border-radius: 10px;
}

.btn:hover{
  opacity: 0.8;
}
</style>