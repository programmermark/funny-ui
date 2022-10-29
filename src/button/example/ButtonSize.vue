<script setup>
import FacButton from '..'
import FacSpace from '../../space'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <fac-space :size="[10, 10]">
    <fac-button type="primary">{{ pack.normalButton }}</fac-button>
    <fac-button type="success" size="small">{{ pack.smallButton }}</fac-button>
    <fac-button type="warning" size="mini">{{ pack.miniButton }}</fac-button>
    <fac-button type="danger" size="large">{{ pack.largeButton }}</fac-button>
  </fac-space>
</template>
