if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => {
      console.log('Service worker registered', reg); // Log the registration object (not 'err')
    })
    .catch((err) => {
      console.log('Service worker not registered', err); // Log the error here
    });
}