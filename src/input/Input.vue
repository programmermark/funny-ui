<template>
  <div
    :class="[
      type === 'textarea' ? 'fac-textarea' : 'fac-input',
      disabled && 'is-disabled',
    ]"
    v-bind="containerAttrs"
    :style="containerStyle"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" :class="classes(n('-group__prepend'))">
        <slot name="prepend" />
      </div>

      <div :class="inputWrapperClass">
        <!-- prefix slot -->
        <span v-if="$slots.prefix || prefixIcon" :class="classes(n('prefix'))">
          <span :class="classes(n('prefix-inner'))">
            <slot name="prefix" />
            <fac-icon
              v-if="prefixIcon"
              :name="prefixIcon"
              :class="classes(n('icon'))"
              :size="16"
            >
            </fac-icon>
          </span>
        </span>

        <input
          ref="input"
          :class="classes(n('inner'))"
          v-bind="attrs"
          :value="modelValue"
          :maxlength="maxlength"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="disabled"
          :autocomplete="autocomplete"
          :tabindex="tabindex"
          :placeholder="placeholder"
          :style="inputStyle"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          @keydown="handleKeydown"
        />

        <!-- suffix slot -->
        <span v-if="suffixVisible" :class="classes(n('suffix'))">
          <span :class="classes(n('suffix-inner'))">
            <template
              v-if="!showClear || !showPwdVisible || !isWordLimitVisible"
            >
              <slot name="suffix" />
              <fac-icon
                v-if="suffixIcon"
                :name="suffixIcon"
                :class="classes(n('icon'))"
                :size="16"
              >
              </fac-icon>
            </template>
            <fac-icon
              v-if="showClear"
              :class="classes(n('icon'), n('clear'))"
              name="close-circle-outline"
              :size="16"
              @mousedown.prevent="NOOP"
              @click="clear"
            >
            </fac-icon>
            <fac-icon
              v-if="showPwdVisible"
              :class="classes(n('icon'), n('clear'))"
              :name="passwordIcon"
              :size="16"
              @click="handlePasswordVisible"
            >
            </fac-icon>
            <span v-if="isWordLimitVisible" :class="classes(n('count'))">
              <span :class="classes(n('count-inner'))">
                {{ textLength }} / {{ maxlength }}
              </span>
            </span>
          </span>
        </span>
      </div>

      <!-- append slot -->
      <div v-if="$slots.append" :class="classes(n('-group__append'))">
        <slot name="append" />
      </div>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea
        ref="textarea"
        class="fac-textarea__inner"
        v-bind="attrs"
        :value="modelValue"
        :tabindex="tabindex"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :style="textareaStyle"
        :placeholder="placeholder"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @keydown="handleKeydown"
      />
      <span
        v-if="isWordLimitVisible"
        :style="countStyle"
        :class="classes(n('count'))"
      >
        {{ textLength }} / {{ maxlength }}
      </span>
    </template>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  useAttrs as useRawAttrs,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  toRef,
  shallowRef,
  StyleValue,
  watch,
  useSlots,
} from 'vue'
import { isNil } from 'lodash-es'
import { NOOP } from '@vue/shared'
import { isClient, useResizeObserver } from '@vueuse/core'
import { useAttrs, useCursor } from './hooks'
import FacIcon from '../icon/Icon.vue'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { isKorean, isObject } from '../utils/shared'
import { calcTextareaHeight } from './utils'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const PENDANT_MAP = {
  suffix: 'append',
  prefix: 'prepend',
} as const

const { n, classes } = createNamespace('input')

