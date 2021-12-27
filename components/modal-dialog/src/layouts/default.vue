<template>
  <ModalDialog v-bind="$dialog.props" v-on="$dialog.listeners" />

  <slot /> <!-- or <nuxt /> -->
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>


<style>
</style>
