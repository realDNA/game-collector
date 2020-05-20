<template>
<div>
  <div class="info-container">
    <p>{{ rule }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "GameRule",
  props: {
    rule: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
    .info-container {
        width: 200px;
        height: 200px;
        border-style: solid;
    }
</style>
