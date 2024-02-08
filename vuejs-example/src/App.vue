<script setup lang="ts">
defineProps(['foo']);
const emit = defineEmits(['clicked']);

function emitEvent() {
  console.log('clicked from vue component');
  let obj = { name: 'carla' };
  emit('clicked', obj);
}
</script>

<template>
  <a href="https://vuejs.org/" target="_blank">
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </a>
  <button @click="emitEvent">
    {{ foo || 'foo is null' }}
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<!-- https://dev.to/nurlan_tl/tips-to-create-web-components-using-vue-3-ts-vite-3a7a -->