<script setup>
import FacButton from '..'
import FacSpace from '../../space'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <fac-space :size="[10, 10]">
    <fac-button color="#69dbaa" text-color="#eee">{{ pack.backgroundTextColor }}</fac-button>
    <fac-button color="linear-gradient(to right, #69dbaa, #3a7afe)" text-color="#fff">
      {{ pack.linearGradientColor }}
    </fac-button>
  </fac-space>
</template>
