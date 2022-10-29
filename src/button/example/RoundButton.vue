<script setup>
import FacButton from '..'
import FacSpace from '../../space'
import FacIcon from '../../icon'
</script>

<template>
  <fac-space :size="[10, 10]">
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
