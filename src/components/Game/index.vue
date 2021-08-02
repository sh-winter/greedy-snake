<!--
 * @Author: your name
 * @Date: 2021-07-25 11:41:01
 * @LastEditTime: 2021-08-02 21:49:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \greedy-snake\src\components\Game.vue
-->
<template>
  <div ref="gameContainer" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useGame from './game'

export default defineComponent({
  name: 'Game',
  setup: () => {
    const gameContainer = ref<HTMLElement>()
    const game = useGame(gameContainer)

    return { gameContainer }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
