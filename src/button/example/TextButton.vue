<script setup>
import FacButton from '..'
import FacSpace from '../../space'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <fac-space :size="[10, 10]">
    <fac-button text outline type="primary">{{ pack.outlineButton }}</fac-button>
    <fac-button text type="primary">{{ pack.plainTextButton }}</fac-button>
  </fac-space>
</template>
