<template>
  <fac-input
    v-model="textarea1"
    type="textarea"
    autosize
    placeholder="请输入..."
  />
  <div style="margin: 20px 0" />
  <fac-input
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="请输入..."
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FacInput from '..'

const textarea1 = ref('')
const textarea2 = ref('')
</script>
