import { defineStore } from "pinia";
import { ref } from "vue";
import { config } from '/@/cool';

export const useAppStore = defineStore('app', function () {
  const info = ref({
    ...config.app
  });

  return {
    info
  };
});