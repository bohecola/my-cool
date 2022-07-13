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
      const res = await Promise.allSettled([
        service.user.getUserList(),
        service.role.getRoleList(),
        service.menu.getMenuList()
      ]);
      console.log(res);
    });

    return {};
  }
});
</script>
