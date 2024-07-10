<script setup lang="ts">
import axios from "axios";
//簡轉繁tify 繁轉簡sify
import { tify } from "chinese-conv";
import { ref } from "vue";
import { notification } from "ant-design-vue";
import router from "../router";

const sentence = ref("");
const origin = ref("");
const account = ref("");
const password = ref("");

//取得每日一句
axios.post("https://api.xygeng.cn/openapi/one").then((res) => {
  sentence.value = tify(res.data.data.content);
  origin.value = tify(res.data.data.origin);
});

//登入成功彈窗訊息
const openNotification = (type: string) => {
  (notification as any)[type]({
    message: "登入成功",
    description: "歡迎使用簡單記帳",
    duration: 3,
  });
};

//帳號錯誤
const openAccountError = (type: string) => {
  (notification as any)[type]({
    message: "帳號錯誤",
    description: "查無此帳號",
    duration: 3,
  });
};

//密碼錯誤
const openPasswordError = (type: string) => {
  (notification as any)[type]({
    message: "密碼錯誤",
    description: "請重新輸入正確密碼",
    duration: 3,
  });
};

//處理登入按鈕
const handleLogin = () => {
  const user = JSON.parse(sessionStorage.getItem("user") as string);
  if (!user || account.value !== user.account) {
    openAccountError("error");
  } else if (password.value !== user.password) {
    openPasswordError("error");
  } else {
    openNotification("success");
    // 儲存token到localStorage
    localStorage.setItem("token", "tokenTest");
    router.push("/incomeAndExpend");
  }
};
</script>

<template>
  <div class="h-screen w-screen bg-gray-200 font-sans">
    <div
      class="mx-auto flex aspect-[9/17] h-screen flex-col gap-y-12 bg-[#9FCEA3] px-10 pt-20"
    >
      <!-- banner & title -->
      <div class="text-center">
        <a-image
          class="mb-6"
          :preview="false"
          :width="200"
          src="../src/assets/img/dollar.png"
        />
        <h1
          class="text-center drop-shadow-xl text-[3rem] tracking-widest text-white"
        >
          簡單記帳
        </h1>
      </div>
      <!-- login -->
      <div>
        <a-input
          v-model:value="account"
          placeholder="請輸入使用者帳號"
          class="mb-6"
        >
          <template #prefix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 36 36"
            >
              <path
                fill="lightblue"
                d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98"
                class="clr-i-solid clr-i-solid-path-1"
              ></path>
              <circle
                cx="18"
                cy="10"
                r="7"
                fill="lightblue"
                class="clr-i-solid clr-i-solid-path-2"
              ></circle>
              <path fill="none" d="M0 0h36v36H0z"></path>
            </svg>
          </template>
        </a-input>
        <a-input-password
          v-model:value="password"
          placeholder="請輸入使用者密碼"
        >
          <template #prefix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="lightblue"
                d="M15 6a1.54 1.54 0 0 1-1.5-1.5a1.5 1.5 0 0 1 3 0A1.54 1.54 0 0 1 15 6m-1.5-5A5.55 5.55 0 0 0 8 6.5a6.8 6.8 0 0 0 .7 2.8L1 17v2h4v-2h2v-2h2l3.2-3.2a6 6 0 0 0 1.3.2A5.55 5.55 0 0 0 19 6.5A5.55 5.55 0 0 0 13.5 1"
              ></path>
            </svg>
          </template>
        </a-input-password>
        <div class="mt-6 flex justify-around">
          <button
            @click="handleLogin"
            class="rounded-2xl bg-[#F3A00F] px-4 py-2 text-center text-white transition-all duration-300 hover:bg-[#ffc35c]"
          >
            登入
          </button>
          <router-link
            to="/register"
            class="rounded-2xl bg-[#F3A00F] px-4 py-2 text-center text-white transition-all duration-300 hover:bg-[#ffc35c]"
          >
            註冊會員
          </router-link>
        </div>
      </div>

      <!-- 每日一句 -->
      <div class="text-[14px] italic leading-5 text-gray-200">
        <p v-text="sentence" class="max-h-[100px] overflow-scroll"></p>
        <p class="text-right">
          <span>出自</span><span class="mx-2">-</span
          ><span v-text="origin"></span>
        </p>
      </div>
    </div>
  </div>
</template>
