<script lang="ts" setup>
import FacInput from '..'
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <fac-input
    v-model="input"
    type="password"
    placeholder="请输入密码"
    show-password
  />
</template>
