<script lang="ts" setup>
import FacInput from '..'
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <fac-input v-model="input" placeholder="请输入..." />
</template>
