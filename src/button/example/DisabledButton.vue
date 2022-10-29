<script setup>
import FacButton from '..'
import FacSpace from '../../space'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <fac-space :size="[10, 10]">
    <fac-button disabled>{{ pack.disabledStatus }}</fac-button>
    <fac-button disabled text outline>{{ pack.disabledStatus }}</fac-button>
    <fac-button disabled text>{{ pack.disabledStatus }}</fac-button>
  </fac-space>
</template>
