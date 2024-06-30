<script setup lang="ts">
import { reactive, ref, toRaw } from "vue";
import router from "../router";
import { notification } from "ant-design-vue";

const formRef = ref();
const formState = reactive({
  name: "",
  account: "",
  password: "",
});
const rules = {
  name: [
    {
      required: true,
      message: "名字不可為空",
      trigger: "blur",
    },
    {
      min: 2,
      message: "最少需輸入兩個字",
      trigger: "blur",
    },
    {
      max: 10,
      message: "最多只能十個字",
      trigger: "blur",
    },
  ],
  account: [
    {
      required: true,
      message: "帳號不可為空",
      trigger: "blur",
    },
    {
      type: "email",
      message: "請輸入有效的電子郵件地址",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      validator: (_: any, value: any) => {
        const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
        const patternLength = /.{8,}/;
        if (!value) {
          return Promise.reject("密碼不可為空");
        } else if (!pattern.test(value)) {
          return Promise.reject("密碼需至少包含大寫字母、小寫字母、數字");
        } else if (!patternLength.test(value)) {
          return Promise.reject("密碼長度至少為8位");
        } else {
          return Promise.resolve();
        }
      },
      trigger: "blur",
    },
  ],
};
//處理取消按鈕
const confirm = () => {
  router.push("/");
};
const cancel = () => {};

//註冊成功提示
const openNotification = (type: string) => {
  (notification as any)[type]({
    message: "註冊成功",
    description: "歡迎加入簡單記帳，請重新登入",
    duration: 3,
  });
};
//處理註冊按鈕
const onSubmit = () => {
  formRef.value.validate().then(() => {
    console.log("submit!", formState, toRaw(formState));
    const user = JSON.stringify(toRaw(formState));
    sessionStorage.setItem("user", user);
    openNotification("success");
    router.push("/");
  });
};
</script>

<template>
  <div class="h-screen w-screen bg-gray-200 font-sans">
    <div class="mx-auto aspect-[9/17] h-screen bg-[#9FCEA3] px-20 pt-20">
      <div class="text-center">
        <a-image
          class="mb-16"
          :preview="false"
          :width="200"
          src="../src/assets/img/dollar.png"
        />
      </div>
      <a-form
        class="flex flex-col gap-y-4"
        ref="formRef"
        :model="formState"
        :rules="rules"
      >
        <a-form-item label="姓名" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="信箱" name="account">
          <a-input v-model:value="formState.account" />
        </a-form-item>
        <a-form-item label="密碼" name="password">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <!-- 提交&取消按鈕 -->
        <a-form-item :wrapper-col="{ offset: 4 }">
          <div class="flex w-full justify-around">
            <a-button type="primary" @click="onSubmit">提交</a-button>
            <a-popconfirm
              title="確定要取消註冊嗎？（取消將返回首頁）"
              ok-text="是"
              cancel-text="否"
              @confirm="confirm"
              @cancel="cancel"
            >
            <a-button style="margin-left: 10px">取消</a-button></a-popconfirm
            >
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
