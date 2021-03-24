<template>
  <span>Vue micro app</span>
  <img :src="imageUrl" />
</template>

<script lang="ts">
import image from "./image.jpg";

export default {
  data: () => {
    return {
      imageUrl: image,
    };
  },
};
</script>