export default defineComponent({
  name: 'FacInput',
  components: {
    FacIcon,
  },
  props,
  emits: [
    'update:modelValue',
    'input',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'focus',
    'blur',
    'mouseleave',
    'mouseenter',
    'keydown',
    'clear',
  ],
  setup(props, { emit, expose }) {
    const inputWrapperClass = computed(() => {
      return classes(n('wrapper'), [focused, n('is-focus')])
    })

    const instance = getCurrentInstance()!
    const rawAttrs = useRawAttrs()
    const slots = useSlots()

    const containerAttrs = computed(() => {
      const comboBoxAttrs: Record<string, unknown> = {}
      if (props.containerRole === 'combobox') {
        comboBoxAttrs['aria-haspopup'] = rawAttrs['aria-haspopup']
        comboBoxAttrs['aria-owns'] = rawAttrs['aria-owns']
        comboBoxAttrs['aria-expanded'] = rawAttrs['aria-expanded']
      }
      return comboBoxAttrs
    })

    const attrs = useAttrs({
      excludeKeys: computed<string[]>(() => {
        return Object.keys(containerAttrs.value)
      }),
    })

    const input = shallowRef<HTMLInputElement>()
    const textarea = shallowRef<HTMLTextAreaElement>()

    const focused = ref(false)
    const hovering = ref(false)
    const isComposing = ref(false)
    const passwordVisible = ref(false)
    const countStyle = ref<StyleValue>()
    const textareaCalcStyle = shallowRef(props.inputStyle)

    const _ref = computed(() => {
      return input.value || textarea.value
    })

    const passwordIcon = computed(() =>
      passwordVisible.value ? 'eye-outline' : 'eye-off-outline'
    )
    const containerStyle = computed<StyleValue>(() => [
      rawAttrs.style as StyleValue,
      props.inputStyle,
    ])
    const textareaStyle = computed<StyleValue>(() => [
      props.inputStyle,
      textareaCalcStyle.value,
    ])
    const nativeInputValue = computed(() =>
      isNil(props.modelValue) ? '' : String(props.modelValue)
    )
    const showClear = computed(
      () =>
        props.clearable &&
        !props.disabled &&
        !!nativeInputValue.value &&
        (focused.value || hovering.value)
    )
    const showPwdVisible = computed(
      () =>
        props.showPassword &&
        !props.disabled &&
        !!nativeInputValue.value &&
        (!!nativeInputValue.value || focused.value)
    )
    const isWordLimitVisible = computed(
      () =>
        props.showWordLimit &&
        !!attrs.value.maxlength &&
        (props.type === 'text' || props.type === 'textarea') &&
        !props.disabled &&
        !props.showPassword
    )
    const textLength = computed(() => Array.from(nativeInputValue.value).length)
    const inputExceed = computed(
      () =>
        // show exceed style if length of initial value greater then maxlength
        !!isWordLimitVisible.value &&
        textLength.value > Number(attrs.value.maxlength)
    )
    const suffixVisible = computed(
      () =>
        !!slots.suffix ||
        !!props.suffixIcon ||
        showClear.value ||
        props.showPassword ||
        isWordLimitVisible.value
    )

    const [recordCursor, setCursor] = useCursor(input)

    useResizeObserver(textarea, (entries) => {
      if (!isWordLimitVisible.value || props.resize !== 'both') return
      const entry = entries[0]
      const { width } = entry.contentRect
      countStyle.value = {
        /** right: 100% - width + padding(15) + right(6) */
        right: `calc(100% - ${width + 15 + 6}px)`,
      }
    })

    const resizeTextarea = () => {
      const { type, autosize } = props

      if (!isClient || type !== 'textarea') return
      if (autosize) {
        const minRows = isObject(autosize) ? autosize.minRows : undefined
        const maxRows = isObject(autosize) ? autosize.maxRows : undefined
        textareaCalcStyle.value = {
          ...calcTextareaHeight(textarea.value!, minRows, maxRows),
        }
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value!).minHeight,
        }
      }
    }

    const setNativeInputValue = () => {
      const input = _ref.value
      if (!input || input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }

    const calcIconOffset = (place: 'prefix' | 'suffix') => {
      const { el } = instance.vnode
      if (!el) return
      const elList = Array.from(
        (el as Element).querySelectorAll<HTMLSpanElement>(
          `.${classes(n('prefix'))}`
        )
      )
      const target = elList.find((item) => item.parentNode === el)
      if (!target) return

      const pendant = PENDANT_MAP[place]

      if (slots[pendant]) {
        target.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${
          el.querySelector(`.${classes(n(`-group_${pendant}`))}`).offsetWidth
        }px)`
      } else {
        target.removeAttribute('style')
      }
    }

    const updateIconOffset = () => {
      calcIconOffset('prefix')
      calcIconOffset('suffix')
    }

    const handleInput = async (event: Event) => {
      recordCursor()

      const { value } = event.target as TargetElement

      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (isComposing.value) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (value === nativeInputValue.value) {
        setNativeInputValue()
        return
      }

      emit('update:modelValue', value)
      emit('input', value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      await nextTick()
      setNativeInputValue()
      setCursor()
    }

    const handleChange = (event: Event) => {
      emit('change', (event.target as TargetElement).value)
    }

    const handleCompositionStart = (event: CompositionEvent) => {
      emit('compositionstart', event)
      isComposing.value = true
    }

    const handleCompositionUpdate = (event: CompositionEvent) => {
      emit('compositionupdate', event)
      const text = (event.target as HTMLInputElement)?.value
      const lastCharacter = text[text.length - 1] || ''
      isComposing.value = !isKorean(lastCharacter)
    }

    const handleCompositionEnd = (event: CompositionEvent) => {
      emit('compositionend', event)
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }

    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value
      focus()
    }

    const focus = async () => {
      // see: https://github.com/ElemeFE/element/issues/18573
      await nextTick()
      _ref.value?.focus()
    }

    const handleFocus = (event: FocusEvent) => {
      focused.value = true
      emit('focus', event)
    }

    const handleBlur = (event: FocusEvent) => {
      focused.value = false
      emit('blur', event)
    }

    const handleMouseLeave = (evt: MouseEvent) => {
      hovering.value = false
      emit('mouseleave', evt)
    }

    const handleMouseEnter = (evt: MouseEvent) => {
      hovering.value = true
      emit('mouseenter', evt)
    }

    const handleKeydown = (evt: KeyboardEvent) => {
      emit('keydown', evt)
    }

    const select = () => {
      _ref.value?.select()
    }

    const clear = () => {
      emit('update:modelValue', '')
      emit('change', '')
      emit('clear')
      emit('input', '')
    }

    watch(
      () => props.modelValue,
      () => {
        nextTick(() => resizeTextarea())
      }
    )

    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    watch(nativeInputValue, () => setNativeInputValue())

    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    watch(
      () => props.type,
      async () => {
        await nextTick()
        setNativeInputValue()
        resizeTextarea()
        updateIconOffset()
      }
    )

    onMounted(() => {
      setNativeInputValue()
      updateIconOffset()
      nextTick(resizeTextarea)
    })

    onUpdated(() => {
      nextTick(updateIconOffset)
    })

    expose({
      /** @description HTML input element */
      input,
      /** @description HTML textarea element */
      textarea,
      /** @description HTML element, input or textarea */
      ref: _ref,
      /** @description style of textarea. */
      textareaStyle,

      /** @description from props (used on unit test) */
      autosize: toRef(props, 'autosize'),

      /** @description HTML input element native method */
      focus,
      /** @description HTML input element native method */
      blur,
      /** @description HTML input element native method */
      select,
      /** @description clear input value */
      clear,
      /** @description resize textarea. */
      resizeTextarea,
    })

    return {
      NOOP,
      n,
      classes,
      input,
      textarea,
      inputWrapperClass,
      passwordVisible,
      passwordIcon,
      containerStyle,
      textareaStyle,
      showPwdVisible,
      inputExceed,
      suffixVisible,
      showClear,
      isWordLimitVisible,
      textLength,
      countStyle,
      attrs,
      containerAttrs,
      resizeTextarea,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleInput,
      handleFocus,
      handleBlur,
      handleMouseLeave,
      handleMouseEnter,
      handleChange,
      handleKeydown,
      select,
      clear,
      handlePasswordVisible,
    }
  },
})
</script>

<style lang="less">
@import './input.less';
</style>
