<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="flex items-center gap-4">
    <img alt="League of Battles logo" class="logo" src="@/assets/logo.png" width="100" height="100" />
    <nav class="flex items-center gap-4 h-32">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Create Team</RouterLink>
      <RouterLink to="/about">Find Match</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

