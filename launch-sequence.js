
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

async function submitCode() {
  try {
    let response = await fetch("/api/codes", {
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({
        enter: "ROVER",
      }),
      method: "POST"
    });

    console.log(response);
    const data = await response.json();
    
    console.log(data);
    const imgPlaceholder = document.getElementById("launch");
    
    if (!imgPlaceholder) {
      console.log("No placeholder found");
    }  
    imgPlaceholder.src= data.img;

  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
// Wait for service worker to be ready before making requests
navigator.serviceWorker.ready
  .then(() => {
    submitCode(); // calls the function above to run your code
  })
  .catch((error) => {
    console.error("Service Worker not ready:", error);
  });