<script setup lang="ts">
const props = defineProps<{pkg: string; path: string}>();

const demoPath = computed(() => (props.pkg && props.path ? `/${props.pkg}/${props.path}` : ''));
const error = ref(null);

onErrorCaptured(err => {
  error.value = err;
});

const GITHUB_BLOB_URL = 'https://github.com/chodocs/chodocs/blob/main/docs';
const URL = `${GITHUB_BLOB_URL}${demoPath.value}`;
</script>

<template>
  <div :key="demoPath" class="demo wide">
    <p v-if="demoPath" class="demo-source-link">
      <a :href="URL" target="_blank">source</a>
    </p>
    <client-only>
      <Suspense>
        <slot />
        <template #fallback>Loading demo...</template>
      </Suspense>
    </client-only>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>
