<template>
  <div class="filters-container">
    <div class="filters-row">
      <h4>Цена</h4>
      <div class="inputs">
        <label class="filters-label">От:</label>
        <input type="number" v-model="minPrice" class="filters-input" />
        <label class="filters-label">До:</label>
        <input type="number" v-model="maxPrice" class="filters-input" />
      </div>
    </div>
    <div class="filters-row">
      <label class="filters-label">Автор</label>
      <div v-for="author in authors" :key="author.id" class="filters-checkbox">
        <input class="checkbox" type="checkbox" :value="author.name" v-model="selectedAuthors" />
        <span>{{ author.name }}</span>
      </div>
    </div>
    <div class="flex">
      <Button label="Сохранить" @click="applyFilters()" size="small"/>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from "vue";
import { getFilterOptions } from '../api/api';

const emit = defineEmits(['apply-filters']);

const minPrice = ref(null);
const maxPrice = ref(null);
const selectedAuthors = ref([]);
const selectedGenres = ref([]);
const selectedPublishments = ref([]);
const filterOptions = ref({});

onMounted(async () => {
  const newFilterOptions = await getFilterOptions();
  if (newFilterOptions === null) {
    return;
  }
  filterOptions.value = newFilterOptions;
  minPrice.value = filterOptions.value.price.min;
  maxPrice.value = filterOptions.value.price.max;
});

const applyFilters = () => {
  // Применение фильтров
  const filters = {
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
    selectedAuthors: selectedAuthors.value,
    selectedGenres: selectedGenres.value,
    selectedPublishments: selectedPublishments.value
  };
  // Вызываем событие для передачи фильтров в родительский компонент
  emit("apply-filters", filters);
};

</script>

<style scoped>
.filters-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}


.filters-row {
  margin-bottom: 20px;
}

.inputs{
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}

.filters-label {
  font-weight: bold;
}

.filters-input {
  width: 30%;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
}

.filters-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
}

.checkbox:checked {
  background-color: #374785;
  border-color: #374785;
}

.checkbox:checked::before {
  content: '✔';
  display: block;
  text-align: center;
  color: #fff;
}

.filters-checkbox span {
  font-size: 14px;
}

</style>
