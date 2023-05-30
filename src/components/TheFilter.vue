<template>
  <div class="filters-container">
    <h2 class="filters-title">Фильтры</h2>
    <div class="filters-row">
      <label class="filters-label">Цена от:</label>
      <input type="number" v-model="minPrice" class="filters-input" />
    </div>
    <div class="filters-row">
      <label class="filters-label">Цена до:</label>
      <input type="number" v-model="maxPrice" class="filters-input" />
    </div>
    <div class="filters-row">
      <label class="filters-label">Фильтровать по автору:</label>
      <div v-for="author in authors" :key="author.id" class="filters-checkbox">
        <input type="checkbox" :value="author.name" v-model="selectedAuthors" />
        <span>{{ author.name }}</span>
      </div>
    </div>
    <button @click="applyFilters" class="filters-button">Применить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minPrice: null,
      maxPrice: null,
      selectedAuthors: [],
      authors: [
        { id: 1, name: "Александр Пушкин" },
        { id: 2, name: "Лев Толстой" },
        { id: 3, name: "Михаил Булгаков" }
      ]
    };
  },
  methods: {

    applyFilters() {
      // Применение фильтров
      const filters = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
        selectedAuthors: this.selectedAuthors
      };
      console.log("Применение фильтров:", filters);
      // Вызываем событие для передачи фильтров в родительский компонент
      this.$emit("apply-filters", filters);
    }
  }
};
</script>

<style scoped>
.filters-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.filters-title {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

.filters-row {
  margin-bottom: 15px;
}

.filters-label {
  font-weight: bold;
}

.filters-input {
  width: 100px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.filters-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.filters-checkbox input {
  margin-right: 5px;
}

.filters-button {
  padding: 10px 20px;
  background-color: #374785;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filters-button:hover {
  background-color: #263b5e;
}
</style>
