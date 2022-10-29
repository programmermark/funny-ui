<script setup>
import FacButton from '..'
import FacSpace from '../../space'
import FacIcon from '../../icon'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.themeColorButton }}</app-type>
  <fac-space :size="['2.666vw', '2.666vw']">
    <fac-button>{{ pack.defaultButton }}</fac-button>
    <fac-button type="primary">{{ pack.primaryButton }}</fac-button>
    <fac-button type="info">{{ pack.infoButton }}</fac-button>
    <fac-button type="success">{{ pack.successButton }}</fac-button>
    <fac-button type="warning">{{ pack.warningButton }}</fac-button>
    <fac-button type="danger">{{ pack.dangerButton }}</fac-button>
  </fac-space>
  <app-type>{{ pack.textButton }}</app-type>
  <fac-space :size="['2.666vw', '2.666vw']">
    <fac-button text outline type="primary">{{ pack.outlineButton }}</fac-button>
    <fac-button text type="primary">{{ pack.plainTextButton }}</fac-button>
  </fac-space>
  <app-type>{{ pack.disabledStatus }}</app-type>
  <fac-space :size="['2.666vw', '2.666vw']">
    <fac-button disabled>{{ pack.disabledStatus }}</fac-button>
    <fac-button disabled text outline>{{ pack.disabledStatus }}</fac-button>
    <fac-button disabled text>{{ pack.disabledStatus }}</fac-button>
  </fac-space>
  <app-type>{{ pack.buttonSize }}</app-type>
  <fac-space :size="['2.666vw', '2.666vw']">
    <fac-button type="primary">{{ pack.normalButton }}</fac-button>
    <fac-button type="success" size="small">{{ pack.smallButton }}</fac-button>
    <fac-button type="warning" size="mini">{{ pack.miniButton }}</fac-button>
    <fac-button type="danger" size="large">{{ pack.largeButton }}</fac-button>
  </fac-space>
  <app-type>{{ pack.blockButton }}</app-type>
  <fac-button block type="primary">{{ pack.blockButton }}</fac-button>
  <app-type>{{ pack.customColor }}</app-type>
  <fac-space :size="['2.666vw', '2.666vw']">
    <fac-button color="#69dbaa" text-color="#eee">{{ pack.backgroundTextColor }}</fac-button>
    <fac-button color="linear-gradient(to right, #69dbaa, #3a7afe)" text-color="#fff">
      {{ pack.linearGradientColor }}
    </fac-button>
  </fac-space>
  <app-type>{{ pack.modifyColor }}</app-type>
  <fac-space :size="['2.666vw', '2.666vw']">
    <fac-button type="primary" round>
      <fac-icon name="plus" />
    </fac-button>
    <fac-button type="info" round>
      <fac-icon name="information" />
    </fac-button>
    <fac-button type="success" round>
      <fac-icon name="check" />
    </fac-button>
    <fac-button type="warning" round>
      <fac-icon name="warning" />
    </fac-button>
    <fac-button type="danger" round>
      <fac-icon name="window-close" />
    </fac-button>
  </fac-space>
</template>
