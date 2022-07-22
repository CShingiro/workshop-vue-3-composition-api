<script setup>
const props = defineProps({
  video: String,
});

props.video;
</script>

<template>
  <div>
    <video :src="video"></video>
  </div>
</template>
