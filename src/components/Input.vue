<template lang="pug">
  .row
    .col.text-left
      b-form-textarea.vh-80(
        id="textarea"
        v-model="input"
        placeholder="Enter something..."
        @input="setText(input)"
        no-resize)
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      input: ""
    };
  },
  created() {
    this.input = this.text;
  },
  computed: {
    ...mapGetters(["text"])
  },
  methods: {
    ...mapActions(["setText"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vh-80 {
  height: 80vh;
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
