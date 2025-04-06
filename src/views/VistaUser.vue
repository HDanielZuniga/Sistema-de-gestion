<template>
    <h1>Esta es mi vista Usuarios</h1>
    <HelloWorldVue :mensajes="mensajes" />
  </template>
  
  <script setup>
  import HelloWorldVue from "@/components/HelloWorld.vue";
  
  const mensajes = [
    "Hola, soy la vista usuarios",
    "Bienvenido al sistema",
    "Este es un mensaje desde el componente padre"
  ];
  </script>
  