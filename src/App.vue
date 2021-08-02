<!--
 * @Author: your name
 * @Date: 2021-07-25 11:41:01
 * @LastEditTime: 2021-08-02 22:11:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \greedy-snake\src\App.vue
-->
<template>
  <Game />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Game from './components/Game/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Game
  }
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}
</style>
