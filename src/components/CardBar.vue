<template>
  <div>
    <h2 class="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      {{ title }}
    </h2>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      <CardBarItem
        v-for="(item, index) in items"
        :key="index"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

  import CardBarItem from '@/components/CardBarItem.vue';

  type CardItemProps = {
    imageUrl: string;
    title: string;
    description: string;
  };

  defineProps<{
    title: string;
    items: CardItemProps[];
  }>();
</script>
