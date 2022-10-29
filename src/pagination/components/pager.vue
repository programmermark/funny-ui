<template>
  <ul :class="classes(n())" @click="onPagerClick" @keyup.enter="onEnter">
    <li
      v-if="pageCount > 0"
      :class="[currentPage === 1 && 'is-active', disabled && 'is-disabled']"
      :aria-current="currentPage === 1"
      :tabindex="tabindex"
    >
      1
    </li>
    <li
      v-if="showPrevMore"
      :class="['btn-quickprev', disabled && 'is-disabled']"
      :tabindex="tabindex"
      @mouseenter="onMouseEnter(true)"
      @mouseleave="quickPrevHover = false"
      @focus="onFocus(true)"
      @blur="quickPrevFocus = false"
    >
      <fac-icon
        v-if="quickPrevHover || quickPrevFocus"
        class="icon"
        name="chevron-double-left"
      />
      <fac-icon v-else name="dots-horizontal" />
    </li>
    <li
      v-for="pager in pagers"
      :class="[currentPage === pager && 'is-active', disabled && 'is-disabled']"
      :key="pager"
      :tabindex="tabindex"
    >
      {{ pager }}
    </li>
    <li
      v-if="showNextMore"
      :class="['btn-quicknext', disabled && 'is-disabled']"
      :tabindex="tabindex"
      @mouseenter="onMouseEnter()"
      @mouseleave="quickNextHover = false"
      @focus="onFocus()"
      @blur="quickNextFocus = false"
    >
      <fac-icon
        v-if="quickNextHover || quickNextFocus"
        class="icon"
        name="chevron-double-right"
      />
      <fac-icon v-else name="dots-horizontal" />
    </li>
    <li :aria-current="currentPage === pageCount" :tabindex="tabindex">
      {{ pageCount }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue'
import { createNamespace } from '../../utils/components'
import FacIcon from '../../icon/Icon.vue'

const { n, classes } = createNamespace('pager')

export default defineComponent({
  name: 'FacPaginationPager',
  components: {
    FacIcon,
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pagerCount: {
      type: Number,
      default: 7,
    },
    pageCount: {
      type: Number,
      required: true,
    },

    disabled: Boolean,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const showPrevMore = ref(false)
    const showNextMore = ref(false)
    const quickPrevHover = ref(false)
    const quickNextHover = ref(false)
    const quickPrevFocus = ref(false)
    const quickNextFocus = ref(false)

    /** 页码列表 */
    const pagers = computed(() => {
      const { pagerCount } = props
      const halfPagerCount = (pagerCount - 1) / 2
      const currentPage = Number(props.currentPage)
      let showPrevMore = false
      let showNextMore = false
      if (props.pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true
        }
        if (currentPage < props.pageCount - halfPagerCount) {
          showNextMore = true
        }
      }
      const array: number[] = []
      if (showPrevMore && !showNextMore) {
        const startPage = props.pageCount - (pagerCount - 2)
        for (let i = startPage; i < props.pageCount; i++) {
          array.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i)
        }
      } else {
        for (let i = 2; i < props.pageCount; i++) {
          array.push(i)
        }
      }
      return array
    })

    const tabindex = computed(() => (props.disabled ? -1 : 0))

    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2
      showPrevMore.value = false
      showNextMore.value = false
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true
        }
      }
    })

    const onMouseEnter = (forward = false) => {
      if (props.disabled) return
      if (forward) {
        quickPrevHover.value = true
      } else {
        quickNextHover.value = true
      }
    }
    const onFocus = (forward = false) => {
      if (forward) {
        quickPrevFocus.value = true
      } else {
        quickNextFocus.value = true
      }
    }
    const onEnter = (e: UIEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'li' &&
        Array.from(target.classList).includes('number')
      ) {
        const newPage = Number(target.textContent)
        if (newPage !== props.currentPage) {
          emit('change', newPage)
        }
      } else if (
        target.tagName.toLowerCase() === 'li' &&
        Array.from(target.classList).includes('more')
      ) {
        onPagerClick(e)
      }
    }
    const onPagerClick = (event: UIEvent) => {
      const target = event.target as HTMLElement
      if (target.tagName.toLowerCase() === 'ul' || props.disabled) {
        return
      }
      let newPage = Number(target.textContent)
      const { currentPage } = props
      const pagerCountOffset = props.pagerCount - 2
      if (target.className.includes('more')) {
        if (target.className.includes('quickprev')) {
          newPage = currentPage - pagerCountOffset
        } else if (target.className.includes('quicknext')) {
          newPage = currentPage + pagerCountOffset
        }
      }
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1
        }
        if (newPage > props.pageCount) {
          newPage = props.pageCount
        }
      }
      if (newPage !== currentPage) {
        emit('change', newPage)
      }
    }

    return {
      n,
      classes,
      pagers,
      tabindex,
      showPrevMore,
      showNextMore,
      quickPrevHover,
      quickNextHover,
      quickPrevFocus,
      quickNextFocus,
      onMouseEnter,
      onFocus,
      onEnter,
      onPagerClick,
    }
  },
})
</script>

<style lang="less">
@import '../pagination.less';
</style>
