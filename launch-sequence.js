/*
// async function so that we can use the await keyword
async function submitCode() {
  try {
    let logs = await fetch("/api/logs", {
      headers: { 
      'Accept': 'application/json' 
      }
    });
    console.log(logs);
    const logsData = await logs.json();
    console.log(logsData)
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

submitCode(); // calls the function above to run your code
*/

// First, register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      console.log("ServiceWorker registration successful:", registration.scope);
    } catch (error) {
      console.error("ServiceWorker registration failed:", error);
    }
  });
}

// async function so that we can use the await keyword
/*async function submitCode() {
  try {
    const response = await fetch("/api/personnel/11");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
*/


// Wait for service worker to be ready before making requests
navigator.serviceWorker.ready
  .then(() => {
    submitCode(); // calls the function above to run your code
  })
  .catch((error) => {
    console.error("Service Worker not ready:", error);
  });



  
function submitCode() {

    const response = fetch("/api/codes", {
    method: "POST",
    body: JSON.stringify({
      "enter": "ROVER"
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
    
  })
  .then((response) => response.json())
  .then((json) => console.log(json))
}
