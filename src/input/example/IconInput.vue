<script lang="ts" setup>
import { ref } from 'vue'
import FacInput from '..'
import FacIcon from '../../icon/Icon.vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>

<template>
  <div>
    <span class="ml-4 w-20 text-666 inline-block">不使用插槽</span>
    <fac-input
      v-model="input1"
      class="w-50 m-2"
      placeholder="Pick a date"
      suffix-icon="calendar-month-outline"
    />
    <fac-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Type something"
      prefix-icon="magnify"
    />
  </div>
  <div>
    <span class="ml-4 w-20 text-666 inline-block">使用插槽</span>
    <fac-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
      <template #suffix>
        <fac-icon name="calendar-month-outline" />
      </template>
    </fac-input>
    <fac-input v-model="input4" class="w-50 m-2" placeholder="Type something">
      <template #prefix>
        <fac-icon name="magnify" />
      </template>
    </fac-input>
  </div>
</template>

<style lang="less">
.w-50 {
  width: 12.5rem !important;
}

.m-2 {
  margin: 0.5rem;
}

.ml-4 {
  margin-left: 1rem;
}
.w-20 {
  width: 80px;
}
.inline-block {
  display: inline-block;
}
.text-666 {
  color: #666;
}
</style>
