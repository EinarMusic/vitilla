<script setup></script>

<template>
  <div>
    <router-view />

    <div style="display: flex;justify-content: space-between;">
      <router-link to="/"><span>Calender</span></router-link>
      <router-link to="/stand"><span>Standing</span></router-link>
      <router-link to="/box"><span>Box Score</span></router-link>
    </div>

  </div>
</template>

<style scoped></style>
