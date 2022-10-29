<template>
  <span class="">
    <slot :total="total"> 共{{ total }}条记录 </slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FacTotal',
  props: {
    total: {
      type: Number,
      default: 1000,
    },
  },
})
</script>

<style lang="less"></style>
