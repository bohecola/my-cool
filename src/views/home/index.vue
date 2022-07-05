<template>
  home
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useCool } from '/@/cool';

export default defineComponent({
  setup() {
    const { service } = useCool();

    onMounted(async () => {
      await service.User.getUserList();
      await service.Role.getRoleList();
      await service.Menu.getMenuList();
    });

    return {};
  }
});
</script>
