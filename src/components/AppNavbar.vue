<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand" href="#">Web Postman Vue</a>
      <button  data-cy="toggle-theme" @click="toggleTheme" class="btn btn-outline-light">
        {{ darkMode ? "🌙 Mode Sombre" : "☀️ Mode Clair" }}
      </button>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "AppNavbar",
  setup() {
    const darkMode = ref(false);

    const toggleTheme = () => {
      darkMode.value = !darkMode.value;
      document.body.classList.toggle("dark-mode");

      // ✅ Sauvegarde de l'état dans LocalStorage
      localStorage.setItem("theme", darkMode.value ? "dark" : "light");
    };

    // ✅ Charger l'état du mode sombre au démarrage
    onMounted(() => {
      darkMode.value = localStorage.getItem("theme") === "dark";
      if (darkMode.value) {
        document.body.classList.add("dark-mode");
      }
    });

    return { darkMode, toggleTheme };
  },
};
</script>

<style>
/* ✅ Mode sombre appliqué à tout le site */
.dark-mode {
  background: #121212;
  color: white;
}

/* ✅ Mode sombre sur la navbar */
.dark-mode .navbar {
  background-color: #222 !important;
}

/* ✅ Mode sombre sur les cartes Bootstrap */
.dark-mode .card {
  background-color: #1e1e1e !important;
  color: white;
  border: 1px solid #333;
}
</style>
