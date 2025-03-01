<template>
  <div id="app">
    <AppNavbar />
    <div class="container">
      <ApiForm />
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import ApiForm from './components/ApiForm.vue'

export default {
  components: {
    AppNavbar,
    ApiForm
  }
}
</script>
