<template>
  <div class="fac-pagination">
    <Total :total="total" v-slot="{ total }">
      <slot name="total" :total="total"></slot>
    </Total>
    <Prev
      :disabled="disabled"
      :current-page="currentPage"
      :prev-text="prevText"
      :prev-icon="prevIcon"
    />
    <Pager
      :current-page="currentPage"
      :page-size="pageSize"
      :pager-count="pagerCount"
      :page-count="pageCount"
      :total="total"
      :disabled="disabled"
    />
    <Next
      :disabled="disabled"
      :current-page="currentPage"
      :next-text="nextText"
      :next-icon="nextIcon"
      :page-count="pageCount"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Total from './components/total.vue'
import { props } from './props'
import Pager from './components/pager.vue'
import Prev from './components/prev.vue'
import Next from './components/next.vue'

export default defineComponent({
  name: 'VarPagination',
  components: {
    Total,
    Pager,
    Prev,
    Next,
  },
  props,
  setup(props) {
    /** 总共的页数 */

    const pageCount = computed(() => Math.ceil(props.total / props.pageSize))
    return {
      pageCount,
    }
  },
})
</script>

<style lang="less">
@import './pagination.less';
</style>
