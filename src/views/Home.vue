<template>
  <main class="flex flex-1 p-4 gap-5">
    <aside class="flex w-64 flex-col">
      <h1 class="text-3xl bg-test">
        Leaderboards
      </h1>
      <div class="flex-auto bg-color-red">

      </div>
    </aside>
    <div class="flex flex-col">
      <section class="flex flex-col items-center pt-8 flex-auto bg">
        <h1 class="text-3xl">
          Teams
        </h1>
        <div @drag="moveCarousel" class="flex-auto p-3 gap-3 flex flex-row">
          <div ref="testpos" :style="contentPosition" class="bg-test h-48 w-48"></div>
          <div :style="contentPosition" class="bg-test h-48 w-48"></div>
          <div :style="contentPosition" class="bg-test h-48 w-48"></div>
          <div :style="contentPosition" class="bg-test h-48 w-48"></div>
        </div>
      </section>
      <section class="flex flex-col items-center pt-8 flex-auto bg">
        <h1 class="text-3xl">
          Tournaments
        </h1>
        <div class="flex-auto p-3 gap-3 flex flex-row">
          <div class="bg-test h-48 w-48"></div>
          <div class="bg-test h-48 w-48"></div>
          <div class="bg-test h-48 w-48"></div>
          <div class="bg-test h-48 w-48"></div>
        </div>
      </section>
    </div>
    <aside class="flex w-64 flex-col">
      <h1 class="text-3xl">
        Statistics
      </h1>
    </aside>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

  let testpos: Ref<Element | null> = ref(null); 
  let translateX: Ref<number | undefined> = ref(undefined); 

  const contentPosition = computed(() => {
    let elem = testpos.value?.getBoundingClientRect().left;
    if(!translateX.value) return;
    if(!elem) return;
    let newpos: number = translateX.value - elem;
    return { transform: `translate(${newpos}px, 0)` }
  });

  function moveCarousel(event: DragEvent){
    translateX.value = event.screenX;
  }
</script>

