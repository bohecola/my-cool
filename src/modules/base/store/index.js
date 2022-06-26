import { useAppStore } from './app';

export function useStore() {
  const app = useAppStore();

  return {
    app,
  };
}