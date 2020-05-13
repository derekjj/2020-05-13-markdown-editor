<template lang="pug">
  #app
    .container-flex.pl-3.pr-3
      .row
        .col-12
          Header
      .row.m-0
        .col-lg-6
          Input
        .col-lg-6.border
          Display
      .row.m-0
        .col-lg-12
          PrintPDF
</template>
<script>
import Header from './components/Header.vue'
import Input from './components/Input.vue'
import Display from './components/Display.vue'
import PrintPDF from './components/PrintPDF.vue'

export default {
  name: 'App',
  components: {
    Header,
    Input,
    Display,
    PrintPDF
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
