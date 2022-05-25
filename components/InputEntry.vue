<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <a-input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      m="t-5" w="250px"
      @keydown.enter="go"
    />
    <div mt-3>
      <a-button
        type="primary"
        :disabled="!name"
        @click="go"
      >
        GO
      </a-button>
    </div>
  </div>
</template>
