<script setup lang="ts">
const color = useColorMode()
const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
})

function toggleDark() {
  if (color.value === 'dark') {
    isDark.value = false
    color.preference = 'light'
  }
  else {
    isDark.value = true
    color.preference = 'dark'
  }
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
