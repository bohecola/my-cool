<template>
  home
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useCool } from '/@/cool';

export default defineComponent({
  setup() {
    const { service } = useCool();

    return {};
  }
});
</script>
