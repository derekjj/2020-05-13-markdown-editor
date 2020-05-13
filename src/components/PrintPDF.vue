<template lang="pug">
  b-button.m-2(variant="success" @click="createPDF") Save as pdf
</template>
<script>
import jsPDF from "jspdf";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "omi"
    };
  },
  computed: {
    ...mapGetters(["text", "md"])
  },
  methods: {
    createPDF() {
      let pdfName = "markdown";
      var doc = new jsPDF();

      var elementHTML = this.md;
      var specialElementHandlers = {
        "#elementH": function() {
          return true;
        }
      };
      doc.fromHTML(elementHTML, 15, 15, {
        width: 170,
        elementHandlers: specialElementHandlers
      });

      // Save the PDF
      doc.save(pdfName + ".pdf");
    }
  }
};
</script>