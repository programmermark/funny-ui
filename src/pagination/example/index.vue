<script setup>
import { ref } from 'vue'
import FacPagination from '../index'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

watchLang(use)

const currentPage1 = ref(5)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <fac-pagination />
  <fac-pagination v-model:current-page="currentPage1" :total="200">
    <template #total="{ total }"> total {{ total }} items </template>
  </fac-pagination>
</template>
