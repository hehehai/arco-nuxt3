import { fileURLToPath } from 'node:url'
import { addComponent, addComponentsDir, defineNuxtModule } from '@nuxt/kit'

const matchComponents = [
  {
    names: ['AnchorLink'],
    componentDir: 'anchor',
  },
  {
    names: ['AvatarGroup'],
    componentDir: 'avatar',
  },
  {
    names: ['BreadcrumbItem'],
    componentDir: 'breadcrumb',
  },
  {
    names: ['ButtonGroup'],
    componentDir: 'button',
  },
  {
    names: ['CardMeta', 'CardGrid'],
    componentDir: 'card',
  },
  {
    names: ['CarouselItem'],
    componentDir: 'carousel',
  },
  {
    names: ['CascaderPanel'],
    componentDir: 'cascader',
  },
  {
    names: ['CheckboxGroup'],
    componentDir: 'checkbox',
  },
  {
    names: ['CollapseItem'],
    componentDir: 'collapse',
  },
  {
    names: ['WeekPicker', 'MonthPicker', 'YearPicker', 'QuarterPicker', 'RangePicker'],
    componentDir: 'date-picker',
  },
  {
    names: ['DescriptionsItem'],
    componentDir: 'descriptions',
  },
  {
    names: ['Doption', 'Dgroup', 'Dsubmenu', 'DropdownButton'],
    componentDir: 'dropdown',
  },
  {
    names: ['FormItem'],
    componentDir: 'form',
  },
  {
    names: ['Col', 'Row', 'GridItem'],
    componentDir: 'grid',
  },
  {
    names: ['ImagePreview', 'ImagePreviewGroup'],
    componentDir: 'image',
  },
  {
    names: ['InputGroup', 'InputSearch', 'InputPassword'],
    componentDir: 'input',
  },

  {
    names: ['LayoutHeader', 'LayoutContent', 'LayoutFooter', 'LayoutSider'],
    componentDir: 'layout',
  },
  {
    names: ['ListItem', 'ListItemMeta'],
    componentDir: 'list',
  },
  {
    names: ['MenuItem', 'MenuItemGroup', 'SubMenu'],
    componentDir: 'menu',
  },
  {
    names: ['RadioGroup'],
    componentDir: 'radio',
  },
  {
    names: ['Option', 'Optgroup'],
    componentDir: 'select',
  },

  {
    names: ['SkeletonLine', 'SkeletonShape'],
    componentDir: 'skeleton',
  },
  {
    names: ['Countdown'],
    componentDir: 'statistic',
  },
  {
    names: ['Step'],
    componentDir: 'steps',
  },
  {
    names: ['Thead', 'Td', 'Th', 'Tr', 'Tbody', 'TableColumn'],
    componentDir: 'table',
  },
  {
    names: ['TagGroup'],
    componentDir: 'tag',
  },
  {
    names: ['TabPane'],
    componentDir: 'tabs',
  },
  {
    names: ['TimelineItem'],
    componentDir: 'timeline',
  },
  {
    names: ['TypographyParagraph', 'TypographyTitle', 'TypographyText'],
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
      component.names.forEach((name) => {
        addComponent({
          name: prefix.toUpperCase() + name,
          filePath: fileURLToPath(
            new URL(`../node_modules/@arco-design/web-vue/es/${component.componentDir}/index.js`, import.meta.url),
          ),
        })
      })
    })

    nuxt.options.css.push('@arco-design/web-vue/es/index.css')
  },
})
