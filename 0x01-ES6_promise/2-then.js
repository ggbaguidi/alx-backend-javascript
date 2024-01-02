export default function handleResponseFromAPI(promise) {
    promise.then((response) => {
      console.log('Got a response from the API'); // Log for every resolution
      return { status: 200, body: 'success' }; // Return desired object on resolve
    })
    .catch((error) => {
      console.log('Got a response from the API'); // Log for every resolution
      return new Error(); // Return empty error object on reject
    });
  }
  