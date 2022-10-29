<script setup>
import FacButton from '..'
import FacSpace from '../../space'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <fac-space :size="[10, 10]">
    <fac-button>{{ pack.defaultButton }}</fac-button>
    <fac-button type="primary">{{ pack.primaryButton }}</fac-button>
    <fac-button type="info">{{ pack.infoButton }}</fac-button>
    <fac-button type="success">{{ pack.successButton }}</fac-button>
    <fac-button type="warning">{{ pack.warningButton }}</fac-button>
    <fac-button type="danger">{{ pack.dangerButton }}</fac-button>
  </fac-space>
</template>
