<template>
  <div class="app">
    {{demo}}
    <button @click="handleAdd">增加</button>
    <button @click="handleJian">减少</button>
    <ul>
      <li v-for="v in dataList" :key="v">{{v}}</li>
    </ul>
  </div>
</template>

<style lang="scss">
.app {
    color: red;
}
</style>


