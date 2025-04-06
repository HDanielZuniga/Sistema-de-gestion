<template>
  <div>
    <h2>Mensajes recibidos:</h2>
    <ul>
      <li v-for="(mensaje, index) in mensajes" :key="index">
        {{ mensaje }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {  defineProps } from 'vue';
defineProps({
  mensajes: {
    type: Array,
    required: true
  }
});
</script>
