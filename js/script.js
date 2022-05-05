if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/offline-page/sw.js', { scope: '/offline-page/' })
        .then(function() { console.log("Service Worker Registered"); });
}

const el = document.getElementById('header');
el.style.color = 'red';