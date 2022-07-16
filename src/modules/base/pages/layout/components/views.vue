<template>
  <div class="app-views"  v-if="!app.loading">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useBase } from "/$/base";

const { app } = useBase();
</script>

<style lang="scss" scoped>
.app-views {
	flex: 1;
	overflow: hidden;
	padding: 0 10px;
	margin-bottom: 10px;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	border-radius: 3px;

	& > div {
		height: 100%;
	}
}
</style>