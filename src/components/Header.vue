<template lang="pug">
  .container
    .row
      .col-2
      .col-8
        h1 Markdown editor
      .col-2
        b-button(@click="toggleMode") Mode
</template>
<script>
export default {
  data() {
    return { mode: "light" };
  },
  methods: {
    toggleMode() {
      if (this.mode === "light") {
        this.mode = "dark";
        document.body.style.backgroundColor = "#888";
        document.body.style.color = "#FFF";
      } else {
        this.mode = "light";
        document.body.style.backgroundColor = "#FFF";
        document.body.style.color = "#000";
      }
    }
  }
};
</script>