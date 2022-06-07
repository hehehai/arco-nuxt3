<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(computed(() => data.value.startAt))
</script>

<template>
  <div text-gray:80>
    <span font-500 text-gray>{{ data.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
    <a-radio-group>
      <a-radio>1</a-radio>
      <a-radio>2</a-radio>
    </a-radio-group>
    <a-divider />
    <a-space size="large">
      <a-button-group type="primary">
        <a-button> copy </a-button>
        <a-button> cut </a-button>
        <a-button> find </a-button>
      </a-button-group>
      <a-button-group type="primary" status="warning">
        <a-button>
          <template #icon>
            <icon-heart-fill />
          </template>
        </a-button>
        <a-button>
          <template #icon>
            <icon-star-fill />
          </template>
        </a-button>
        <a-button>
          <template #icon>
            <icon-thumb-up-fill />
          </template>
        </a-button>
      </a-button-group>
      <a-button-group size="small" disabled>
        <a-button> prev </a-button>
        <a-button> next </a-button>
      </a-button-group>
    </a-space>
  </div>
</template>
