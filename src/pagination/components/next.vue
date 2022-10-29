<template>
  <button
    type="button"
    class="btn-next"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="nextText">{{ nextText }}</span>
    <fac-icon :name="nextIcon" v-else> </fac-icon>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import FacIcon from '../../icon/Icon.vue'

export default defineComponent({
  name: 'FacPaginationNext',
  components: {
    FacIcon,
  },
  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1,
    },
    nextText: {
      type: String,
    },
    nextIcon: {
      type: String,
    },
    pageCount: {
      type: Number,
      required: true,
    },
  },
  emits: ['click'],
  setup(props) {
    const internalDisabled = computed(
      () =>
        props.disabled ||
        props.currentPage === props.pageCount ||
        props.pageCount === 0
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
