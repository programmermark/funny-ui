<script setup>
import FacButton from '..'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <fac-button block type="primary">{{ pack.blockButton }}</fac-button>
</template>
