function handleResponseFromAPI(promise) {
  console.log('Got a response from the API'); // Log for every resolution
  if (promise) {
    return {
      status: 200,
      body: 'Success',
    };
  }
  return (new Error());
}

export default handleResponseFromAPI;
