<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div inline-flex m="y-3">
    <a-button type="primary" shape="circle" @click="dec()">
      <template #icon>
        <icon-minus />
      </template>
    </a-button>
    <div font="mono" w="15" m-auto inline-block>
      {{ count }}
    </div>
    <a-button type="primary" shape="circle" @click="inc()">
      <template #icon>
        <icon-plus />
      </template>
    </a-button>
  </div>
</template>
