<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";

const inOrOut = ref("expend");
const typeSwitch = ref();
const addExpend = ref();
const addIncome = ref();
</script>

<template>
  <div class="h-screen w-screen bg-gray-200 font-sans">
    <div class="mx-auto aspect-[9/17] h-screen bg-[#9FCEA3]">
      <Navbar />
      <main class="flex flex-col gap-y-6 px-20">
        <!-- 收入或支出 -->
        <a-radio-group v-model:value="inOrOut">
          <a-radio-button value="income">收入</a-radio-button>
          <a-radio-button value="expend">支出</a-radio-button>
        </a-radio-group>
        <!-- expend type選擇 -->
        <a-radio-group
          v-if="inOrOut == 'expend'"
          v-model:value="typeSwitch"
          button-style="solid"
          class="pt-6"
        >
          <a-radio-button class="pt-1" value="food">
            <a-tooltip :defaultVisible="true" trigger="contextmenu/hover">
              <template #title>食物</template>
              <img
                class="w-6"
                src="../assets/img/food.png"
                alt=""
              /> </a-tooltip
          ></a-radio-button>
          <a-radio-button class="pt-1" value="clothe">
            <a-tooltip :defaultVisible="true" trigger="contextmenu/hover">
              <template #title>衣服</template>
              <img class="w-6" src="../assets/img/clothe.png" alt=""
            /></a-tooltip>
          </a-radio-button>
          <a-radio-button class="pt-1" value="live">
            <a-tooltip :defaultVisible="true" trigger="contextmenu/hover">
              <template #title>居住</template>
              <img
                class="w-6"
                src="../assets/img/live.png"
                alt=""
              /> </a-tooltip
          ></a-radio-button>
          <a-radio-button class="pt-1" value="traffic">
            <a-tooltip :defaultVisible="true" trigger="contextmenu/hover">
              <template #title>交通</template>
              <img
                class="w-6"
                src="../assets/img/traffic.png"
                alt=""
              /> </a-tooltip
          ></a-radio-button>
          <a-radio-button class="pt-1" value="play">
            <a-tooltip :defaultVisible="true" trigger="contextmenu/hover">
              <template #title>娛樂</template>
              <img class="w-6" src="../assets/img/play.png" alt="" /></a-tooltip
          ></a-radio-button>
          <a-radio-button class="pt-1" value="other">
            <a-tooltip :defaultVisible="true" trigger="contextmenu/hover">
              <template #title>其他</template>
              <img
                class="w-6"
                src="../assets/img/other.png"
                alt="" /></a-tooltip
          ></a-radio-button>
        </a-radio-group>
        <!-- income type選擇 -->
        <a-radio-group
          class="pt-6"
          v-else-if="inOrOut == 'income'"
          v-model:value="typeSwitch"
          button-style="solid"
        >
          <a-radio-button value="salary" class="pt-1">
            <a-tooltip :defaultVisible="true" trigger="contextmenu/hover">
              <template #title>薪水</template>
              <img class="w-6" src="../assets/img/salary.png" alt="" />
            </a-tooltip>
          </a-radio-button>
          <a-radio-button value="stock" class="pt-1">
            <a-tooltip :defaultVisible="true" trigger="contextmenu/hover">
              <template #title>股票</template>
              <img class="w-6" src="../assets/img/stock.png" alt="" />
            </a-tooltip>
          </a-radio-button>
          <a-radio-button value="catch" class="pt-1">
            <a-tooltip
              :defaultVisible="true"
              placement="topLeft"
              trigger="contextmenu/hover"
            >
              <template #title>路上撿到錢</template>
              <img class="w-6" src="../assets/img/catch.png" alt="" />
            </a-tooltip>
          </a-radio-button>
        </a-radio-group>
        <!-- input -->
        <div v-if="inOrOut == 'expend'">
          <a-input
            v-model:value="addExpend"
            class="mb-4 text-gray-500"
            suffix="$"
            placeholder="新增支出"
          />
          <a-button type="primary" block>新增</a-button>
        </div>

        <div v-else-if="inOrOut == 'income'">
          <a-input
            v-model:value="addIncome"
            class="mb-4 text-gray-500"
            suffix="$"
            placeholder="新增收入"
          />
          <a-button type="primary" block>新增</a-button>
        </div>
        <!-- 暫無數據 -->
        <div class="mt-48">
          <img class="mx-auto w-[40%]" src="../assets/img/empty.png" alt="" />
          <p class="pt-6 text-center text-xl text-white">暫無數據</p>
        </div>
      </main>
    </div>
  </div>
</template>
