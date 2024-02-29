<template>
  <div class="nav-link">
    <button
      type="button"
      class="btn btn-link dropdown-toggle dropdown-toggle-split"
      data-bs-reference="parent"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      data-bs-auto-close="false"
      role="button"
    >
      <span class="visually-hidden"></span>
    </button>

    <button
      type="button"
      :class="`btn ${
        currentRoute === `/${category.tables}` && projectId === projectRoute
          ? 'active'
          : ''
      }`"
      @click="$router.push(`/${category.tables}?projectId=${projectId}`)"
    >
      <i :class="`bi bi-${category.icon}`"></i>
      {{ category.title }}
    </button>

    <button
      type="button"
      class="btn"
      @click="$router.push(`/${category.tables}/new`)"
    >
      <i :class="`bi bi-plus`" style="font-size: 1.2rem"></i>
    </button>

    <ul class="dropdown-menu">
      <li v-for="item in items[projectId]" :key="item.id">
        <button
          :class="`dropdown-item ${
            currentRoute === `/${category.tables}/${item.id}` ? 'active' : ''
          }`"
          type="button"
          @click="$router.push(`/${category.tables}/${item.id}`)"
        >
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  currentRoute: {
    type: String,
    required: true,
  },
  projectRoute: {
    type: String,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  persons: {
    type: Object,
    required: true,
  },
  scenes: {
    type: Object,
    required: true,
  },
  worlds: {
    type: Object,
    required: true,
  },
  locations: {
    type: Object,
    required: true,
  },
});

let items = [];

switch (props.category.tables) {
  case "persons":
    items = props.persons;
    break;
  case "scenes":
    items = props.scenes;
    break;
  case "worlds":
    items = props.worlds;
    break;
  case "locations":
    items = props.locations;
    break;
}
</script>

<style scoped></style>
