function handleResponseFromAPI(promise) {
  console.log('Got a response from the API'); // Log for every resolution
  promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error());
}

export default handleResponseFromAPI;
