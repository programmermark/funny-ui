import { PropType } from 'vue'

/**
 * 校验 pagination size
 * @param size 校验pagination size
 * @returns
 */
function sizeValidator(size: string): boolean {
  return ['default', 'small'].includes(size)
}

/**
 * 校验 pagerCount
 * @param pagerCount 校验 pagerCount
 * @returns
 */
function pagerCountValidator(pagerCount: number): boolean {
  return (
    Number.isInteger(pagerCount) &&
    pagerCount >= 5 &&
    pagerCount <= 21 &&
    pagerCount % 2 !== 0
  )
}

export const props = {
  /** 当前页码，支持双向数据绑定，使用：v-model:current-page */
  currentPage: {
    type: Number,
    default: 1,
  },
  /** 默认当前页码，但是优先级低于currentPage，会被currentPage覆盖 */
  defaultCurrentPage: {
    type: Number,
  },
  /** 每页条数，支持双向数据绑定，使用：v-model:page-size */
  pageSize: {
    type: Number,
    default: 10,
  },
  /** 每页显示个数选择器的选项设置 */
  pageSizes: {
    type: Array as PropType<Array<number>>,
    default: () => [10, 20, 50, 100],
  },
  /** 分页器的大小 */
  size: {
    type: String as PropType<'default' | 'small'>,
    default: 'default',
    validator: sizeValidator,
  },
  /** 总条目数 */
  total: {
    type: Number,
    default: 100,
  },
  /** 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠 */
  pagerCount: {
    type: Number,
    default: 7,
    validator: pagerCountValidator,
  },
  /** 替代图标显示的上一页文字 */
  prevText: {
    type: String,
  },
  /** 上一页的图标， 比 prev-text 优先级更高 */
  prevIcon: {
    type: String,
    default: 'chevron-left',
  },
  /** 替代图标显示的下一页文字 */
  nextText: {
    type: String,
  },
  /** 下一页的图标， 比 next-text 优先级更高 */
  nextIcon: {
    type: String,
    default: 'chevron-right',
  },
  /** 是否禁用分页 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 只有一页时是否隐藏 */
  hideOnSinglePage: {
    type: Boolean,
    default: false,
  },
}
