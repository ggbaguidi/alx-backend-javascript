function handleResponseFromAPI(promise) {
    console.log('Got a response from the API'); // Log for every resolution
    promise.then((response) => {
      return { status: 200, body: 'success' }; // Return desired object on resolve
    })
    .catch((error) => {
      return new Error(); // Return empty error object on reject
    });
}

export default handleResponseFromAPI;
