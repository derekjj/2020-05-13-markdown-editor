<template lang="pug">
  .row
    .col.text-left
      #md
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["text", "md"])
  },
  mounted() {
    document.getElementById("md").innerHTML = this.md;
  },
  watch: {
    md: val => {
      document.getElementById("md").innerHTML = val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vh-textarea {
  height: 85vh;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
