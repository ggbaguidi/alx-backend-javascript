function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  if (promise) {
    return {
      status: 200,
      body: 'success',
    };
  }
  return (new Error());
}

export default handleResponseFromAPI;
