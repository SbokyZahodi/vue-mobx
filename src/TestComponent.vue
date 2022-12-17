<template>
  <Observer> Another component {{ counterStore.count }} </Observer>
</template>

<script lang="ts" setup>
import { Observer } from "mobx-vue-lite";
import counterStore from "./store/counterStore";
</script>
