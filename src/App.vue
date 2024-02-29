<template>
  <Header />
  <div class="content container-sm">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";
import Header from "./components/Header.vue";
// import { generateUniqueId, saveTransactionsToLocalStorage } from "./handler";

const toast = useToast();

const transactions = ref([]);

// toast.success("Transaction added.");

// toast.success("Transaction deleted.");
</script>

<style scoped></style>
