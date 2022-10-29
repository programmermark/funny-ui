<template>
  <fac-input
    v-model="text"
    :maxlength="10"
    placeholder="请输入..."
    show-word-limit
    type="text"
  />
  <div style="margin: 20px 0" />
  <fac-input
    v-model="textarea"
    :maxlength="30"
    placeholder="请输入..."
    show-word-limit
    type="textarea"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FacInput from '..'

const text = ref('')
const textarea = ref('')
</script>
