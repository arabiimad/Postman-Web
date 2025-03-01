<template>
    <div class="mt-4 p-3 border">
      <h5>Réponse de l'API :</h5>
      <pre><code ref="codeBlock" class="json hljs"></code></pre>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, watch } from "vue";
  import hljs from "highlight.js";
  import "highlight.js/styles/atom-one-dark.css"; // Style du code
  
  export default {
    props: ["response"],
    setup(props) {
      const codeBlock = ref(null);
  
      const highlightCode = () => {
        if (codeBlock.value) {
          codeBlock.value.textContent = JSON.stringify(props.response, null, 2);
          hljs.highlightElement(codeBlock.value);
        }
      };
  
      watch(() => props.response, highlightCode);
      onMounted(highlightCode);
  
      return { codeBlock };
    },
  };
  </script>
  