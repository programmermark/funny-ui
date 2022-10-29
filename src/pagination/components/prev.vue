<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="prevText">{{ prevText }}</span>
    <fac-icon :name="prevIcon" v-else> </fac-icon>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import FacIcon from '../../icon/Icon.vue'

export default defineComponent({
  name: 'FacPaginationPrev',
  components: {
    FacIcon,
  },
  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1,
    },
    prevText: {
      type: String,
    },
    prevIcon: {
      type: String,
    },
  },
  emits: ['click'],
  setup(props) {
    const internalDisabled = computed(
      () => props.disabled || props.currentPage <= 1
    )

    return {
      internalDisabled,
    }
  },
})
</script>

<style lang="less">
@import '../pagination.less';
</style>
