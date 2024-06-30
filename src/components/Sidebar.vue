<script setup lang="ts">
const active = defineModel<boolean>("active");
//處理登出按鈕
const handleLogout = ()=>{
  localStorage.removeItem('token');
}
</script>

<template>
  <!-- sideNav -->
  <div
    v-if="active"
    class="sideNavShow fixed top-0 z-50 flex aspect-[4/17] h-screen flex-col gap-y-2 overflow-hidden text-nowrap bg-black bg-opacity-50 py-10 text-center text-[1.5rem] text-white"
  >
    <div class="flex flex-col items-center gap-y-6">
      <a-image src="./src/assets/img/profile.png" :preview="false" :width="100" alt="" />
      <router-link to="/incomeAndExpend" class="mb-0">收支</router-link>
      <router-link to="/statistics" class="mb-0">統計</router-link>
      <router-link to="/family" class="mb-0">家庭</router-link>
      <router-link to="/info"p class="mb-0">個人</router-link>
      <router-link @click="handleLogout" to="/" class="mb-0">登出</router-link>
    </div>
  </div>
  <!-- 背景遮罩 -->
  <div
    v-if="active"
    class="fixed top-0 z-40 aspect-[9/17] h-screen bg-gray-500/20"
    @click.self="active = false"
  ></div>
</template>
