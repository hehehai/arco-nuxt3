import { fileURLToPath } from 'node:url'
import { addComponent, addComponentsDir, defineNuxtModule } from '@nuxt/kit'

const matchComponents = [
  {
    name: 'AnchorLink',
    componentDir: 'anchor',
  },
  {
    name: 'AvatarGroup',
    componentDir: 'avatar',
  },
  {
    name: 'BreadcrumbItem',
    componentDir: 'breadcrumb',
  },
  {
    name: 'ButtonGroup',
    componentDir: 'button',
  },
  {
    name: ['CardMeta', 'CardGrid'],
    componentDir: 'card',
  },
  {
    name: 'CarouselItem',
    componentDir: 'carousel',
  },
  {
    name: 'CascaderPanel',
    componentDir: 'cascader',
  },
  {
    name: 'CheckboxGroup',
    componentDir: 'checkbox',
  },
  {
    name: 'CollapseItem',
    componentDir: 'collapse',
  },
  {
    name: ['WeekPicker', 'MonthPicker', 'YearPicker', 'QuarterPicker', 'RangePicker'],
    componentDir: 'date-picker',
  },
  {
    name: 'DescriptionsItem',
    componentDir: 'descriptions',
  },
  {
    name: ['Doption', 'Dgroup', 'Dsubmenu', 'DropdownButton'],
    componentDir: 'dropdown',
  },
  {
    name: 'FormItem',
    componentDir: 'form',
  },
  {
    name: ['Col', 'Row', 'GridItem'],
    componentDir: 'grid',
  },
  {
    name: ['ImagePreview', 'ImagePreviewGroup'],
    componentDir: 'image',
  },
  {
    name: ['InputGroup', 'InputSearch', 'InputPassword'],
    componentDir: 'input',
  },

  {
    name: ['LayoutHeader', 'LayoutContent', 'LayoutFooter', 'LayoutSider'],
    componentDir: 'layout',
  },
  {
    name: ['ListItem', 'ListItemMeta'],
    componentDir: 'list',
  },
  {
    name: ['MenuItem', 'MenuItemGroup', 'SubMenu'],
    componentDir: 'menu',
  },
  {
    name: 'RadioGroup',
    componentDir: 'radio',
  },
  {
    name: ['Option', 'Optgroup'],
    componentDir: 'select',
  },

  {
    name: ['SkeletonLine', 'SkeletonShape'],
    componentDir: 'skeleton',
  },
  {
    name: 'Countdown',
    componentDir: 'statistic',
  },
  {
    name: 'Step',
    componentDir: 'steps',
  },
  {
    name: ['Thead', 'Td', 'Th', 'Tr', 'Tbody', 'TableColumn'],
    componentDir: 'table',
  },
  {
    name: 'TagGroup',
    componentDir: 'tag',
  },
  {
    name: 'TabPane',
    componentDir: 'tabs',
  },
  {
    name: 'TimelineItem',
    componentDir: 'timeline',
  },
  {
    name: ['TypographyParagraph', 'TypographyTitle', 'TypographyText'],
    componentDir: 'typography',
  },
]

export default defineNuxtModule<{
  icon: boolean
  prefix: string
}>({
  setup(options, nuxt) {
    const prefix = options.prefix ?? 'a'

    if (options.icon) {
      addComponentsDir({
        path: fileURLToPath(
          new URL('../node_modules/@arco-design/web-vue/es/icon', import.meta.url),
        ),
        pattern: '*/index.js',
      })
    }
    addComponentsDir({
      path: fileURLToPath(
        new URL('../node_modules/@arco-design/web-vue/es', import.meta.url),
      ),
      pattern: ['*/index.js'],
      ignore: ['icon'],
      prefix,
    })

    matchComponents.forEach((component) => {
      addComponent({
        name: prefix.toUpperCase() + component.name,
        filePath: fileURLToPath(
          new URL(`../node_modules/@arco-design/web-vue/es/${component.componentDir}/index.js`, import.meta.url),
        ),
      })
    })

    nuxt.options.css.push('@arco-design/web-vue/es/index.css')
  },
})
