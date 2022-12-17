<template>
  <Observer>
    asdasd {{ counterStore.count }}
    <button @click="counterStore.increment">Increment</button>

    <TestComponent />
  </Observer>
</template>

<script setup lang="ts">
import { Observer } from "mobx-vue-lite";
import counterStore from "./store/counterStore";
import TestComponent from "./TestComponent.vue";
</script>
