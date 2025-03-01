import { ref } from 'vue'

export default function useApiRequest() {
  const url = ref('')
  const method = ref('GET')
  const contentType = ref('json')
  const jsonBody = ref('')
  const params = ref([{ key: '', value: '' }])
  const response = ref(null)

  function addParam() {
    params.value.push({ key: '', value: '' })
  }

  function removeParam(index) {
    params.value.splice(index, 1)
  }

  async function sendRequest() {
    let finalUrl = url.value
    let fetchOptions = { method: method.value, headers: { "Content-Type": "application/json" } }

    try {
      if (contentType.value === 'params') {
        let queryParams = params.value.map(p => `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`).join('&')
        if (queryParams) finalUrl += '?' + queryParams
      } else if (method.value !== 'GET') {
        fetchOptions.body = JSON.stringify(JSON.parse(jsonBody.value || '{}'))
      }

      const res = await fetch(finalUrl, fetchOptions)
      response.value = await res.json()
    } catch (error) {
      response.value = { error: "Erreur lors de la requête." }
    }
  }

  return { url, method, contentType, jsonBody, params, response, sendRequest, addParam, removeParam }
}
