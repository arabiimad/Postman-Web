<template>
  <div class="card p-4 mt-4">
    <h2>Tester une API</h2>

    <form @submit.prevent="sendRequest">
      <div class="form-group">
        <label>URL de l'API :</label>
        <input v-model="url" type="text" class="form-control" placeholder="https://example.com/api">
      </div>

      <div class="form-group mt-2">
        <label>Méthode HTTP :</label>
        <select v-model="method" class="form-control">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>

      <div class="form-group mt-2">
        <label>Type de contenu :</label>
        <select v-model="contentType" class="form-control">
          <option value="json">JSON</option>
          <option value="params">Paramètres</option>
        </select>
      </div>

      <div v-if="contentType === 'json'" class="form-group mt-2">
        <label>Corps JSON :</label>
        <textarea v-model="jsonBody" class="form-control" rows="3"></textarea>
      </div>

      <div v-if="contentType === 'params'" class="mt-2">
        <h5>Paramètres :</h5>
        <div v-for="(param, index) in params" :key="index" class="d-flex mb-2">
          <input v-model="param.key" class="form-control me-2" placeholder="Clé">
          <input v-model="param.value" class="form-control me-2" placeholder="Valeur">
          <button type="button" class="btn btn-danger" @click="removeParam(index)">x</button>
        </div>
        <button type="button" class="btn btn-primary mt-2" @click="addParam">+ Ajouter</button>
      </div>

      <button type="submit" class="btn btn-success mt-3">Envoyer</button>
    </form>

    <ResponseDisplay v-if="response" :response="response" />
  </div>
</template>

<script>
import useApiRequest from '../composables/useApiRequest.js'
import ResponseDisplay from './ResponseDisplay.vue'

export default {
  components: { ResponseDisplay },
  setup() {
    const { url, method, contentType, jsonBody, params, response, sendRequest, addParam, removeParam } = useApiRequest()
    return { url, method, contentType, jsonBody, params, response, sendRequest, addParam, removeParam }
  }
}
</script>
