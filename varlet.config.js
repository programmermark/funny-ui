module.exports = {
  logo: './logo.svg',
  useMobile: false,
  highlight: {
    /**
     * @see https://highlightjs.org/
     */
    style:
      '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css',
  },
  pc: {
    header: {
      darkMode: null,
      playground: null,
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
          'en-US': 'Developer guide',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
          'en-US': 'Basic Introduce',
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '快速开始',
          'en-US': 'Quickstart',
        },
        doc: 'quickstart',
        type: 3,
      },
      {
        text: {
          'zh-CN': '按需引入',
          'en-US': 'Import on demand',
        },
        doc: 'importOnDemand',
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
          'en-US': 'Basic Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Icon 图标',
          'en-US': 'Icon',
        },
        doc: 'Icon',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Pagination 分页',
          'en-US': 'Pagination',
        },
        doc: 'Pagination',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Input 输入框',
          'en-US': 'Input',
        },
        doc: 'Input',
        type: 2,
      },
    ],
  },
  mobile: {
    header: {
      darkMode: null,
    },
  },
}
