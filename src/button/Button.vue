<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    :class="buttonClass"
    :style="buttonStyle"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <div :class="buttonContentClass">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import Ripple from '../ripple'

const { n, classes } = createNamespace('button')

export default defineComponent({
  name: 'FacButton',
  directives: { Ripple },
  props,
  setup(props) {
    const { type, size, disabled, text, block, round, outline, textColor, color } = toRefs(props)

    const buttonClass = computed(() => {
      return classes(
        n(),
        'var--box',
        n(`--${size.value}`),
        [block, `var--flex ${n('--block')}`, 'var--inline-flex'],
        [disabled.value, n('--disabled')],
        [text.value, `${n(`--text-${type.value}`)} ${n('--text')}`, `${n(`--${type.value}`)} var-elevation--2`],
        [text.value && disabled.value, n('--text-disabled')],
        [round.value, n('--round')],
        [outline.value, n('--outline')]
      )
    })
    const buttonContentClass = computed(() => {
      return classes(n('content'))
    })
    const buttonStyle = computed(() => {
      return {
        color: textColor.value,
        background: color.value,
      }
    })

    const handleClick = (e: Event) => {
      const { disabled, onClick } = props
      if (!onClick || disabled) {
        return
      }
      onClick(e)
    }

    const handleTouchstart = (e: Event) => {
      const { disabled, onTouchstart } = props
      if (!onTouchstart || disabled) {
        return
      }
      onTouchstart(e)
    }

    return {
      buttonClass,
      buttonContentClass,
      buttonStyle,
      handleClick,
      handleTouchstart,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import './button';
</style>
