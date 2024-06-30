<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";

const showSidebar = ref(false);
const total = ref(0);

const handleSideNav = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<template>
  <nav class="flex h-20 w-full justify-between px-6">
    <button @click="handleSideNav" class="my-auto flex flex-col gap-1">
      <span class="inline-block h-1 w-[26px] rounded-full bg-white"></span>
      <span class="inline-block h-1 w-[26px] rounded-full bg-white"></span>
      <span class="inline-block h-1 w-[26px] rounded-full bg-white"></span>
    </button>
    <div class="flex gap-2">
      <p class="my-auto text-white" v-text="total"></p>
      <img class="my-auto h-[40%]" src="../assets/img/dollar.png" alt="money" />
    </div>
  </nav>
  <Sidebar v-model:active="showSidebar" />
</template>
